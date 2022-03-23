from django.http import JsonResponse
from .models import *

# fetch AirSupply
def get_air_supply(request, projectName):
	airSupply = AirSupply.objects.get(hasProjectName=projectName)
	return JsonResponse(airSupply.serialize(), safe=False)

# fetch AlarmSystemAnnunciatorPanel
def get_alarm_system_annunciator_panel(request, projectName):
	alarmSystemAnnunciatorPanel = AlarmSystemAnnunciatorPanel.objects.get(hasProjectName=projectName)
	return JsonResponse(alarmSystemAnnunciatorPanel.serialize(), safe=False)

# fetch AlternativeAutomaticFireExtinguishingSystem
def get_alternative_automatic_fire_extinguishing_system(request, projectName):
	alternativeAutomaticFireExtinguishingSystem = AlternativeAutomaticFireExtinguishingSystem.objects.get(hasProjectName=projectName)
	return JsonResponse(alternativeAutomaticFireExtinguishingSystem.serialize(), safe=False)

# fetch AreaOfRefuge
def get_area_of_refuge(request, projectName):
	areaOfRefuge = AreaOfRefuge.objects.get(hasProjectName=projectName)
	return JsonResponse(areaOfRefuge.serialize(), safe=False)

# fetch AutomaticSprinklerSystem
def get_automatic_sprinkler_system(request, projectName):
	automaticSprinklerSystem = AutomaticSprinklerSystem.objects.get(hasProjectName=projectName)
	return JsonResponse(automaticSprinklerSystem.serialize(), safe=False)

# fetch BackUpPowerSupplySystem
def get_back_up_power_supply_system(request, projectName):
	backUpPowerSupplySystem = BackUpPowerSupplySystem.objects.get(hasProjectName=projectName)
	return JsonResponse(backUpPowerSupplySystem.serialize(), safe=False)

# fetch Balcony
def get_balcony(request, projectName):
	balcony = Balcony.objects.get(hasProjectName=projectName)
	return JsonResponse(balcony.serialize(), safe=False)

# fetch Building
def get_building(request, projectName):
	building = Building.objects.get(hasProjectName=projectName)
	return JsonResponse(building.serialize(), safe=False)

# fetch BuildingAddress
def get_building_address(request, projectName):
	buildingAddress = BuildingAddress.objects.get(hasProjectName=projectName)
	return JsonResponse(buildingAddress.serialize(), safe=False)

# fetch BuildingEngineerContactAddress
def get_building_engineer_contact_address(request, projectName):
	buildingEngineerContactAddress = BuildingEngineerContactAddress.objects.get(hasProjectName=projectName)
	return JsonResponse(buildingEngineerContactAddress.serialize(), safe=False)

# fetch BuildingManagerContactAddress
def get_building_manager_contact_address(request, projectName):
	buildingManagerContactAddress = BuildingManagerContactAddress.objects.get(hasProjectName=projectName)
	return JsonResponse(buildingManagerContactAddress.serialize(), safe=False)

# fetch BuildingOccupancy
def get_building_occupancy(request, projectName):
	buildingOccupancy = BuildingOccupancy.objects.get(hasProjectName=projectName)
	return JsonResponse(buildingOccupancy.serialize(), safe=False)

# fetch BuildingPlan
def get_building_plan(request, projectName):
	buildingPlan = BuildingPlan.objects.get(hasProjectName=projectName)
	return JsonResponse(buildingPlan.serialize(), safe=False)

# fetch CarbonMonoxideDetector
def get_carbon_monoxide_detector(request, projectName):
	carbonMonoxideDetector = CarbonMonoxideDetector.objects.get(hasProjectName=projectName)
	return JsonResponse(carbonMonoxideDetector.serialize(), safe=False)

# fetch CbrSensor
def get_cbr_sensor(request, projectName):
	cbrSensor = CbrSensor.objects.get(hasProjectName=projectName)
	return JsonResponse(cbrSensor.serialize(), safe=False)

# fetch ConcealedSpace
def get_concealed_space(request, projectName):
	concealedSpace = ConcealedSpace.objects.get(hasProjectName=projectName)
	return JsonResponse(concealedSpace.serialize(), safe=False)

# fetch ConstructionType
def get_construction_type(request, projectName):
	constructionType = ConstructionType.objects.get(hasProjectName=projectName)
	return JsonResponse(constructionType.serialize(), safe=False)

