# Generated by Django 2.1.5 on 2019-02-09 21:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('spike_stats', '0002_game_winner'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='game',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='game',
            name='winner',
            field=models.CharField(default='no winner', max_length=20),
        ),
    ]
