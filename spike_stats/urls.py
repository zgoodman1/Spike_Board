from django.urls import path
from .views import (
    GameListView, 
    GameDetailView, 
    GameCreateView,
    GameUpdateView,
    GameDeleteView,
    UserGameListView
)
from . import views

urlpatterns = [
    path('', GameListView.as_view(), name='spike_stats-home'),
    path('user/<str:username>', UserGameListView.as_view(), name='user-games'),
    path('game/<int:pk>/', GameDetailView.as_view(), name='spike_stats-detail'),
    path('game/new/', GameCreateView.as_view(), name='spike_stats-create'),
    path('game/<int:pk>/update', GameUpdateView.as_view(), name='spike_stats-update'),
    path('game/<int:pk>/delete', GameDeleteView.as_view(), name='spike_stats-delete'),
    path('about/', views.about, name='spike_stats-about'),
]
