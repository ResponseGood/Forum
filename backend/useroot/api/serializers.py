from rest_framework import serializers
from useroot.core.models import Post, User
from useroot.Categories.models import Category

class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ("id", "slug","title", "author","content", "img", "category")
        read_only_fields = ('author', 'id', 'slug')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "email", "password", "avatar")
        extra_kwargs = {'password': {'write_only': True}}

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        #fields


