from django.urls import path
from . import views

# Get API routes

# Get single AirSupply API route
path('air_supply/all', views.air_supply_all, name='air_supply_all'),

# Get single AlarmSystemAnnunciatorPanel item API route
path('alarm_system_annunciator_panel/<str:projectName>', views.get_alarm_system_annunciator_panel, name='get_alarm_system_annunciator_panel'),

# Get single AlternativeAutomaticFireExtinguishingSystem item API route
path('alternative_automatic_fire_extinguishing_system/<str:projectName>', views.get_alternative_automatic_fire_extinguishing_system, name='get_alternative_automatic_fire_extinguishing_system'),

# Get single AreaOfRefuge item API route
path('area_of_refuge/<str:projectName>', views.get_area_of_refuge, name='get_area_of_refuge'),

# Get single AutomaticSprinklerSystem item API route
path('automatic_sprinkler_system/<str:projectName>', views.get_automatic_sprinkler_system, name='get_automatic_sprinkler_system'),

# Get single BackUpPowerSupplySystem item API route
path('back_up_power_supply_system/<str:projectName>', views.get_back_up_power_supply_system, name='get_back_up_power_supply_system'),

# Get single Balcony item API route
path('balcony/<str:projectName>', views.get_balcony, name='get_balcony'),

# Get single Building item API route
path('building/<str:projectName>', views.get_building, name='get_building'),

# Get single BuildingAddress item API route
path('building_address/<str:projectName>', views.get_building_address, name='get_building_address'),

# Get single BuildingEngineerContactAddress item API route
path('building_engineer_contact_address/<str:projectName>', views.get_building_engineer_contact_address, name='get_building_engineer_contact_address'),

# Get single BuildingManagerContactAddress item API route
path('building_manager_contact_address/<str:projectName>', views.get_building_manager_contact_address, name='get_building_manager_contact_address'),

# Get single BuildingOccupancy item API route
path('building_occupancy/<str:projectName>', views.get_building_occupancy, name='get_building_occupancy'),

# Get single BuildingPlan item API route
path('building_plan/<str:projectName>', views.get_building_plan, name='get_building_plan'),

# Get single CarbonMonoxideDetector item API route
path('carbon_monoxide_detector/<str:projectName>', views.get_carbon_monoxide_detector, name='get_carbon_monoxide_detector'),

# Get single CbrSensor item API route
path('cbr_sensor/<str:projectName>', views.get_cbr_sensor, name='get_cbr_sensor'),

# Get single ConcealedSpace item API route
path('concealed_space/<str:projectName>', views.get_concealed_space, name='get_concealed_space'),

# Get single ConstructionType item API route
path('construction_type/<str:projectName>', views.get_construction_type, name='get_construction_type'),

# Get single Door item API route
path('door/<str:projectName>', views.get_door, name='get_door'),

# Get single DoorUnlockingSystemControlPanel item API route
path('door_unlocking_system_control_panel/<str:projectName>', views.get_door_unlocking_system_control_panel, name='get_door_unlocking_system_control_panel'),

# Get single Elevator item API route
path('elevator/<str:projectName>', views.get_elevator, name='get_elevator'),

# Get single ElevatorOverrideControlPanel item API route
path('elevator_override_control_panel/<str:projectName>', views.get_elevator_override_control_panel, name='get_elevator_override_control_panel'),

# Get single EmergencyPowerOutlet item API route
path('emergency_power_outlet/<str:projectName>', views.get_emergency_power_outlet, name='get_emergency_power_outlet'),

# Get single EmergencyServiceProviderContactAddress item API route
path('emergency_service_provider_contact_address/<str:projectName>', views.get_emergency_service_provider_contact_address, name='get_emergency_service_provider_contact_address'),

# Get single ExteriorDoor item API route
path('exterior_door/<str:projectName>', views.get_exterior_door, name='get_exterior_door'),

# Get single ExteriorWall item API route
path('exterior_wall/<str:projectName>', views.get_exterior_wall, name='get_exterior_wall'),

# Get single ExteriorWindow item API route
path('exterior_window/<str:projectName>', views.get_exterior_window, name='get_exterior_window'),

# Get single ExtremelyValuableMaterial item API route
path('extremely_valuable_material/<str:projectName>', views.get_extremely_valuable_material, name='get_extremely_valuable_material'),

# Get single FarsControlPanel item API route
path('fars_control_panel/<str:projectName>', views.get_fars_control_panel, name='get_fars_control_panel'),

