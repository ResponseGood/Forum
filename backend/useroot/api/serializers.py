from rest_framework import serializers
from useroot.core.models import Post, User

class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ("id", "slug","title", "author","content", "img")
        read_only_fields = ('author', 'id', 'slug')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "email", "password", "avatar", "status")
        extra_kwargs = {'password': {'write_only': True}, 'email': {'required': True}}


class UserPublicDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username","avatar", "status")


