from rest_framework import views
from rest_framework.views import APIView
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from useroot.core.models import Post
from .serializers import PostsSerializer, UsersSerializer, GetUserByID
from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from django.template.defaultfilters import slugify


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

class GetUserByID(viewsets.ModelViewSet):
    users = User
    queryset = User.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = GetUserByID
    