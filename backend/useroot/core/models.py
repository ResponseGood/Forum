from datetime import datetime
from django.db import models
from django.db.models.aggregates import Max
from django_extensions.db.fields import AutoSlugField
from autoslug import AutoSlugField
from django.contrib.auth.models import User

#class User(models.Model):
#   status             
#   count_posts
#   count_likes
#   count_comments
#   counts_offers
#   email
#   username
#   inviter

class Category(models.Model):
    name_category = models.CharField(verbose_name='Название категории', max_length=30)
    description = models.CharField(verbose_name='Описание категории', max_length=70)
    
    class Meta:
        verbose_name = "Категории"
        verbose_name_plural = "Категории"

    def __str__(self): 
        return '{}'.format(self.name_category)

    

class Post(models.Model):
    user = User.objects.get(id=1)
    author = models.ForeignKey(User, on_delete=models.CASCADE, default=user)
    title = models.CharField(verbose_name='Заголовок', max_length=100)
    category = models.ForeignKey(Category, verbose_name='Категория', on_delete=models.CASCADE, blank=True)
    now = datetime.now().replace(second=0,microsecond=0).strftime('%H:%M')
    time = models.TimeField(verbose_name='Дата публикации', default=now)
    content = models.TextField(verbose_name='Текст поста', max_length=10000, blank=True) 
    img = models.ImageField(verbose_name='Изображение', upload_to='images/', blank=True)
    slug = AutoSlugField(populate_from='title')
    is_official_article = models.BooleanField(verbose_name='Официальный', default=False)
    open_comments = models.BooleanField(verbose_name='Возможность комментировать', default=True)

    class Meta:
        verbose_name = "Посты"
        verbose_name_plural = "Посты"



    def __str__(self): 
        return 'Пост {} {}'.format(self.title, self.time)


class Comment(models.Model):
    user = User.objects.get(id=1)
    now = datetime.now().replace(second=0,microsecond=0).strftime('%H:%M')
    author = models.ForeignKey(User, on_delete=models.CASCADE, default=user)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    time = models.TimeField(verbose_name='Время написания комментария', default=now)
    rating = models.IntegerField(verbose_name='Рейтинг комментария', default=0, editable=False)
    text = models.TextField(verbose_name='Текст комментария')

    class Meta:
        verbose_name = "Комментарии"
        verbose_name_plural = "Комментарии"

    def __str__(self): 
        return '{} {}'.format(self.text, self.time)

    


              