from django.urls import path
from .views import Post, User

urlpatterns = [
    path('', Post.as_view(), name='Post_list'), #get all posts
    path('<int:pk>', Post.as_view(), name='Post_detail'), #get data by id post
    path('<int:pk>', User.as_view(), name='User_detail')
]