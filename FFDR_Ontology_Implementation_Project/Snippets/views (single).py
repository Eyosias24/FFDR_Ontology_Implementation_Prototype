from django.http import JsonResponse
from .models import *

# fetch AirSupply
def get_air_supply(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all airSupply for the project
	airSupply = AirSupply.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in airSupply], safe=False)

# fetch AlarmSystemAnnunciatorPanel
def get_alarm_system_annunciator_panel(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all alarmSystemAnnunciatorPanel for the project
	alarmSystemAnnunciatorPanel = AlarmSystemAnnunciatorPanel.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in alarmSystemAnnunciatorPanel], safe=False)

# fetch AlternativeAutomaticFireExtinguishingSystem
def get_alternative_automatic_fire_extinguishing_system(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all alternativeAutomaticFireExtinguishingSystem for the project
	alternativeAutomaticFireExtinguishingSystem = AlternativeAutomaticFireExtinguishingSystem.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in alternativeAutomaticFireExtinguishingSystem], safe=False)

# fetch AreaOfRefuge
def get_area_of_refuge(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all areaOfRefuge for the project
	areaOfRefuge = AreaOfRefuge.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in areaOfRefuge], safe=False)

# fetch AutomaticSprinklerSystem
def get_automatic_sprinkler_system(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all automaticSprinklerSystem for the project
	automaticSprinklerSystem = AutomaticSprinklerSystem.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in automaticSprinklerSystem], safe=False)

# fetch BackUpPowerSupplySystem
def get_back_up_power_supply_system(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all backUpPowerSupplySystem for the project
	backUpPowerSupplySystem = BackUpPowerSupplySystem.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in backUpPowerSupplySystem], safe=False)

# fetch Balcony
def get_balcony(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all balcony for the project
	balcony = Balcony.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in balcony], safe=False)

# fetch Building
def get_building(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all building for the project
	building = Building.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in building], safe=False)

# fetch BuildingAddress
def get_building_address(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all buildingAddress for the project
	buildingAddress = BuildingAddress.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in buildingAddress], safe=False)

# fetch BuildingEngineerContactAddress
def get_building_engineer_contact_address(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all buildingEngineerContactAddress for the project
	buildingEngineerContactAddress = BuildingEngineerContactAddress.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in buildingEngineerContactAddress], safe=False)

# fetch BuildingManagerContactAddress
def get_building_manager_contact_address(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all buildingManagerContactAddress for the project
	buildingManagerContactAddress = BuildingManagerContactAddress.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in buildingManagerContactAddress], safe=False)

# fetch BuildingOccupancy
def get_building_occupancy(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all buildingOccupancy for the project
	buildingOccupancy = BuildingOccupancy.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in buildingOccupancy], safe=False)

# fetch BuildingPlan
def get_building_plan(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all buildingPlan for the project
	buildingPlan = BuildingPlan.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in buildingPlan], safe=False)

# fetch CarbonMonoxideDetector
def get_carbon_monoxide_detector(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all carbonMonoxideDetector for the project
	carbonMonoxideDetector = CarbonMonoxideDetector.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in carbonMonoxideDetector], safe=False)

# fetch CbrSensor
def get_cbr_sensor(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all cbrSensor for the project
	cbrSensor = CbrSensor.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in cbrSensor], safe=False)

# fetch ConcealedSpace
def get_concealed_space(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all concealedSpace for the project
	concealedSpace = ConcealedSpace.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in concealedSpace], safe=False)

# fetch ConstructionType
def get_construction_type(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all constructionType for the project
	constructionType = ConstructionType.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in constructionType], safe=False)

# fetch Door
def get_door(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all door for the project
	door = Door.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in door], safe=False)

# fetch DoorUnlockingSystemControlPanel
def get_door_unlocking_system_control_panel(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all doorUnlockingSystemControlPanel for the project
	doorUnlockingSystemControlPanel = DoorUnlockingSystemControlPanel.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in doorUnlockingSystemControlPanel], safe=False)

# fetch Elevator
def get_elevator(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all elevator for the project
	elevator = Elevator.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in elevator], safe=False)

