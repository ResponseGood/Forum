# Generated by Django 2.1.2 on 2021-12-07 23:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20211117_1717'),
    ]

    operations = [
        migrations.AddField(
            model_name='code_2auth',
            name='valide_token',
            field=models.TextField(default=['h', 'm', 'S', '5', 'q', 'f', 'K', 'y', 'h', '4', 'q'], verbose_name='Токен'),
        ),
        migrations.AlterField(
            model_name='code_2auth',
            name='username_telegram',
            field=models.TextField(unique=True, verbose_name='Телеграмм'),
        ),
    ]
