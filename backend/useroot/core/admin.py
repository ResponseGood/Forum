from django.contrib import admin
from .models import Post,Comment,Category,User,Achievement

admin.site.site_header = 'Useroot AdminPanel'

admin.site.index_title = 'Useroot administration'

admin.site.register(Post) 
admin.site.register(Comment)
admin.site.register(Category)
admin.site.register(User)
admin.site.register(Achievement)
