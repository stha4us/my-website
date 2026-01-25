from django.db import models

# Create your models here.
class Homepage(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    description = models.TextField()
    enabled = models.BooleanField(default=False)

    def __str__(self):
        return self.title