# fetch Door
def get_door(request, projectName):
	door = Door.objects.get(hasProjectName=projectName)
	return JsonResponse(door.serialize(), safe=False)

# fetch DoorUnlockingSystemControlPanel
def get_door_unlocking_system_control_panel(request, projectName):
	doorUnlockingSystemControlPanel = DoorUnlockingSystemControlPanel.objects.get(hasProjectName=projectName)
	return JsonResponse(doorUnlockingSystemControlPanel.serialize(), safe=False)

# fetch Elevator
def get_elevator(request, projectName):
	elevator = Elevator.objects.get(hasProjectName=projectName)
	return JsonResponse(elevator.serialize(), safe=False)

# fetch ElevatorOverrideControlPanel
def get_elevator_override_control_panel(request, projectName):
	elevatorOverrideControlPanel = ElevatorOverrideControlPanel.objects.get(hasProjectName=projectName)
	return JsonResponse(elevatorOverrideControlPanel.serialize(), safe=False)

# fetch EmergencyPowerOutlet
def get_emergency_power_outlet(request, projectName):
	emergencyPowerOutlet = EmergencyPowerOutlet.objects.get(hasProjectName=projectName)
	return JsonResponse(emergencyPowerOutlet.serialize(), safe=False)

# fetch EmergencyServiceProviderContactAddress
def get_emergency_service_provider_contact_address(request, projectName):
	emergencyServiceProviderContactAddress = EmergencyServiceProviderContactAddress.objects.get(hasProjectName=projectName)
	return JsonResponse(emergencyServiceProviderContactAddress.serialize(), safe=False)

# fetch ExteriorDoor
def get_exterior_door(request, projectName):
	exteriorDoor = ExteriorDoor.objects.get(hasProjectName=projectName)
	return JsonResponse(exteriorDoor.serialize(), safe=False)

# fetch ExteriorWall
def get_exterior_wall(request, projectName):
	exteriorWall = ExteriorWall.objects.get(hasProjectName=projectName)
	return JsonResponse(exteriorWall.serialize(), safe=False)

# fetch ExteriorWindow
def get_exterior_window(request, projectName):
	exteriorWindow = ExteriorWindow.objects.get(hasProjectName=projectName)
	return JsonResponse(exteriorWindow.serialize(), safe=False)

# fetch ExtremelyValuableMaterial
def get_extremely_valuable_material(request, projectName):
	extremelyValuableMaterial = ExtremelyValuableMaterial.objects.get(hasProjectName=projectName)
	return JsonResponse(extremelyValuableMaterial.serialize(), safe=False)

# fetch FarsControlPanel
def get_fars_control_panel(request, projectName):
	farsControlPanel = FarsControlPanel.objects.get(hasProjectName=projectName)
	return JsonResponse(farsControlPanel.serialize(), safe=False)

# fetch FarsFillStation
def get_fars_fill_station(request, projectName):
	farsFillStation = FarsFillStation.objects.get(hasProjectName=projectName)
	return JsonResponse(farsFillStation.serialize(), safe=False)

# fetch FireAlarmSystem
def get_fire_alarm_system(request, projectName):
	fireAlarmSystem = FireAlarmSystem.objects.get(hasProjectName=projectName)
	return JsonResponse(fireAlarmSystem.serialize(), safe=False)

# fetch FireBarrier
def get_fire_barrier(request, projectName):
	fireBarrier = FireBarrier.objects.get(hasProjectName=projectName)
	return JsonResponse(fireBarrier.serialize(), safe=False)

# fetch FireCommandCenter
def get_fire_command_center(request, projectName):
	fireCommandCenter = FireCommandCenter.objects.get(hasProjectName=projectName)
	return JsonResponse(fireCommandCenter.serialize(), safe=False)

# fetch FireDepartmentCommunicationSystemPanel
def get_fire_department_communication_system_panel(request, projectName):
	fireDepartmentCommunicationSystemPanel = FireDepartmentCommunicationSystemPanel.objects.get(hasProjectName=projectName)
	return JsonResponse(fireDepartmentCommunicationSystemPanel.serialize(), safe=False)

