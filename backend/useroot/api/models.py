import random
from django.db import models


class Code_2auth(models.Model):
    username_telegram = models.TextField(verbose_name='Телеграмм', unique=True)
    code = models.TextField(verbose_name='Код потверждения', unique=True, max_length=20)
    valide_token = models.TextField(verbose_name='Токен', default=''.join(random.choices("qwertyuiopasdfghjklzxcvbnm1234567890", k=32))) 
    def __str__(self): 
        return '{} - код {}'.format(self.username_telegram, self.code)

