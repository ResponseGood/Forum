from django.contrib import admin
from ..api.models import Code_2auth
from .models import Post,Comment,User,Achievement

admin.site.site_header = 'Useroot AdminPanel'

admin.site.index_title = 'Useroot administration'

admin.site.register(Post) 
admin.site.register(Comment)
admin.site.register(User)
admin.site.register(Achievement)
admin.site.register(Code_2auth)
