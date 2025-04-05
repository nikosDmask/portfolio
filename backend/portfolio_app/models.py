from django.db import models

# Create your models here.
class Projects(models.Model):
    company = models.CharField(max_length=255)
    year = models.PositiveIntegerField()
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='portfolio_images/')
    ordinal = models.IntegerField()

class Education(models.Model):
      school = models.CharField(max_length=255)
      degree = models.CharField(max_length=255)
      years = models.PositiveIntegerField()
      descriprion = models.TextField()
      ordinal = models.IntegerField()

def __str__(self):
        return self.title