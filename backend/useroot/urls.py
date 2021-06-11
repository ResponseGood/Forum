from useroot.core import views
from useroot.views import index 
from useroot.api import urls
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    path('<slug:slug>/', views.Post, name='posts'),
    path('', include(urls))
]
