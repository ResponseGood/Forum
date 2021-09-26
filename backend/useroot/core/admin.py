from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Post,Comment,User,Achievement

admin.site.site_header = 'Useroot AdminPanel'

admin.site.index_title = 'Useroot administration'

admin.site.register(Post) 
admin.site.register(Comment)
admin.site.register(User)
admin.site.register(Achievement)
