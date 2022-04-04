from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),

# Get single IncidentBuilding item API route
path('incident_building/<str:projectName>', views.get_incident_building, name='get_incident_building'),
# path('add', views.add, name='add')


# Get AutomaticFireExtinguishingSystem for a project API route
path('automatic_fire_extinguishing_system/<str:projectName>', views.get_automatic_fire_extinguishing_system, name='get_automatic_fire_extinguishing_system'),

# Get FireHydrant for project item API route
path('fire_hydrant/<str:projectName>', views.get_fire_hydrant, name='get_fire_hydrant'),

# Get building utility systems for a project API route
path('building_utility_systems/<str:projectName>', views.get_building_utility_systems, name='get_building_utility_systems'),

# Get single PortableFireExtinguisher item API route
path('portable_fire_extinguisher/<str:projectName>', views.get_portable_fire_extinguisher, name='get_portable_fire_extinguisher'),
] 