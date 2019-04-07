from django.shortcuts import render, get_object_or_404
from django.views.generic import (
    ListView, 
    DetailView, 
    CreateView,
    UpdateView,
    DeleteView
)
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.contrib.auth.models import User
from .models import Game


def home(request):
    # makes a dictionary with a key 'games' to access
    # game info in games dictionary above, then displays
    # it on the home page
    context = {
        'games': Game.objects.all()
    }
    return render(request, 'spike_stats/home.html', context)


class GameListView(ListView):
    model = Game
    template_name = 'spike_stats/home.html' # <app>/<model>_<viewtype>.html
    context_object_name = 'games'
    ordering = ['-date_played'] # minus sign orders from newest to oldest
    paginate_by = 5


class UserGameListView(ListView):
    model = Game
    template_name = 'spike_stats/user_games.html' # <app>/<model>_<viewtype>.html
    context_object_name = 'games'
    paginate_by = 5

    def get_queryset(self):
        user = get_object_or_404(User, username=self.kwargs.get('username'))
        return Game.objects.filter(creator=user).order_by('-date_played')


class GameDetailView(DetailView):
    model = Game
    

class GameCreateView(LoginRequiredMixin, CreateView):
    model = Game
    fields = ['game', 'score', 'winner', 
    'player1', 'player2', 'player3', 'player4']

    def form_valid(self, form):
        game = form.save(commit=False)
        game.creator = self.request.user
        game.save()
        return super().form_valid(form)


class GameUpdateView(UserPassesTestMixin, LoginRequiredMixin, UpdateView):
    model = Game
    fields = ['game', 'score', 'winner', 
    'player1', 'player2', 'player3', 'player4']

    def form_valid(self, form):
        game = form.save(commit=False)
        game.creator = self.request.user
        game.save()
        return super().form_valid(form)

    def test_func(self):
        game = self.get_object()
        if self.request.user == game.creator:
            return True
        return False



class GameDeleteView(UserPassesTestMixin, LoginRequiredMixin, DeleteView):
    model = Game
    success_url = '/'
    def test_func(self):
        game = self.get_object()
        if self.request.user == game.creator:
            return True
        return False

    

def about(request):
    return render(request, 'spike_stats/about.html',
                  {'game': 'Game 1 about'})


