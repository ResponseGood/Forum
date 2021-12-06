from django.db import models


class Code_2auth(models.Model):
    username_telegram = models.TextField(verbose_name='Телеграмм')
    code = models.TextField(verbose_name='Код потверждения', unique=True, max_length=20)   
    def __str__(self): 
        return '{}'.format(self.name)
