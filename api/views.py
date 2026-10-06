# api/views.py
# views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Service, Blog
from .serializers import ServiceSerializer, BlogSerializer



@api_view(['GET'])
def service_list(request):
    services = Service.objects.all()
    serializer = ServiceSerializer(services, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def blog_list(request):
    blogs = Blog.objects.all()
    serializer = BlogSerializer(blogs, many=True)
    return Response(serializer.data)

