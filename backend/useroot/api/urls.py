from rest_framework import routers
from  .views import PostsView, UsersView

router = routers.DefaultRouter()
router.register('api/v1/get_all_posts', PostsView, 'posts')
router.register('api/v1/get_all_users', UsersView, 'users')
urlpatterns = router.urls

