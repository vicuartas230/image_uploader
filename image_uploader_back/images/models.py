from django.db import models
import os

class Image(models.Model):
    image_file = models.ImageField(upload_to="uploads/")
    date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return os.path.basename(self.image_file.name)
