from django.db import models
from django_extensions.db.fields import AutoSlugField
from autoslug import AutoSlugField


class Post(models.Model):
    title = models.CharField(verbose_name='Заголовок', max_length=100) 
    time = models.TimeField(verbose_name='Дата публикации', auto_now_add=True) 
    content = models.TextField(verbose_name='Текст поста', max_length=10000, blank=True) 
    img = models.ImageField(verbose_name='Изображение', upload_to='images/', blank=True)
    slug = AutoSlugField(populate_from='title')
    is_official_article = models.BooleanField(verbose_name='Официальный', default=False)
    open_comments = models.BooleanField(verbose_name='Возможность комментировать', default=True)




    def __str__(self): 
        return 'Пост {} Время {}'.format(self.title, self.time)

              