# fetch FireDepartmentConnection
def get_fire_department_connection(request, projectName):
	fireDepartmentConnection = FireDepartmentConnection.objects.get(hasProjectName=projectName)
	return JsonResponse(fireDepartmentConnection.serialize(), safe=False)

# fetch FireHoseConnection
def get_fire_hose_connection(request, projectName):
	fireHoseConnection = FireHoseConnection.objects.get(hasProjectName=projectName)
	return JsonResponse(fireHoseConnection.serialize(), safe=False)

# fetch FireHydrant
def get_fire_hydrant(request, projectName):
	fireHydrant = FireHydrant.objects.get(hasProjectName=projectName)
	return JsonResponse(fireHydrant.serialize(), safe=False)

# fetch FireLane
def get_fire_lane(request, projectName):
	fireLane = FireLane.objects.get(hasProjectName=projectName)
	return JsonResponse(fireLane.serialize(), safe=False)

# fetch FirePartition
def get_fire_partition(request, projectName):
	firePartition = FirePartition.objects.get(hasProjectName=projectName)
	return JsonResponse(firePartition.serialize(), safe=False)

# fetch FirePump
def get_fire_pump(request, projectName):
	firePump = FirePump.objects.get(hasProjectName=projectName)
	return JsonResponse(firePump.serialize(), safe=False)

# fetch FireServiceOrganization
def get_fire_service_organization(request, projectName):
	fireServiceOrganization = FireServiceOrganization.objects.get(hasProjectName=projectName)
	return JsonResponse(fireServiceOrganization.serialize(), safe=False)

# fetch Firewall
def get_firewall(request, projectName):
	firewall = Firewall.objects.get(hasProjectName=projectName)
	return JsonResponse(firewall.serialize(), safe=False)

# fetch FloorAssembly
def get_floor_assembly(request, projectName):
	floorAssembly = FloorAssembly.objects.get(hasProjectName=projectName)
	return JsonResponse(floorAssembly.serialize(), safe=False)

# fetch GasDetector
def get_gas_detector(request, projectName):
	gasDetector = GasDetector.objects.get(hasProjectName=projectName)
	return JsonResponse(gasDetector.serialize(), safe=False)

# fetch GasSupplySystem
def get_gas_supply_system(request, projectName):
	gasSupplySystem = GasSupplySystem.objects.get(hasProjectName=projectName)
	return JsonResponse(gasSupplySystem.serialize(), safe=False)

# fetch Hallway
def get_hallway(request, projectName):
	hallway = Hallway.objects.get(hasProjectName=projectName)
	return JsonResponse(hallway.serialize(), safe=False)

# fetch HazardousMaterial
def get_hazardous_material(request, projectName):
	hazardousMaterial = HazardousMaterial.objects.get(hasProjectName=projectName)
	return JsonResponse(hazardousMaterial.serialize(), safe=False)

# fetch HazardousSubstance
def get_hazardous_substance(request, projectName):
	hazardousSubstance = HazardousSubstance.objects.get(hasProjectName=projectName)
	return JsonResponse(hazardousSubstance.serialize(), safe=False)

# fetch Helipad
def get_helipad(request, projectName):
	helipad = Helipad.objects.get(hasProjectName=projectName)
	return JsonResponse(helipad.serialize(), safe=False)

# fetch HoseConnection
def get_hose_connection(request, projectName):
	hoseConnection = HoseConnection.objects.get(hasProjectName=projectName)
	return JsonResponse(hoseConnection.serialize(), safe=False)

# fetch Hospital
def get_hospital(request, projectName):
	hospital = Hospital.objects.get(hasProjectName=projectName)
	return JsonResponse(hospital.serialize(), safe=False)

# fetch HvacSystem
def get_hvac_system(request, projectName):
	hvacSystem = HvacSystem.objects.get(hasProjectName=projectName)
	return JsonResponse(hvacSystem.serialize(), safe=False)

# fetch IncidentBuilding
def get_incident_building(request, projectName):
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)
	return JsonResponse(incidentBuilding.serialize(), safe=False)

# fetch IncidentSite
def get_incident_site(request, projectName):
	incidentSite = IncidentSite.objects.get(hasProjectName=projectName)
	return JsonResponse(incidentSite.serialize(), safe=False)

# fetch KeyBox
def get_key_box(request, projectName):
	keyBox = KeyBox.objects.get(hasProjectName=projectName)
	return JsonResponse(keyBox.serialize(), safe=False)