# fetch ElevatorOverrideControlPanel
def get_elevator_override_control_panel(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all elevatorOverrideControlPanel for the project
	elevatorOverrideControlPanel = ElevatorOverrideControlPanel.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in elevatorOverrideControlPanel], safe=False)

# fetch EmergencyPowerOutlet
def get_emergency_power_outlet(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all emergencyPowerOutlet for the project
	emergencyPowerOutlet = EmergencyPowerOutlet.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in emergencyPowerOutlet], safe=False)

# fetch EmergencyServiceProviderContactAddress
def get_emergency_service_provider_contact_address(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all emergencyServiceProviderContactAddress for the project
	emergencyServiceProviderContactAddress = EmergencyServiceProviderContactAddress.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in emergencyServiceProviderContactAddress], safe=False)

# fetch ExteriorDoor
def get_exterior_door(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all exteriorDoor for the project
	exteriorDoor = ExteriorDoor.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in exteriorDoor], safe=False)

# fetch ExteriorWall
def get_exterior_wall(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all exteriorWall for the project
	exteriorWall = ExteriorWall.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in exteriorWall], safe=False)

# fetch ExteriorWindow
def get_exterior_window(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all exteriorWindow for the project
	exteriorWindow = ExteriorWindow.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in exteriorWindow], safe=False)

# fetch ExtremelyValuableMaterial
def get_extremely_valuable_material(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all extremelyValuableMaterial for the project
	extremelyValuableMaterial = ExtremelyValuableMaterial.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in extremelyValuableMaterial], safe=False)

# fetch FarsControlPanel
def get_fars_control_panel(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all farsControlPanel for the project
	farsControlPanel = FarsControlPanel.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in farsControlPanel], safe=False)

# fetch FarsFillStation
def get_fars_fill_station(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all farsFillStation for the project
	farsFillStation = FarsFillStation.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in farsFillStation], safe=False)

# fetch FireAlarmSystem
def get_fire_alarm_system(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all fireAlarmSystem for the project
	fireAlarmSystem = FireAlarmSystem.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in fireAlarmSystem], safe=False)

# fetch FireBarrier
def get_fire_barrier(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all fireBarrier for the project
	fireBarrier = FireBarrier.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in fireBarrier], safe=False)

# fetch FireCommandCenter
def get_fire_command_center(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all fireCommandCenter for the project
	fireCommandCenter = FireCommandCenter.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in fireCommandCenter], safe=False)

# fetch FireDepartmentCommunicationSystemPanel
def get_fire_department_communication_system_panel(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all fireDepartmentCommunicationSystemPanel for the project
	fireDepartmentCommunicationSystemPanel = FireDepartmentCommunicationSystemPanel.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in fireDepartmentCommunicationSystemPanel], safe=False)

# fetch FireDepartmentConnection
def get_fire_department_connection(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all fireDepartmentConnection for the project
	fireDepartmentConnection = FireDepartmentConnection.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in fireDepartmentConnection], safe=False)

# fetch FireHoseConnection
def get_fire_hose_connection(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all fireHoseConnection for the project
	fireHoseConnection = FireHoseConnection.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in fireHoseConnection], safe=False)

# fetch FireHydrant
def get_fire_hydrant(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all fireHydrant for the project
	fireHydrant = FireHydrant.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in fireHydrant], safe=False)

# fetch FireLane
def get_fire_lane(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all fireLane for the project
	fireLane = FireLane.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in fireLane], safe=False)

# fetch FirePartition
def get_fire_partition(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all firePartition for the project
	firePartition = FirePartition.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in firePartition], safe=False)

# fetch FirePump
def get_fire_pump(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all firePump for the project
	firePump = FirePump.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in firePump], safe=False)

# fetch FireServiceOrganization
def get_fire_service_organization(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all fireServiceOrganization for the project
	fireServiceOrganization = FireServiceOrganization.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in fireServiceOrganization], safe=False)

# fetch Firewall
def get_firewall(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all firewall for the project
	firewall = Firewall.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in firewall], safe=False)

# fetch FloorAssembly
def get_floor_assembly(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all floorAssembly for the project
	floorAssembly = FloorAssembly.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in floorAssembly], safe=False)

