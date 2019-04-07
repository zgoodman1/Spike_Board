from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse

class Game(models.Model):
    game = models.CharField(max_length=100, blank=True,null=True)
    score = models.CharField(max_length=10, blank=True,null=True)
    winner = models.CharField(max_length=20, default=None, blank=True,null=True)
    date_played = models.DateField(default=timezone.now)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    player1 = models.CharField(max_length=20, blank=True,null=True)
    player2 = models.CharField(max_length=20, blank=True,null=True)
    player3 = models.CharField(max_length=20, blank=True,null=True)
    player4 = models.CharField(max_length=20, blank=True,null=True)

    def __str__(self):
        return self.game

    def get_absolute_url(self):
            return reverse('spike_stats-detail', kwargs={'pk': self.pk})

    
    