# Get single FarsFillStation item API route
path('fars_fill_station/<str:projectName>', views.get_fars_fill_station, name='get_fars_fill_station'),

# Get single FireAlarmSystem item API route
path('fire_alarm_system/<str:projectName>', views.get_fire_alarm_system, name='get_fire_alarm_system'),

# Get single FireBarrier item API route
path('fire_barrier/<str:projectName>', views.get_fire_barrier, name='get_fire_barrier'),

# Get single FireCommandCenter item API route
path('fire_command_center/<str:projectName>', views.get_fire_command_center, name='get_fire_command_center'),

# Get single FireDepartmentCommunicationSystemPanel item API route
path('fire_department_communication_system_panel/<str:projectName>', views.get_fire_department_communication_system_panel, name='get_fire_department_communication_system_panel'),

# Get single FireDepartmentConnection item API route
path('fire_department_connection/<str:projectName>', views.get_fire_department_connection, name='get_fire_department_connection'),

# Get single FireHoseConnection item API route
path('fire_hose_connection/<str:projectName>', views.get_fire_hose_connection, name='get_fire_hose_connection'),

# Get single FireHydrant item API route
path('fire_hydrant/<str:projectName>', views.get_fire_hydrant, name='get_fire_hydrant'),

# Get single FireLane item API route
path('fire_lane/<str:projectName>', views.get_fire_lane, name='get_fire_lane'),

# Get single FirePartition item API route
path('fire_partition/<str:projectName>', views.get_fire_partition, name='get_fire_partition'),

# Get single FirePump item API route
path('fire_pump/<str:projectName>', views.get_fire_pump, name='get_fire_pump'),

# Get single FireServiceOrganization item API route
path('fire_service_organization/<str:projectName>', views.get_fire_service_organization, name='get_fire_service_organization'),

# Get single Firewall item API route
path('firewall/<str:projectName>', views.get_firewall, name='get_firewall'),

# Get single FloorAssembly item API route
path('floor_assembly/<str:projectName>', views.get_floor_assembly, name='get_floor_assembly'),

# Get single GasDetector item API route
path('gas_detector/<str:projectName>', views.get_gas_detector, name='get_gas_detector'),

# Get single GasSupplySystem item API route
path('gas_supply_system/<str:projectName>', views.get_gas_supply_system, name='get_gas_supply_system'),

# Get single Hallway item API route
path('hallway/<str:projectName>', views.get_hallway, name='get_hallway'),

# Get single HazardousMaterial item API route
path('hazardous_material/<str:projectName>', views.get_hazardous_material, name='get_hazardous_material'),

# Get single HazardousSubstance item API route
path('hazardous_substance/<str:projectName>', views.get_hazardous_substance, name='get_hazardous_substance'),

# Get single Helipad item API route
path('helipad/<str:projectName>', views.get_helipad, name='get_helipad'),

# Get single HoseConnection item API route
path('hose_connection/<str:projectName>', views.get_hose_connection, name='get_hose_connection'),

# Get single Hospital item API route
path('hospital/<str:projectName>', views.get_hospital, name='get_hospital'),

# Get single HvacSystem item API route
path('hvac_system/<str:projectName>', views.get_hvac_system, name='get_hvac_system'),

# Get single IncidentBuilding item API route
path('incident_building/<str:projectName>', views.get_incident_building, name='get_incident_building'),

# Get single IncidentSite item API route
path('incident_site/<str:projectName>', views.get_incident_site, name='get_incident_site'),

# Get single KeyBox item API route
path('key_box/<str:projectName>', views.get_key_box, name='get_key_box'),

# Get single MassNotificationSystem item API route
path('mass_notification_system/<str:projectName>', views.get_mass_notification_system, name='get_mass_notification_system'),

# Get single MassNotificationSystemControlPanel item API route
path('mass_notification_system_control_panel/<str:projectName>', views.get_mass_notification_system_control_panel, name='get_mass_notification_system_control_panel'),

# Get single Material item API route
path('material/<str:projectName>', views.get_material, name='get_material'),

# Get single MunicipalDistributionSystem item API route
path('municipal_distribution_system/<str:projectName>', views.get_municipal_distribution_system, name='get_municipal_distribution_system'),

# Get single Obstruction item API route
path('obstruction/<str:projectName>', views.get_obstruction, name='get_obstruction'),

# Get single OwnerContactAddress item API route
path('owner_contact_address/<str:projectName>', views.get_owner_contact_address, name='get_owner_contact_address'),

