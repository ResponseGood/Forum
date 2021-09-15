from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Post, Comment, Category, User

admin.site.site_header = 'Useroot AdminPanel'

admin.site.index_title = 'Useroot administration'


admin.site.register(Post) 
admin.site.register(Comment)
admin.site.register(Category)
admin.site.register(User, UserAdmin)