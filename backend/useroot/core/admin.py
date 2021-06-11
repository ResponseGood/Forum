from .models import Post
from django.contrib import admin

admin.site.site_header = 'Useroot AdminPanel'

admin.site.index_title = 'Useroot administration'


admin.site.register(Post) 