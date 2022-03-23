from django.urls import path
from . import views

# Get all API routes

# Get all AirSupply API route
path('air_supply/all', views.air_supply_all, name='air_supply_all'),

# Get all AlarmSystemAnnunciatorPanel API route
path('alarm_system_annunciator_panel/all', views.alarm_system_annunciator_panel_all, name='alarm_system_annunciator_panel_all'),

# Get all AlternativeAutomaticFireExtinguishingSystem API route
path('alternative_automatic_fire_extinguishing_system/all', views.alternative_automatic_fire_extinguishing_system_all, name='alternative_automatic_fire_extinguishing_system_all'),

# Get all AreaOfRefuge API route
path('area_of_refuge/all', views.area_of_refuge_all, name='area_of_refuge_all'),

# Get all AutomaticSprinklerSystem API route
path('automatic_sprinkler_system/all', views.automatic_sprinkler_system_all, name='automatic_sprinkler_system_all'),

# Get all BackUpPowerSupplySystem API route
path('back_up_power_supply_system/all', views.back_up_power_supply_system_all, name='back_up_power_supply_system_all'),

# Get all Balcony API route
path('balcony/all', views.balcony_all, name='balcony_all'),

# Get all Building API route
path('building/all', views.building_all, name='building_all'),

# Get all BuildingAddress API route
path('building_address/all', views.building_address_all, name='building_address_all'),

# Get all BuildingEngineerContactAddress API route
path('building_engineer_contact_address/all', views.building_engineer_contact_address_all, name='building_engineer_contact_address_all'),

# Get all BuildingManagerContactAddress API route
path('building_manager_contact_address/all', views.building_manager_contact_address_all, name='building_manager_contact_address_all'),

# Get all BuildingOccupancy API route
path('building_occupancy/all', views.building_occupancy_all, name='building_occupancy_all'),

# Get all BuildingPlan API route
path('building_plan/all', views.building_plan_all, name='building_plan_all'),

# Get all CarbonMonoxideDetector API route
path('carbon_monoxide_detector/all', views.carbon_monoxide_detector_all, name='carbon_monoxide_detector_all'),

# Get all CbrSensor API route
path('cbr_sensor/all', views.cbr_sensor_all, name='cbr_sensor_all'),

# Get all ConcealedSpace API route
path('concealed_space/all', views.concealed_space_all, name='concealed_space_all'),

# Get all ConstructionType API route
path('construction_type/all', views.construction_type_all, name='construction_type_all'),

# Get all Door API route
path('door/all', views.door_all, name='door_all'),

# Get all DoorUnlockingSystemControlPanel API route
path('door_unlocking_system_control_panel/all', views.door_unlocking_system_control_panel_all, name='door_unlocking_system_control_panel_all'),

# Get all Elevator API route
path('elevator/all', views.elevator_all, name='elevator_all'),

# Get all ElevatorOverrideControlPanel API route
path('elevator_override_control_panel/all', views.elevator_override_control_panel_all, name='elevator_override_control_panel_all'),

# Get all EmergencyPowerOutlet API route
path('emergency_power_outlet/all', views.emergency_power_outlet_all, name='emergency_power_outlet_all'),

# Get all EmergencyServiceProviderContactAddress API route
path('emergency_service_provider_contact_address/all', views.emergency_service_provider_contact_address_all, name='emergency_service_provider_contact_address_all'),

# Get all ExteriorDoor API route
path('exterior_door/all', views.exterior_door_all, name='exterior_door_all'),

# Get all ExteriorWall API route
path('exterior_wall/all', views.exterior_wall_all, name='exterior_wall_all'),

# Get all ExteriorWindow API route
path('exterior_window/all', views.exterior_window_all, name='exterior_window_all'),

# Get all ExtremelyValuableMaterial API route
path('extremely_valuable_material/all', views.extremely_valuable_material_all, name='extremely_valuable_material_all'),

