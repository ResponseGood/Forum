from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Post,Comment,User,Achievement

admin.site.site_header = 'Useroot AdminPanel'

admin.site.index_title = 'Useroot administration'

class MyUserAdmin(UserAdmin):
    model = User
    list_display = ()
    list_filter = ()  
    search_fields = ()  
    ordering = ()  
    filter_horizontal = () 
    fieldsets = UserAdmin.fieldsets + (
            (None, {'fields': ('avatar',)}),
    )


admin.site.register(Post) 
admin.site.register(Comment)
admin.site.register(User, MyUserAdmin)
admin.site.register(Achievement)
