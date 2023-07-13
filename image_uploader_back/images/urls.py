from django.urls import path, include
from restframework import routers
from images import views

router = routers.DefaultRouter()
router.register(r'images', views.ImageView, 'images')

urlpatterns = [
    path('api/v1', include(routers.urls))
]
