from django.db.models import fields
from rest_framework import serializers
from useroot.core.models import Post
from django.db import models
from django.contrib.auth.models import User



class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'date_joined']

class GetUserByID(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


