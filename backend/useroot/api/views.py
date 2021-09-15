from useroot.core.models import Post
from .serializers import PostsSerializer
from rest_framework import viewsets, permissions

class PostsView(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]
    serializer_class = PostsSerializer