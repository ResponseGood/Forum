from django.urls import path
from django.contrib.auth import get_user_model
from .views import Post

urlpatterns = [
    path('', Post.as_view(), name='Post_list'), #get all posts
    path('<int:pk>', Post.as_view(), name='Post_detail'), #get data by id post
]