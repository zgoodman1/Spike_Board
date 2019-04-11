# Generated by Django 2.1.5 on 2019-04-05 22:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('spike_stats', '0004_auto_20190405_2245'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='game',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='game',
            name='player1',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='game',
            name='player2',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='game',
            name='player3',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='game',
            name='player4',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='game',
            name='score',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='game',
            name='winner',
            field=models.CharField(blank=True, default=None, max_length=20, null=True),
        ),
    ]