# Get all FarsControlPanel API route
path('fars_control_panel/all', views.fars_control_panel_all, name='fars_control_panel_all'),

# Get all FarsFillStation API route
path('fars_fill_station/all', views.fars_fill_station_all, name='fars_fill_station_all'),

# Get all FireAlarmSystem API route
path('fire_alarm_system/all', views.fire_alarm_system_all, name='fire_alarm_system_all'),

# Get all FireBarrier API route
path('fire_barrier/all', views.fire_barrier_all, name='fire_barrier_all'),

# Get all FireCommandCenter API route
path('fire_command_center/all', views.fire_command_center_all, name='fire_command_center_all'),

# Get all FireDepartmentCommunicationSystemPanel API route
path('fire_department_communication_system_panel/all', views.fire_department_communication_system_panel_all, name='fire_department_communication_system_panel_all'),

# Get all FireDepartmentConnection API route
path('fire_department_connection/all', views.fire_department_connection_all, name='fire_department_connection_all'),

# Get all FireHoseConnection API route
path('fire_hose_connection/all', views.fire_hose_connection_all, name='fire_hose_connection_all'),

# Get all FireHydrant API route
path('fire_hydrant/all', views.fire_hydrant_all, name='fire_hydrant_all'),

# Get all FireLane API route
path('fire_lane/all', views.fire_lane_all, name='fire_lane_all'),

# Get all FirePartition API route
path('fire_partition/all', views.fire_partition_all, name='fire_partition_all'),

# Get all FirePump API route
path('fire_pump/all', views.fire_pump_all, name='fire_pump_all'),

# Get all FireServiceOrganization API route
path('fire_service_organization/all', views.fire_service_organization_all, name='fire_service_organization_all'),

# Get all Firewall API route
path('firewall/all', views.firewall_all, name='firewall_all'),

# Get all FloorAssembly API route
path('floor_assembly/all', views.floor_assembly_all, name='floor_assembly_all'),

# Get all GasDetector API route
path('gas_detector/all', views.gas_detector_all, name='gas_detector_all'),

# Get all GasSupplySystem API route
path('gas_supply_system/all', views.gas_supply_system_all, name='gas_supply_system_all'),

# Get all Hallway API route
path('hallway/all', views.hallway_all, name='hallway_all'),

# Get all HazardousMaterial API route
path('hazardous_material/all', views.hazardous_material_all, name='hazardous_material_all'),

# Get all HazardousSubstance API route
path('hazardous_substance/all', views.hazardous_substance_all, name='hazardous_substance_all'),

# Get all Helipad API route
path('helipad/all', views.helipad_all, name='helipad_all'),

# Get all HoseConnection API route
path('hose_connection/all', views.hose_connection_all, name='hose_connection_all'),

# Get all Hospital API route
path('hospital/all', views.hospital_all, name='hospital_all'),

# Get all HvacSystem API route
path('hvac_system/all', views.hvac_system_all, name='hvac_system_all'),

# Get all IncidentBuilding API route
path('incident_building/all', views.incident_building_all, name='incident_building_all'),

# Get all IncidentSite API route
path('incident_site/all', views.incident_site_all, name='incident_site_all'),

# Get all KeyBox API route
path('key_box/all', views.key_box_all, name='key_box_all'),

# Get all MassNotificationSystem API route
path('mass_notification_system/all', views.mass_notification_system_all, name='mass_notification_system_all'),

# Get all MassNotificationSystemControlPanel API route
path('mass_notification_system_control_panel/all', views.mass_notification_system_control_panel_all, name='mass_notification_system_control_panel_all'),

# Get all Material API route
path('material/all', views.material_all, name='material_all'),

# Get all MunicipalDistributionSystem API route
path('municipal_distribution_system/all', views.municipal_distribution_system_all, name='municipal_distribution_system_all'),

# Get all Obstruction API route
path('obstruction/all', views.obstruction_all, name='obstruction_all'),

