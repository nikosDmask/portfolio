from django.urls import include, path
from rest_framework import routers
from . import views
from .views import contact_view, set_csrf

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'education', views.EducationViewSet)
router.register(r'projects', views.ProjectsViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api/contact/', contact_view, name='contact'),
    path('api/set-csrf/', set_csrf),
]