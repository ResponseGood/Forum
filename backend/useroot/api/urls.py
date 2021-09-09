from rest_framework import routers
from  .views import PostsView

router = routers.DefaultRouter()
router.register('api/get_all_posts', PostsView, 'posts')
urlpatterns = router.urls