# fetch GasDetector
def get_gas_detector(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all gasDetector for the project
	gasDetector = GasDetector.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in gasDetector], safe=False)

# fetch GasSupplySystem
def get_gas_supply_system(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all gasSupplySystem for the project
	gasSupplySystem = GasSupplySystem.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in gasSupplySystem], safe=False)

# fetch Hallway
def get_hallway(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all hallway for the project
	hallway = Hallway.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in hallway], safe=False)

# fetch HazardousMaterial
def get_hazardous_material(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all hazardousMaterial for the project
	hazardousMaterial = HazardousMaterial.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in hazardousMaterial], safe=False)

# fetch HazardousSubstance
def get_hazardous_substance(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all hazardousSubstance for the project
	hazardousSubstance = HazardousSubstance.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in hazardousSubstance], safe=False)

# fetch Helipad
def get_helipad(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all helipad for the project
	helipad = Helipad.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in helipad], safe=False)

# fetch HoseConnection
def get_hose_connection(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all hoseConnection for the project
	hoseConnection = HoseConnection.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in hoseConnection], safe=False)

# fetch Hospital
def get_hospital(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all hospital for the project
	hospital = Hospital.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in hospital], safe=False)

# fetch HvacSystem
def get_hvac_system(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all hvacSystem for the project
	hvacSystem = HvacSystem.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in hvacSystem], safe=False)

# fetch IncidentBuilding
def get_incident_building(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all incidentBuilding for the project
	incidentBuilding = IncidentBuilding.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in incidentBuilding], safe=False)

# fetch IncidentSite
def get_incident_site(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all incidentSite for the project
	incidentSite = IncidentSite.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in incidentSite], safe=False)

# fetch KeyBox
def get_key_box(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all keyBox for the project
	keyBox = KeyBox.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in keyBox], safe=False)

# fetch MassNotificationSystem
def get_mass_notification_system(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all massNotificationSystem for the project
	massNotificationSystem = MassNotificationSystem.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in massNotificationSystem], safe=False)

# fetch MassNotificationSystemControlPanel
def get_mass_notification_system_control_panel(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all massNotificationSystemControlPanel for the project
	massNotificationSystemControlPanel = MassNotificationSystemControlPanel.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in massNotificationSystemControlPanel], safe=False)

# fetch Material
def get_material(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all material for the project
	material = Material.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in material], safe=False)

# fetch MunicipalDistributionSystem
def get_municipal_distribution_system(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all municipalDistributionSystem for the project
	municipalDistributionSystem = MunicipalDistributionSystem.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in municipalDistributionSystem], safe=False)

# fetch Obstruction
def get_obstruction(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all obstruction for the project
	obstruction = Obstruction.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in obstruction], safe=False)

# fetch OwnerContactAddress
def get_owner_contact_address(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all ownerContactAddress for the project
	ownerContactAddress = OwnerContactAddress.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in ownerContactAddress], safe=False)

# fetch ParkingLot
def get_parking_lot(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all parkingLot for the project
	parkingLot = ParkingLot.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in parkingLot], safe=False)

# fetch Pipeline
def get_pipeline(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all pipeline for the project
	pipeline = Pipeline.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in pipeline], safe=False)

# fetch PoliceDepartment
def get_police_department(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all policeDepartment for the project
	policeDepartment = PoliceDepartment.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in policeDepartment], safe=False)

# fetch PortableFireExtinguisher
def get_portable_fire_extinguisher(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all portableFireExtinguisher for the project
	portableFireExtinguisher = PortableFireExtinguisher.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in portableFireExtinguisher], safe=False)

# fetch PowerLine
def get_power_line(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all powerLine for the project
	powerLine = PowerLine.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in powerLine], safe=False)

# fetch PrimaryPowerSupplySystem
def get_primary_power_supply_system(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all primaryPowerSupplySystem for the project
	primaryPowerSupplySystem = PrimaryPowerSupplySystem.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in primaryPowerSupplySystem], safe=False)

# fetch PublicSafetyAgencyContactAddress
def get_public_safety_agency_contact_address(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all publicSafetyAgencyContactAddress for the project
	publicSafetyAgencyContactAddress = PublicSafetyAgencyContactAddress.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in publicSafetyAgencyContactAddress], safe=False)

