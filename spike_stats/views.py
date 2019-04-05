from django.shortcuts import render
from django.views.generic import ListView
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

def about(request):
    return render(request, 'spike_stats/about.html',
                  {'game': 'Game 1 about'})


