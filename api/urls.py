from django.urls import path
from .views import service_list, blog_list

urlpatterns = [
    path('services/', service_list, name='service-list'),
    path('blogs/', blog_list, name='blog-list'),
]