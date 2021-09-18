import os
from uuid import uuid4
from django.db import models
from datetime import datetime
from django.conf import settings
from autoslug import AutoSlugField
from django.contrib.auth import get_user_model
from django.contrib.auth.models import AbstractUser

def rename_avatar(path):
    def wrapper(instance, filename):
        ext = filename.split('.')[-1]
        if instance.pk:
            filename = '{}.{}'.format(instance.pk, ext)
        else:
            filename = '{}.{}'.format(uuid4().hex, ext)
        return os.path.join(path, filename)
    return wrapper

class User(AbstractUser):
    avatar = models.ImageField(verbose_name='Аватар', blank=True, upload_to=rename_avatar(settings.MEDIA_ROOT))
    REQUIRED_FIELDS = ['avatar', 'email', 'first_name', 'last_name', 'date_joined']

class Category(models.Model):
    name_category = models.CharField(verbose_name='Название категории', max_length=30)
    description = models.CharField(verbose_name='Описание категории', max_length=70)
    
    class Meta:
        verbose_name = "Категории"
        verbose_name_plural = "Категории"

    def __str__(self): 
        return '{}'.format(self.name_category)

class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(verbose_name='Заголовок', max_length=100)
    category = models.ForeignKey(Category, verbose_name='Категория', on_delete=models.CASCADE)
    time = models.TimeField(auto_now_add=True,verbose_name='Дата публикации')
    content = models.TextField(verbose_name='Текст поста', blank=True) 
    img = models.ImageField(verbose_name='Изображение', upload_to='images/', blank=True)
    slug = AutoSlugField(populate_from='title')
    is_official_article = models.BooleanField(verbose_name='Официальный', default=False)
    open_comments = models.BooleanField(verbose_name='Возможность комментировать', default=True)

    class Meta:
        verbose_name = "Посты"
        verbose_name_plural = "Посты"

    def __str__(self): 
        return '{}'.format(self.title)

class Comment(models.Model):
    now = datetime.now().replace(second=0,microsecond=0).strftime('%H:%M')
    author = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    time = models.TimeField(verbose_name='Время написания комментария', default=now)
    rating = models.IntegerField(verbose_name='Рейтинг комментария', default=0, editable=False)
    text = models.TextField(verbose_name='Текст комментария')

    class Meta:
        verbose_name = "Комментарии"
        verbose_name_plural = "Комментарии"
    def __str__(self): 
        return '{} {}'.format(self.text, self.time)

class Achievement(models.Model):
    name = models.TextField(verbose_name='Название достижения', blank=True)
    description = models.TextField(verbose_name='Описание достижения')
    img = models.ImageField(verbose_name='Картинка достижения')

    class Meta:
        verbose_name = "Достижения"
        verbose_name_plural = "Достижения"
    
    def __str__(self): 
        return '{} {}'.format(self.name)
