import json
from django.contrib.auth.models import User
from rest_framework import permissions, viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny
from .serializers import UserSerializer, EducationSerializer, ProjectsSerializer
from .models import Projects, Education
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from django.conf import settings
from django.http import HttpResponse
from django.views.decorators.csrf import ensure_csrf_cookie



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

def contact_view(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Only POST allowed'}, status=405)

    try:
        data = json.loads(request.body)
        name    = data.get('name', '').strip()
        email   = data.get('email', '').strip()
        subject = data.get('subject', '').strip() or 'Portfolio contact form'
        message = data.get('message', '').strip()

        # 1) Build & send you the incoming message
        full_message = (
            f"New contact form submission:\n\n"
            f"Name: {name}\n"
            f"Email: {email}\n\n"
            f"Message:\n{message}"
        )
        send_mail(
            subject,
            full_message,
            settings.EMAIL_HOST_USER,      # from
            [settings.EMAIL_HOST_USER],    # to you
            fail_silently=False,
        )

        # 2) Send the confirmation back to the user
        confirmation_subject = "Thanks for reaching out!"
        confirmation_message = (
            f"Hi {name or 'there'},\n\n"
            "Thanks for your message! 😊\n\n"
            "I’ve received your inquiry and will get back to you as soon as possible.\n\n"
            "Best regards,\n"
            "Nikos"
        )
        send_mail(
            confirmation_subject,
            confirmation_message,
            settings.EMAIL_HOST_USER,  # from your address
            [email],                   # to the user’s address
            fail_silently=False,
        )

        return JsonResponse({'success': True})

    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
    
@ensure_csrf_cookie
def set_csrf(request):
    return HttpResponse('CSRF cookie set')