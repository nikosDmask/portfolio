from django.contrib.auth.models import User
from rest_framework import permissions, viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny
from .serializers import UserSerializer, EducationSerializer, ProjectsSerializer
from .models import Projects, Education




class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class ProjectsViewSet(viewsets.ModelViewSet):
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]