# fetch Ramp
def get_ramp(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all ramp for the project
	ramp = Ramp.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in ramp], safe=False)

# fetch RoadToIncident
def get_road_to_incident(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all roadToIncident for the project
	roadToIncident = RoadToIncident.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in roadToIncident], safe=False)

# fetch RoofAssembly
def get_roof_assembly(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all roofAssembly for the project
	roofAssembly = RoofAssembly.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in roofAssembly], safe=False)

# fetch RoofTopElement
def get_roof_top_element(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all roofTopElement for the project
	roofTopElement = RoofTopElement.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in roofTopElement], safe=False)

# fetch ShaftEnclosure
def get_shaft_enclosure(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all shaftEnclosure for the project
	shaftEnclosure = ShaftEnclosure.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in shaftEnclosure], safe=False)

# fetch SmokeBarrier
def get_smoke_barrier(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all smokeBarrier for the project
	smokeBarrier = SmokeBarrier.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in smokeBarrier], safe=False)

# fetch SmokeControlSystem
def get_smoke_control_system(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all smokeControlSystem for the project
	smokeControlSystem = SmokeControlSystem.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in smokeControlSystem], safe=False)

# fetch SmokeControlSystemControlPanel
def get_smoke_control_system_control_panel(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all smokeControlSystemControlPanel for the project
	smokeControlSystemControlPanel = SmokeControlSystemControlPanel.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in smokeControlSystemControlPanel], safe=False)

# fetch SmokePartition
def get_smoke_partition(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all smokePartition for the project
	smokePartition = SmokePartition.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in smokePartition], safe=False)

# fetch SmokeandHeatRemovalSystem
def get_smokeand_heat_removal_system(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all smokeandHeatRemovalSystem for the project
	smokeandHeatRemovalSystem = SmokeandHeatRemovalSystem.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in smokeandHeatRemovalSystem], safe=False)

# fetch Stairway
def get_stairway(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all stairway for the project
	stairway = Stairway.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in stairway], safe=False)

# fetch StandpipeSystem
def get_standpipe_system(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all standpipeSystem for the project
	standpipeSystem = StandpipeSystem.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in standpipeSystem], safe=False)

# fetch StaticWaterSource
def get_static_water_source(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all staticWaterSource for the project
	staticWaterSource = StaticWaterSource.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in staticWaterSource], safe=False)

# fetch StructuralElement
def get_structural_element(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all structuralElement for the project
	structuralElement = StructuralElement.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in structuralElement], safe=False)

# fetch SurroundingTerrain
def get_surrounding_terrain(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all surroundingTerrain for the project
	surroundingTerrain = SurroundingTerrain.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in surroundingTerrain], safe=False)

# fetch UtilityContactAddress
def get_utility_contact_address(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all utilityContactAddress for the project
	utilityContactAddress = UtilityContactAddress.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in utilityContactAddress], safe=False)

# fetch UtilityControlPanel
def get_utility_control_panel(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all utilityControlPanel for the project
	utilityControlPanel = UtilityControlPanel.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in utilityControlPanel], safe=False)

# fetch Vegetation
def get_vegetation(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all vegetation for the project
	vegetation = Vegetation.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in vegetation], safe=False)

# fetch VerticalOpening
def get_vertical_opening(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all verticalOpening for the project
	verticalOpening = VerticalOpening.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in verticalOpening], safe=False)

# fetch Wall
def get_wall(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all wall for the project
	wall = Wall.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in wall], safe=False)

# fetch WaterSupplyandSewerageSystem
def get_water_supplyand_sewerage_system(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all waterSupplyandSewerageSystem for the project
	waterSupplyandSewerageSystem = WaterSupplyandSewerageSystem.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in waterSupplyandSewerageSystem], safe=False)

# fetch WeatherCondition
def get_weather_condition(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all weatherCondition for the project
	weatherCondition = WeatherCondition.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in weatherCondition], safe=False)

# fetch Window
def get_window(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all window for the project
	window = Window.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in window], safe=False)

