from django.db import models


# Create your models here.

class Projects(models.Model):
    company   = models.CharField(max_length=200)
    year      = models.CharField(max_length=4)
    title     = models.CharField(max_length=200)
    results   = models.JSONField(
        default=list,
        help_text="List of result objects, e.g. [{ 'title': '…' }, …]"
    )
    link      = models.URLField(
        max_length=500,
        help_text="URL to the live project or demo"
    )
    description = models.TextField()
    image     = models.URLField(max_length=500, help_text="URL of the project image")
    created   = models.DateTimeField(auto_now_add=True)
    updated   = models.DateTimeField(auto_now=True)
    ordinal   = models.IntegerField(default=0, help_text="Sort order")

    class Meta:
        ordering = ['ordinal', '-created']

    def __str__(self):
        return f"{self.company} — {self.title} ({self.year})"

class Education(models.Model):
      school = models.CharField(max_length=255)
      degree = models.CharField(max_length=255)
      years = models.PositiveIntegerField()
      descriprion = models.TextField()
      ordinal = models.IntegerField()

def __str__(self):
        return self.title