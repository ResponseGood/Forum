from useroot.core.models import Post
from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from .serializers import PostsSerializer, UsersSerializer


class PostsView(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PostsSerializer
    
class UsersView(viewsets.ModelViewSet):
    users = User
    queryset = users.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UsersSerializer
    