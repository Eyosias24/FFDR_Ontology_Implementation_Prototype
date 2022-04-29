from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),


    path("table", views.table, name="table"),

    
    path("edit", views.edit, name="edit"),


# Get single IncidentBuilding item API route
path('incident_building/<str:projectName>', views.get_incident_building, name='get_incident_building'),



# Get single contact_addresses item API route
path('contact_addresses/<str:projectName>', views.get_contact_addresses, name='get_contact_addresses'),

# Get single contact addresses item API route
path('building_plans/<str:projectName>', views.get_building_plans, name='get_building_plans'),

# Get single fire command center item API route
path('fire_command_center/<str:projectName>', views.get_fire_command_center, name='get_fire_command_center'),

# Get control panel API route
path('control_panels/<str:projectName>', views.get_control_panels, name='get_control_panels'),

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
path('fire_and_smoke_protection_elements/<str:projectName>', views.get_fire_and_smoke_protection_elements, name='get_fire_and_smoke_protection_elements'),


# Get single area of refuge item API route
path('area_of_refuge/<str:projectName>', views.get_area_of_refuge, name='get_area_of_refuge'),

# Get single FARS fill stations item API route
path('fars_fill_stations/<str:projectName>', views.get_fars_fill_stations, name='get_fars_fill_stations'),

# Get single emergency power outlets item API route
path('emergency_power_outlets/<str:projectName>', views.get_emergency_power_outlets, name='get_emergency_power_outlets'),

# Get single smoke and heat removal system item API route
path('smoke_and_heat_removal_system/<str:projectName>', views.get_smoke_and_heat_removal_system, name='get_smoke_and_heat_removal_system'),

# Get single smoke control system item API route
path('smoke_control_system/<str:projectName>', views.get_smoke_control_system, name='get_smoke_control_system'),

# Get single smoke control system item API route
path('fire_pump/<str:projectName>', views.get_fire_pump, name='get_fire_pump'),

# Get single mass notification system item API route
path('mass_notification_system/<str:projectName>', views.get_mass_notification_system, name='get_mass_notification_system'),

# Get single Facade item API route
path('facade/<str:projectName>', views.get_facade, name='get_facade'),

# Get single Roof Top Element item API route
path('roof_top_element/<str:projectName>', views.get_roof_top_element, name='get_roof_top_element'),

# Get single extremely valuable materials item API route
path('extremely_valuable_materials/<str:projectName>', views.get_extremely_valuable_materials, name='get_extremely_valuable_materials'),


# Get single helipad item API route
path('helipad/<str:projectName>', views.get_helipad, name='get_helipad'),

# Get single KeyBox item API route
path('key_box/<str:projectName>', views.get_key_box, name='get_key_box'),

# Get single ConcealedSpace item API route
path('concealed_space/<str:projectName>', views.get_concealed_space, name='get_concealed_space'),

# Get single VerticalOpening item API route
path('vertical_opening/<str:projectName>', views.get_vertical_opening, name='get_vertical_opening'),


# Get single HazardousMaterial item API route
path('hazardous_material/<str:projectName>', views.get_hazardous_material, name='get_hazardous_material'),

# Get single door item API route
path('door/<str:projectName>', views.get_door, name='get_door'),

# Get single windows item API route
path('windows/<str:projectName>', views.get_window, name='get_window'),

# Get single elevator item API route
path('elevator/<str:projectName>', views.get_elevator, name='get_elevator'),

# Get single stairway item API route
path('stairway/<str:projectName>', views.get_stairway, name='get_stairway'),

# Get single ramp item API route
path('ramp/<str:projectName>', views.get_ramp, name='get_ramp'),

# Get single wall item API route
path('wall/<str:projectName>', views.get_wall, name='get_wall'),

# Get single floor assembly item API route
path('floor-assembly/<str:projectName>', views.get_floor_assembly, name='get_floor_assembly'),

# Get single roof assembly item API route
path('roof-assembly/<str:projectName>', views.get_roof_assembly, name='get_roof_assembly'),

# Get single balcony item API route
path('balcony/<str:projectName>', views.get_balcony, name='get_balcony'),

# Get single hallway item API route
path('hallway/<str:projectName>', views.get_hallway, name='get_hallway'),

# Get single structural item API route
path('structural_elements/<str:projectName>', views.get_structural_elements, name='get_structural_elements'),

# Get single non structural elements item API route
path('non_structural_elements/<str:projectName>', views.get_non_structural_elements, name='get_non_structural_elements'),

# Get single surroundings item API route
path('surroundings/<str:projectName>', views.get_surroundings, name='get_surroundings'),

# Get single WaterSource item API route
path('water_source/<str:projectName>', views.get_water_source, name='get_water_source'),

# Get single FireLane item API route
path('fire_lane/<str:projectName>', views.get_fire_lane, name='get_fire_lane'),

# Get single RoadToIncident item API route
path('road_to_incident/<str:projectName>', views.get_road_to_incident, name='get_road_to_incident'),

]  