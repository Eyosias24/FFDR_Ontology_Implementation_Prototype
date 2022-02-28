from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),



# API Routes

    # vegetation route 
    path("vegetation/all", views.vegetation_all, name="vegetation_all"),
]