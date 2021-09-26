from django.db import models
from autoslug import AutoSlugField


class Category(models.Model):
    name_category = models.CharField(verbose_name='Название категории', max_length=30)
    description = models.CharField(verbose_name='Описание категории', max_length=70)
    
    class Meta:
        verbose_name = "Категории"
        verbose_name_plural = "Категории"

    def __str__(self): 
        return '{}'.format(self.name_category)