# Get single ParkingLot item API route
path('parking_lot/<str:projectName>', views.get_parking_lot, name='get_parking_lot'),

# Get single Pipeline item API route
path('pipeline/<str:projectName>', views.get_pipeline, name='get_pipeline'),

# Get single PoliceDepartment item API route
path('police_department/<str:projectName>', views.get_police_department, name='get_police_department'),

# Get single PortableFireExtinguisher item API route
path('portable_fire_extinguisher/<str:projectName>', views.get_portable_fire_extinguisher, name='get_portable_fire_extinguisher'),

# Get single PowerLine item API route
path('power_line/<str:projectName>', views.get_power_line, name='get_power_line'),

# Get single PrimaryPowerSupplySystem item API route
path('primary_power_supply_system/<str:projectName>', views.get_primary_power_supply_system, name='get_primary_power_supply_system'),

# Get single PublicSafetyAgencyContactAddress item API route
path('public_safety_agency_contact_address/<str:projectName>', views.get_public_safety_agency_contact_address, name='get_public_safety_agency_contact_address'),

# Get single Ramp item API route
path('ramp/<str:projectName>', views.get_ramp, name='get_ramp'),

# Get single RoadToIncident item API route
path('road_to_incident/<str:projectName>', views.get_road_to_incident, name='get_road_to_incident'),

# Get single RoofAssembly item API route
path('roof_assembly/<str:projectName>', views.get_roof_assembly, name='get_roof_assembly'),

# Get single RoofTopElement item API route
path('roof_top_element/<str:projectName>', views.get_roof_top_element, name='get_roof_top_element'),

# Get single ShaftEnclosure item API route
path('shaft_enclosure/<str:projectName>', views.get_shaft_enclosure, name='get_shaft_enclosure'),

# Get single SmokeandHeatRemovalSystem item API route
path('smokeand_heat_removal_system/<str:projectName>', views.get_smokeand_heat_removal_system, name='get_smokeand_heat_removal_system'),

# Get single SmokeBarrier item API route
path('smoke_barrier/<str:projectName>', views.get_smoke_barrier, name='get_smoke_barrier'),

# Get single SmokeControlSystem item API route
path('smoke_control_system/<str:projectName>', views.get_smoke_control_system, name='get_smoke_control_system'),

# Get single SmokeControlSystemControlPanel item API route
path('smoke_control_system_control_panel/<str:projectName>', views.get_smoke_control_system_control_panel, name='get_smoke_control_system_control_panel'),

# Get single SmokePartition item API route
path('smoke_partition/<str:projectName>', views.get_smoke_partition, name='get_smoke_partition'),

# Get single Stairway item API route
path('stairway/<str:projectName>', views.get_stairway, name='get_stairway'),

# Get single StandpipeSystem item API route
path('standpipe_system/<str:projectName>', views.get_standpipe_system, name='get_standpipe_system'),

# Get single StaticWaterSource item API route
path('static_water_source/<str:projectName>', views.get_static_water_source, name='get_static_water_source'),

# Get single StructuralElement item API route
path('structural_element/<str:projectName>', views.get_structural_element, name='get_structural_element'),

# Get single SurroundingTerrain item API route
path('surrounding_terrain/<str:projectName>', views.get_surrounding_terrain, name='get_surrounding_terrain'),

# Get single UtilityContactAddress item API route
path('utility_contact_address/<str:projectName>', views.get_utility_contact_address, name='get_utility_contact_address'),

# Get single UtilityControlPanel item API route
path('utility_control_panel/<str:projectName>', views.get_utility_control_panel, name='get_utility_control_panel'),

# Get single Vegetation item API route
path('vegetation/<str:projectName>', views.get_vegetation, name='get_vegetation'),

# Get single VerticalOpening item API route
path('vertical_opening/<str:projectName>', views.get_vertical_opening, name='get_vertical_opening'),

# Get single Wall item API route
path('wall/<str:projectName>', views.get_wall, name='get_wall'),

# Get single WaterSupplyandSewerageSystem item API route
path('water_supplyand_sewerage_system/<str:projectName>', views.get_water_supplyand_sewerage_system, name='get_water_supplyand_sewerage_system'),

# Get single WeatherCondition item API route
path('weather_condition/<str:projectName>', views.get_weather_condition, name='get_weather_condition'),

# Get single Window item API route
path('window/<str:projectName>', views.get_window, name='get_window'),

