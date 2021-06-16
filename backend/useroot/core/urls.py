from django.urls import path
from django.contrib.auth import get_user_model
from .views import Post

urlpatterns = [
    path('<int:pk>', Post.as_view(), name='Post_detail'),
    path('', Post.as_view(), name='Post_list'),
    path('<int:pk>', Post.as_view(), name='Post_detail'),
    path('', get_user_model().as_view(), name='User_list'),
    path('<int:pk>', get_user_model().as_view(), name='User_detail'),
]