# Get all OwnerContactAddress API route
path('owner_contact_address/all', views.owner_contact_address_all, name='owner_contact_address_all'),

# Get all ParkingLot API route
path('parking_lot/all', views.parking_lot_all, name='parking_lot_all'),

# Get all Pipeline API route
path('pipeline/all', views.pipeline_all, name='pipeline_all'),

# Get all PoliceDepartment API route
path('police_department/all', views.police_department_all, name='police_department_all'),

# Get all PortableFireExtinguisher API route
path('portable_fire_extinguisher/all', views.portable_fire_extinguisher_all, name='portable_fire_extinguisher_all'),

# Get all PowerLine API route
path('power_line/all', views.power_line_all, name='power_line_all'),

# Get all PrimaryPowerSupplySystem API route
path('primary_power_supply_system/all', views.primary_power_supply_system_all, name='primary_power_supply_system_all'),

# Get all PublicSafetyAgencyContactAddress API route
path('public_safety_agency_contact_address/all', views.public_safety_agency_contact_address_all, name='public_safety_agency_contact_address_all'),

# Get all Ramp API route
path('ramp/all', views.ramp_all, name='ramp_all'),

# Get all RoadToIncident API route
path('road_to_incident/all', views.road_to_incident_all, name='road_to_incident_all'),

# Get all RoofAssembly API route
path('roof_assembly/all', views.roof_assembly_all, name='roof_assembly_all'),

# Get all RoofTopElement API route
path('roof_top_element/all', views.roof_top_element_all, name='roof_top_element_all'),

# Get all ShaftEnclosure API route
path('shaft_enclosure/all', views.shaft_enclosure_all, name='shaft_enclosure_all'),

# Get all SmokeandHeatRemovalSystem API route
path('smokeand_heat_removal_system/all', views.smokeand_heat_removal_system_all, name='smokeand_heat_removal_system_all'),

# Get all SmokeBarrier API route
path('smoke_barrier/all', views.smoke_barrier_all, name='smoke_barrier_all'),

# Get all SmokeControlSystem API route
path('smoke_control_system/all', views.smoke_control_system_all, name='smoke_control_system_all'),

# Get all SmokeControlSystemControlPanel API route
path('smoke_control_system_control_panel/all', views.smoke_control_system_control_panel_all, name='smoke_control_system_control_panel_all'),

# Get all SmokePartition API route
path('smoke_partition/all', views.smoke_partition_all, name='smoke_partition_all'),

# Get all Stairway API route
path('stairway/all', views.stairway_all, name='stairway_all'),

# Get all StandpipeSystem API route
path('standpipe_system/all', views.standpipe_system_all, name='standpipe_system_all'),

# Get all StaticWaterSource API route
path('static_water_source/all', views.static_water_source_all, name='static_water_source_all'),

# Get all StructuralElement API route
path('structural_element/all', views.structural_element_all, name='structural_element_all'),

# Get all SurroundingTerrain API route
path('surrounding_terrain/all', views.surrounding_terrain_all, name='surrounding_terrain_all'),

# Get all UtilityContactAddress API route
path('utility_contact_address/all', views.utility_contact_address_all, name='utility_contact_address_all'),

# Get all UtilityControlPanel API route
path('utility_control_panel/all', views.utility_control_panel_all, name='utility_control_panel_all'),

# Get all Vegetation API route
path('vegetation/all', views.vegetation_all, name='vegetation_all'),

# Get all VerticalOpening API route
path('vertical_opening/all', views.vertical_opening_all, name='vertical_opening_all'),

# Get all Wall API route
path('wall/all', views.wall_all, name='wall_all'),

# Get all WaterSupplyandSewerageSystem API route
path('water_supplyand_sewerage_system/all', views.water_supplyand_sewerage_system_all, name='water_supplyand_sewerage_system_all'),

# Get all WeatherCondition API route
path('weather_condition/all', views.weather_condition_all, name='weather_condition_all'),

# Get all Window API route
path('window/all', views.window_all, name='window_all'),

