from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),

# Get single IncidentBuilding item API route
path('incident_building/<str:projectName>', views.get_incident_building, name='get_incident_building'),
# path('add', views.add, name='add')


# Get single AutomaticFireExtinguishingSystem item API route
path('automatic_fire_extinguishing_system/<str:projectName>', views.get_automatic_fire_extinguishing_system, name='get_automatic_fire_extinguishing_system'),

]