from rest_framework import serializers
from useroot.core.models import Post, User

class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ("id", "slug","title", "author","content", "img", "category")
        read_only_fields = ('author',)


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("avatar", "email", "id", "first_name", "last_name", "username", "date_joined")
        read_only_fields = ('date_joined',)


