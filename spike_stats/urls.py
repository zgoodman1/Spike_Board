from django.urls import path
from .views import GameListView
from . import views

urlpatterns = [
    path('', GameListView.as_view(), name='spike_stats-home'),
    path('about/', views.about, name='spike_stats-about'),
]
