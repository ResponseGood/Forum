from django.urls import path
from  .views import PostsView, PostView, RegisterView, LoginView, UserView, LogoutView, UserPublicView

urlpatterns = [
    path('api/get_all_posts/', PostsView.as_view()),
    path('api/get_post/<int:pk>', PostView.as_view()),
    path('api/register/', RegisterView.as_view()),
    path('api/login/', LoginView.as_view()),
    path('api/me/', UserView.as_view()),
    path('api/logout/', LogoutView.as_view()),
    path('api/user/<int:pk>', UserPublicView.as_view()),
]
