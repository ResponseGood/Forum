from useroot.core.models import Post, User
from rest_framework import viewsets, permissions
from .serializers import PostsSerializer, UserSerializer


class PostsView(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]
    serializer_class = PostsSerializer