# fetch MassNotificationSystem
def get_mass_notification_system(request, projectName):
	massNotificationSystem = MassNotificationSystem.objects.get(hasProjectName=projectName)
	return JsonResponse(massNotificationSystem.serialize(), safe=False)

# fetch MassNotificationSystemControlPanel
def get_mass_notification_system_control_panel(request, projectName):
	massNotificationSystemControlPanel = MassNotificationSystemControlPanel.objects.get(hasProjectName=projectName)
	return JsonResponse(massNotificationSystemControlPanel.serialize(), safe=False)

# fetch Material
def get_material(request, projectName):
	material = Material.objects.get(hasProjectName=projectName)
	return JsonResponse(material.serialize(), safe=False)

# fetch MunicipalDistributionSystem
def get_municipal_distribution_system(request, projectName):
	municipalDistributionSystem = MunicipalDistributionSystem.objects.get(hasProjectName=projectName)
	return JsonResponse(municipalDistributionSystem.serialize(), safe=False)

# fetch Obstruction
def get_obstruction(request, projectName):
	obstruction = Obstruction.objects.get(hasProjectName=projectName)
	return JsonResponse(obstruction.serialize(), safe=False)

# fetch OwnerContactAddress
def get_owner_contact_address(request, projectName):
	ownerContactAddress = OwnerContactAddress.objects.get(hasProjectName=projectName)
	return JsonResponse(ownerContactAddress.serialize(), safe=False)

# fetch ParkingLot
def get_parking_lot(request, projectName):
	parkingLot = ParkingLot.objects.get(hasProjectName=projectName)
	return JsonResponse(parkingLot.serialize(), safe=False)

# fetch Pipeline
def get_pipeline(request, projectName):
	pipeline = Pipeline.objects.get(hasProjectName=projectName)
	return JsonResponse(pipeline.serialize(), safe=False)

# fetch PoliceDepartment
def get_police_department(request, projectName):
	policeDepartment = PoliceDepartment.objects.get(hasProjectName=projectName)
	return JsonResponse(policeDepartment.serialize(), safe=False)

# fetch PortableFireExtinguisher
def get_portable_fire_extinguisher(request, projectName):
	portableFireExtinguisher = PortableFireExtinguisher.objects.get(hasProjectName=projectName)
	return JsonResponse(portableFireExtinguisher.serialize(), safe=False)

# fetch PowerLine
def get_power_line(request, projectName):
	powerLine = PowerLine.objects.get(hasProjectName=projectName)
	return JsonResponse(powerLine.serialize(), safe=False)

# fetch PrimaryPowerSupplySystem
def get_primary_power_supply_system(request, projectName):
	primaryPowerSupplySystem = PrimaryPowerSupplySystem.objects.get(hasProjectName=projectName)
	return JsonResponse(primaryPowerSupplySystem.serialize(), safe=False)

# fetch PublicSafetyAgencyContactAddress
def get_public_safety_agency_contact_address(request, projectName):
	publicSafetyAgencyContactAddress = PublicSafetyAgencyContactAddress.objects.get(hasProjectName=projectName)
	return JsonResponse(publicSafetyAgencyContactAddress.serialize(), safe=False)

# fetch Ramp
def get_ramp(request, projectName):
	ramp = Ramp.objects.get(hasProjectName=projectName)
	return JsonResponse(ramp.serialize(), safe=False)

# fetch RoadToIncident
def get_road_to_incident(request, projectName):
	roadToIncident = RoadToIncident.objects.get(hasProjectName=projectName)
	return JsonResponse(roadToIncident.serialize(), safe=False)

# fetch RoofAssembly
def get_roof_assembly(request, projectName):
	roofAssembly = RoofAssembly.objects.get(hasProjectName=projectName)
	return JsonResponse(roofAssembly.serialize(), safe=False)

# fetch RoofTopElement
def get_roof_top_element(request, projectName):
	roofTopElement = RoofTopElement.objects.get(hasProjectName=projectName)
	return JsonResponse(roofTopElement.serialize(), safe=False)

# fetch ShaftEnclosure
def get_shaft_enclosure(request, projectName):
	shaftEnclosure = ShaftEnclosure.objects.get(hasProjectName=projectName)
	return JsonResponse(shaftEnclosure.serialize(), safe=False)

