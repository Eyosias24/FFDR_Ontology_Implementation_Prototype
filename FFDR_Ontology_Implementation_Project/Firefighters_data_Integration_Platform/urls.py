from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),

# Get single IncidentBuilding item API route
path('incident_building/<str:projectName>', views.get_incident_building, name='get_incident_building'),
# path('add', views.add, name='add')


# Get single contact_addresses item API route
path('contact_addresses/<str:projectName>', views.get_contact_addresses, name='get_contact_addresses'),

# Get AutomaticFireExtinguishingSystem for a project API route
path('automatic_fire_extinguishing_system/<str:projectName>', views.get_automatic_fire_extinguishing_system, name='get_automatic_fire_extinguishing_system'),

# Get FireHydrant for project item API route
path('fire_hydrant/<str:projectName>', views.get_fire_hydrant, name='get_fire_hydrant'),

# Get building utility systems for a project API route
path('building_utility_systems/<str:projectName>', views.get_building_utility_systems, name='get_building_utility_systems'),

# Get single PortableFireExtinguisher item API route
path('portable_fire_extinguisher/<str:projectName>', views.get_portable_fire_extinguisher, name='get_portable_fire_extinguisher'),

# Get single FireAlarmSystem item API route
path('fire_alarm_system/<str:projectName>', views.get_fire_alarm_system, name='get_fire_alarm_system'),

# Get single FireDepartmentConnection item API route
path('fire_department_connection/<str:projectName>', views.get_fire_department_connection, name='get_fire_department_connection'),


# Get single FireHoseConnection item API route
path('fire_hose_connection/<str:projectName>', views.get_fire_hose_connection, name='get_fire_hose_connection'),

# Get single StandpipeSystem item API route
path('standpipe_system/<str:projectName>', views.get_standpipe_system, name='get_standpipe_system'),

# Get single sensor and detectors item API route
path('sensors_and_detectors/<str:projectName>', views.get_sensor_and_detector, name='get_sensor_and_detector'),

# Get single fire and smoke protection elements item API route
path('fire-and-smoke-protection-elements/<str:projectName>', views.get_fire_and_smoke_protection_elements, name='get_fire_and_smoke_protection_elements'),

# Get single Facade item API route
path('facade/<str:projectName>', views.get_facade, name='get_facade'),

# Get single RoofTopElement item API route
path('roof_top_element/<str:projectName>', views.get_roof_top_element, name='get_roof_top_element'),

# Get single KeyBox item API route
path('key_box/<str:projectName>', views.get_key_box, name='get_key_box'),

# Get single ConcealedSpace item API route
path('concealed_space/<str:projectName>', views.get_concealed_space, name='get_concealed_space'),

# Get single VerticalOpening item API route
path('vertical_opening/<str:projectName>', views.get_vertical_opening, name='get_vertical_opening'),


# Get single HazardousMaterial item API route
path('hazardous_material/<str:projectName>', views.get_hazardous_material, name='get_hazardous_material'),
]  