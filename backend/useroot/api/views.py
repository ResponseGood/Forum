from useroot.core.models import Post
from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from .serializers import PostsSerializer


class PostsView(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]
    serializer_class = PostsSerializer