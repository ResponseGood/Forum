from useroot.core.models import Post
from rest_framework import serializers

class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ("id","title", "content", "img", "category")


