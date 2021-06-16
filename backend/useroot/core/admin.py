from .models import Post, Comment, Category
from django.contrib import admin

admin.site.site_header = 'Useroot AdminPanel'

admin.site.index_title = 'Useroot administration'


admin.site.register(Post) 
admin.site.register(Comment)
admin.site.register(Category)