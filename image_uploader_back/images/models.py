from django.db import models

class Image(models.Model):
    name = models.CharField(max_length=200)
    image_file = models.FileField(upload_to="uploads/")

    def __str__(self):
        return self.name
