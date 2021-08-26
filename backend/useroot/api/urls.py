from django.urls import path 
from  .views import PostsView, UsersView, GetUserByID
from rest_framework import routers, urlpatterns

router = routers.DefaultRouter()
router.register('api/v1/get_all_posts', PostsView, 'posts')
router.register('api/v1/get_all_users', UsersView, 'users')
router.register('api/v1/get_user_byid/<slug>', UsersView, 'users')

urlpatterns = router.urls