# fetch SmokeandHeatRemovalSystem
def get_smokeand_heat_removal_system(request, projectName):
	smokeandHeatRemovalSystem = SmokeandHeatRemovalSystem.objects.get(hasProjectName=projectName)
	return JsonResponse(smokeandHeatRemovalSystem.serialize(), safe=False)

# fetch SmokeBarrier
def get_smoke_barrier(request, projectName):
	smokeBarrier = SmokeBarrier.objects.get(hasProjectName=projectName)
	return JsonResponse(smokeBarrier.serialize(), safe=False)

# fetch SmokeControlSystem
def get_smoke_control_system(request, projectName):
	smokeControlSystem = SmokeControlSystem.objects.get(hasProjectName=projectName)
	return JsonResponse(smokeControlSystem.serialize(), safe=False)

# fetch SmokeControlSystemControlPanel
def get_smoke_control_system_control_panel(request, projectName):
	smokeControlSystemControlPanel = SmokeControlSystemControlPanel.objects.get(hasProjectName=projectName)
	return JsonResponse(smokeControlSystemControlPanel.serialize(), safe=False)

# fetch SmokePartition
def get_smoke_partition(request, projectName):
	smokePartition = SmokePartition.objects.get(hasProjectName=projectName)
	return JsonResponse(smokePartition.serialize(), safe=False)

# fetch Stairway
def get_stairway(request, projectName):
	stairway = Stairway.objects.get(hasProjectName=projectName)
	return JsonResponse(stairway.serialize(), safe=False)

# fetch StandpipeSystem
def get_standpipe_system(request, projectName):
	standpipeSystem = StandpipeSystem.objects.get(hasProjectName=projectName)
	return JsonResponse(standpipeSystem.serialize(), safe=False)

# fetch StaticWaterSource
def get_static_water_source(request, projectName):
	staticWaterSource = StaticWaterSource.objects.get(hasProjectName=projectName)
	return JsonResponse(staticWaterSource.serialize(), safe=False)

# fetch StructuralElement
def get_structural_element(request, projectName):
	structuralElement = StructuralElement.objects.get(hasProjectName=projectName)
	return JsonResponse(structuralElement.serialize(), safe=False)

# fetch SurroundingTerrain
def get_surrounding_terrain(request, projectName):
	surroundingTerrain = SurroundingTerrain.objects.get(hasProjectName=projectName)
	return JsonResponse(surroundingTerrain.serialize(), safe=False)

# fetch UtilityContactAddress
def get_utility_contact_address(request, projectName):
	utilityContactAddress = UtilityContactAddress.objects.get(hasProjectName=projectName)
	return JsonResponse(utilityContactAddress.serialize(), safe=False)

# fetch UtilityControlPanel
def get_utility_control_panel(request, projectName):
	utilityControlPanel = UtilityControlPanel.objects.get(hasProjectName=projectName)
	return JsonResponse(utilityControlPanel.serialize(), safe=False)

# fetch Vegetation
def get_vegetation(request, projectName):
	vegetation = Vegetation.objects.get(hasProjectName=projectName)
	return JsonResponse(vegetation.serialize(), safe=False)

# fetch VerticalOpening
def get_vertical_opening(request, projectName):
	verticalOpening = VerticalOpening.objects.get(hasProjectName=projectName)
	return JsonResponse(verticalOpening.serialize(), safe=False)

# fetch Wall
def get_wall(request, projectName):
	wall = Wall.objects.get(hasProjectName=projectName)
	return JsonResponse(wall.serialize(), safe=False)

# fetch WaterSupplyandSewerageSystem
def get_water_supplyand_sewerage_system(request, projectName):
	waterSupplyandSewerageSystem = WaterSupplyandSewerageSystem.objects.get(hasProjectName=projectName)
	return JsonResponse(waterSupplyandSewerageSystem.serialize(), safe=False)

# fetch WeatherCondition
def get_weather_condition(request, projectName):
	weatherCondition = WeatherCondition.objects.get(hasProjectName=projectName)
	return JsonResponse(weatherCondition.serialize(), safe=False)

# fetch Window
def get_window(request, projectName):
	window = Window.objects.get(hasProjectName=projectName)
	return JsonResponse(window.serialize(), safe=False)

