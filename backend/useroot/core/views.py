from django.shortcuts import render, redirect
from django.contrib import admin
from .models import Post


from django.views.generic import ListView, DetailView

from .models import Post

class PostListView(ListView):
    model = Post
    template_name = 'post_list.html'


class PostDetailView(DetailView):
    model = Post
    template_name = 'post_detail.html'
    