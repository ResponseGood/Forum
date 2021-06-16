from useroot.core import views, models
from useroot.views import index 
from useroot.api import urls
from django.contrib import admin
from rest_framework import permissions
from django.urls import path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from django.conf.urls import url


schema_view = get_schema_view(
    openapi.Info(
        title="Useroot API",
        default_version='v1',
        description="Useroot API offical",
        contact=openapi.Contact(email="nixwares@gmail.com"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    path('', include(urls)),
    url(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    url(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    url(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc')
]
