# Generated by Django 2.1.2 on 2021-11-17 17:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20211117_1713'),
    ]

    operations = [
        migrations.AlterField(
            model_name='code_2auth',
            name='code',
            field=models.TextField(max_length=20, unique=True, verbose_name='Код потверждения'),
        ),
    ]
