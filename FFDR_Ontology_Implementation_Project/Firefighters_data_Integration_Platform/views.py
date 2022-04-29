from operator import contains
from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse

from .models import *
import requests
import json



# Create your views here.

def index(request):
    return render(request, "Firefighters_data_Integration_Platform/index.html")

def table(request):
    return render(request, "Firefighters_data_Integration_Platform/table.html")


def trim(request):
    return render(request, "Firefighters_data_Integration_Platform/trimbleconnect.html")


# fetch IncidentBuilding
def get_incident_building(request, projectName):
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)
	return JsonResponse(incidentBuilding.serialize(), safe=False)



# fetch ContactAddresses
def get_contact_addresses(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)
 
	# Get all buildingEngineerContactAddress for the project
	buildingEngineerContactAddress = BuildingEngineerContactAddress.objects.filter(hasProjectName=incidentBuilding)
	
	# Get all buildingManagerContactAddress for the project
	buildingManagerContactAddress = BuildingManagerContactAddress.objects.filter(hasProjectName=incidentBuilding)

	# Get all ownerContactAddress for the project
	ownerContactAddress = OwnerContactAddress.objects.filter(hasProjectName=incidentBuilding)
	
	
	# Collect all building Contact Address
	buildingContactAddress = {
		"buildingEngineerContactAddress":[item.serialize() for item in buildingEngineerContactAddress ] if buildingEngineerContactAddress else '',
		"buildingManagerContactAddress":[item.serialize() for item in buildingManagerContactAddress ] if buildingManagerContactAddress.exists() else '',
		"ownerContactAddress":[item.serialize() for item in ownerContactAddress ]if ownerContactAddress.exists() else ''
		}
	# Get all fireServiceOrganization for the project
	fireServiceOrganization = FireServiceOrganization.objects.filter(hasProjectName=incidentBuilding)

	# Get all hospital for the project
	hospital = Hospital.objects.filter(hasProjectName=incidentBuilding)

	# Get all policeDepartment for the project
	policeDepartment = PoliceDepartment.objects.filter(hasProjectName=incidentBuilding)
	
	
	# Collect all emergency Service Provider Contact Address
	emergencyServiceProviderContactAddress = {
		"fireServiceOrganization":[item.serialize() for item in fireServiceOrganization ] if fireServiceOrganization else '',
		"hospital":[item.serialize() for item in hospital ] if hospital.exists() else '',
		"policeDepartment":[item.serialize() for item in policeDepartment ]if policeDepartment.exists() else ''
		}


	# Get all publicSafetyAgencyContactAddress for the project
	publicSafetyAgencyContactAddress = PublicSafetyContactAddress.objects.filter(hasProjectName=incidentBuilding)
	



	# Get all primaryPowerSupplySystem for the project
	primaryPowerSupplySystem = PrimaryPowerSupplySystem.objects.filter(hasProjectName=incidentBuilding)

	# Get all BackUpPowerSupplySystem for the project
	backUpPowerSupplySystem = BackUpPowerSupplySystem.objects.filter(hasProjectName=incidentBuilding)

	# Get all GasSupplySystem for the project
	gasSupplySystem = GasSupplySystem.objects.filter(hasProjectName=incidentBuilding)

	# Get all HvacSystem for the project
	hvacSystem = HvacSystem.objects.filter(hasProjectName=incidentBuilding)

	# Get all WaterSupplyandSewerageSystem for the project
	waterSupplyandSewerageSystem = WaterSupplyandSewerageSystem.objects.filter(hasProjectName=incidentBuilding)
	
	# Collect all building utility system
	buildingUtilitySystemContactAddress = {
		"primaryPowerSupplySystem":[item.serialize() for item in primaryPowerSupplySystem ] if primaryPowerSupplySystem else '',
		"backUpPowerSupplySystem":[item.serialize() for item in backUpPowerSupplySystem ] if backUpPowerSupplySystem.exists() else '',
		"gasSupplySystem":[item.serialize() for item in gasSupplySystem ],
		"hvacSystem":[item.serialize() for item in hvacSystem ],
		"waterSupplyandSewerageSystem":[item.serialize() for item in waterSupplyandSewerageSystem ]
		}
	# Get all utilityContactAddress for the project
	utilityContactAddress = UtilityContactAddress.objects.filter(hasProjectName=incidentBuilding)
	
	
	# Collect all contact addresses
	contact_addresses = {
		"buildingContactAddress":buildingContactAddress,
		"emergencyServiceProviderContactAddress":emergencyServiceProviderContactAddress,
		"buildingUtilitySystemContactAddress":buildingUtilitySystemContactAddress,
		"publicSafetyAgencyContactAddress":[item.serialize() for item in publicSafetyAgencyContactAddress ] if publicSafetyAgencyContactAddress.exists() else ''
		}
	return JsonResponse(contact_addresses, safe=False)

# fetch building plans
def get_building_plans(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get building plans
	buildingPlan = incidentBuilding.hasBuildingPlan.all()
	# Get building plans
	return JsonResponse([item.serialize() for item in buildingPlan], safe=False)



# fetch fire command center
def get_fire_command_center(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)
	
	# Get all Fire Command Center for the project
	fireCommandCenter = FireCommandCenter.objects.filter(hasProjectName=incidentBuilding)

	# Get all items contained in the Fire Command Center for the project
	contains = fireCommandCenter[0].contains.all()

	fireCommandCenterData   = {
		"fireCommandCenter":[item.serialize() for item in fireCommandCenter],
		"contains":[item.serialize() for item in contains]
		}

	return JsonResponse(fireCommandCenterData, safe=False)


# fetch Control panels
def get_control_panels(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)
	
	# Get Alarm System Annunciator Panel
	alarmSystemAnnunciatorPanel = AlarmSystemAnnunciatorPanel.objects.filter(hasProjectName=incidentBuilding)
	
	# Get door Unlocking System Control Panel
	doorUnlockingSystemControlPanel = DoorUnlockingSystemControlPanel.objects.filter(hasProjectName=incidentBuilding)
	
	# Get Elevator Override Control Panel
	elevatorOverrideControlPanel = ElevatorOverrideControlPanel.objects.filter(hasProjectName=incidentBuilding)
	
	# Get FARS Control Panel
	farsControlPanel = FarsControlPanel.objects.filter(hasProjectName=incidentBuilding)
	
	# Get Fire Department Communication System Panel
	fireDepartmentCommunicationSystemPanel = FireDepartmentCommunicationSystemPanel.objects.filter(hasProjectName=incidentBuilding)
	
	# Get Mass Notification System Control Panel
	massNotificationSystemControlPanel = MassNotificationSystemControlPanel.objects.filter(hasProjectName=incidentBuilding)
	
	# Get Smoke Control System Control Panel
	smokeControlSystemControlPanel = SmokeControlSystemControlPanel.objects.filter(hasProjectName=incidentBuilding)

	# Get Utility Control Panel
	utilityControlPanel = UtilityControlPanel.objects.filter(hasProjectName=incidentBuilding)


	controlPanelData   = {
		"alarmSystemAnnunciatorPanel":[item.serialize() for item in alarmSystemAnnunciatorPanel],
		"doorUnlockingSystemControlPanel":[item.serialize() for item in doorUnlockingSystemControlPanel],
		"elevatorOverrideControlPanel":[item.serialize() for item in elevatorOverrideControlPanel],
		"farsControlPanel":[item.serialize() for item in farsControlPanel],
		"fireDepartmentCommunicationSystemPanel":[item.serialize() for item in fireDepartmentCommunicationSystemPanel],
		"massNotificationSystemControlPanel":[item.serialize() for item in massNotificationSystemControlPanel],
		"smokeControlSystemControlPanel":[item.serialize() for item in smokeControlSystemControlPanel],
		"utilityControlPanel":[item.serialize() for item in utilityControlPanel],
		}

	return JsonResponse(controlPanelData, safe=False)



# fetch AlternativeAutomaticFireExtinguishingSystem
def get_automatic_fire_extinguishing_system(request, projectName):
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)
	automaticSprinklerSystem = AutomaticSprinklerSystem.objects.filter(hasProjectName=incidentBuilding)
	alternativeAutomaticFireExtinguishingSystem = AlternativeAutomaticFireExtinguishingSystem.objects.filter(hasProjectName=incidentBuilding)
	
	automaticFireExtinguishingSystem = {"automaticSprinklerSystem":[item.serialize() for item in automaticSprinklerSystem ],
										"alternativeAutomaticFireExtinguishingSystem":[item.serialize() for item in alternativeAutomaticFireExtinguishingSystem ]}
	return JsonResponse(automaticFireExtinguishingSystem, safe=False)


# fetch FireHydrant
def get_fire_hydrant(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)
	
	# Get all fire hydrants for the project
	fireHydrant = FireHydrant.objects.filter(hasProjectName=incidentBuilding)

	return JsonResponse([item.serialize() for item in fireHydrant], safe=False)



# fetch Building Utility System
def get_building_utility_systems(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all primaryPowerSupplySystem for the project
	primaryPowerSupplySystem = PrimaryPowerSupplySystem.objects.filter(hasProjectName=incidentBuilding)

	# Get all BackUpPowerSupplySystem for the project
	backUpPowerSupplySystem = BackUpPowerSupplySystem.objects.filter(hasProjectName=incidentBuilding)

	# Get all GasSupplySystem for the project
	gasSupplySystem = GasSupplySystem.objects.filter(hasProjectName=incidentBuilding)

	# Get all HvacSystem for the project
	hvacSystem = HvacSystem.objects.filter(hasProjectName=incidentBuilding)

	# Get all WaterSupplyandSewerageSystem for the project
	waterSupplyandSewerageSystem = WaterSupplyandSewerageSystem.objects.filter(hasProjectName=incidentBuilding)
	
	# Collect all building utility system
	buildingUtilitySystem = {
		"primaryPowerSupplySystem":[item.serialize() for item in primaryPowerSupplySystem ] if primaryPowerSupplySystem else '',
		"backUpPowerSupplySystem":[item.serialize() for item in backUpPowerSupplySystem ] if backUpPowerSupplySystem.exists() else '',
		"gasSupplySystem":[item.serialize() for item in gasSupplySystem ],
		"hvacSystem":[item.serialize() for item in hvacSystem ],
		"waterSupplyandSewerageSystem":[item.serialize() for item in waterSupplyandSewerageSystem ]
		}

	return JsonResponse(buildingUtilitySystem, safe=False)

# fetch PortableFireExtinguisher
def get_portable_fire_extinguisher(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all portableFireExtinguisher for the project
	portableFireExtinguisher = PortableFireExtinguisher.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in portableFireExtinguisher], safe=False)


# fetch FireAlarmSystem
def get_fire_alarm_system(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all fireAlarmSystem for the project
	fireAlarmSystem = FireAlarmSystem.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in fireAlarmSystem], safe=False)



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


# fetch StandpipeSystem
def get_standpipe_system(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all standpipeSystem for the project
	standpipeSystem = StandpipeSystem.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in standpipeSystem], safe=False)


# fetch sensor and detector
def get_sensor_and_detector(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all cbrSensor for the project
	cbrSensor = CbrSensor.objects.filter(hasProjectName=incidentBuilding)

	# Get all GasDetector for the project
	gasDetector = GasDetector.objects.filter(hasProjectName=incidentBuilding)

	# Get all cbrSensor for the project
	carbonMonoxideDetector = CarbonMonoxideDetector.objects.filter(hasProjectName=incidentBuilding)
	
	# Collect all building utility system
	sensorDetector = {
		"cbrSensor":[item.serialize() for item in cbrSensor ] if cbrSensor else '',
		"gasDetector":[item.serialize() for item in gasDetector ] if gasDetector else '',
		"carbonMonoxideDetector":[item.serialize() for item in carbonMonoxideDetector ] if carbonMonoxideDetector else '' 
		}
	return JsonResponse(sensorDetector, safe=False)



# fetch Fire and smoke protection elements
def get_fire_and_smoke_protection_elements(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all fireBarrier for the project
	fireBarrier = FireBarrier.objects.filter(hasProjectName=incidentBuilding)
	 
	# Get all firePartition for the project
	firePartition = FirePartition.objects.filter(hasProjectName=incidentBuilding)

	# Get all firewall for the project
	firewall = Firewall.objects.filter(hasProjectName=incidentBuilding)

	# Get all shaftEnclosure for the project
	shaftEnclosure = ShaftEnclosure.objects.filter(hasProjectName=incidentBuilding)

	# Get all smokeBarrier for the project
	smokeBarrier = SmokeBarrier.objects.filter(hasProjectName=incidentBuilding)

	# Get all smokePartition for the project
	smokePartition = SmokePartition.objects.filter(hasProjectName=incidentBuilding)

	# Collect all building utility system
	fireAndSmokeProtectionElements = {
		"fireBarrier":[item.serialize() for item in fireBarrier ] if fireBarrier else '',
		"firePartition":[item.serialize() for item in firePartition ] if firePartition else '',
		"firewall":[item.serialize() for item in firewall ] if firewall else '' ,
		"shaftEnclosure":[item.serialize() for item in shaftEnclosure ] if shaftEnclosure else '' ,
		"smokeBarrier":[item.serialize() for item in smokeBarrier ] if smokeBarrier else '' ,
		"smokePartition":[item.serialize() for item in smokePartition ] if smokePartition else '' 
		}
	return JsonResponse(fireAndSmokeProtectionElements, safe=False)


# fetch Area of refuge
def get_area_of_refuge(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all Area of Refuge for the project
	areaOfRefuge = AreaOfRefuge.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in areaOfRefuge], safe=False)


# fetch FARS fill stations
def get_fars_fill_stations(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all FARS Fill Station for the project
	farsFillStation = FarsFillStation.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in farsFillStation], safe=False)



# fetch emergency power outlets
def get_emergency_power_outlets(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all Emergency Power Outlet for the project
	emergencyPowerOutlet = EmergencyPowerOutlet.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in emergencyPowerOutlet], safe=False)


# fetch smoke and heat removal system
def get_smoke_and_heat_removal_system(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all Smoke and Heat Removal System for the project
	smokeandHeatRemovalSystem = SmokeandHeatRemovalSystem.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in smokeandHeatRemovalSystem], safe=False)



# fetch Smoke Control System
def get_smoke_control_system(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all SmokeControlSystem for the project
	smokeControlSystem = SmokeControlSystem.objects.filter(hasProjectName=incidentBuilding)

	return JsonResponse([item.serialize() for item in smokeControlSystem], safe=False)


# fetch fire pump
def get_fire_pump(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all Fire Pump for the project
	firePump = FirePump.objects.filter(hasProjectName=incidentBuilding)

	return JsonResponse([item.serialize() for item in firePump], safe=False)



# fetch mass notification system
def get_mass_notification_system(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all Mass Notification System for the project
	massNotificationSystem = MassNotificationSystem.objects.filter(hasProjectName=incidentBuilding)

	return JsonResponse([item.serialize() for item in massNotificationSystem], safe=False)





# fetch facade
def get_facade(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all ExteriorDoor for the project
	exteriorDoor = ExteriorDoor.objects.filter(hasProjectName=incidentBuilding)

	# Get all ExteriorWindow for the project
	exteriorWindow = ExteriorWindow.objects.filter(hasProjectName=incidentBuilding)

	# Get all ExteriorWall for the project
	exteriorWall = ExteriorWall.objects.filter(hasProjectName=incidentBuilding)

	# Collect all facade
	facade = {
		"exteriorDoor":[item.serialize() for item in exteriorDoor ] if exteriorDoor else '',
		"exteriorWindow":[item.serialize() for item in exteriorWindow ] if exteriorWindow else '',
		"exteriorWall":[item.serialize() for item in exteriorWall ] if exteriorWall else '' 
		}
	return JsonResponse(facade, safe=False)


# fetch KeyBox
def get_key_box(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all keyBox for the project
	keyBox = KeyBox.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in keyBox], safe=False)

	

# fetch HazardousMaterial
def get_hazardous_material(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all hazardousMaterial for the project
	hazardousMaterial = HazardousSubstance.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in hazardousMaterial], safe=False)


# fetch ConcealedSpace
def get_concealed_space(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all concealedSpace for the project
	concealedSpace = ConcealedSpace.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in concealedSpace], safe=False)
	

# fetch VerticalOpening
def get_vertical_opening(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all verticalOpening for the project
	verticalOpening = VerticalOpening.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in verticalOpening], safe=False)


# fetch Roof Top Element
def get_roof_top_element(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all roof Top Element for the project
	roofTopElement = RoofTopElement.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in roofTopElement], safe=False)



# fetch extremely valuable materials
def get_extremely_valuable_materials(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all Extremely Valuable Material for the project
	extremelyValuableMaterial = ExtremelyValuableMaterial.objects.filter(hasProjectName=incidentBuilding)

	return JsonResponse([item.serialize() for item in extremelyValuableMaterial], safe=False)


# fetch helipad
def get_helipad(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all Extremely Valuable Material for the project
	helipad = Helipad.objects.filter(hasProjectName=incidentBuilding)

	return JsonResponse([item.serialize() for item in helipad], safe=False)


# Get doors
def get_door(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all Door for the project
	door = Door.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in door], safe=False)

# Get windows

def get_window(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all Window for the project
	windows = Window.objects.filter(hasProjectName=incidentBuilding)
	
	return JsonResponse([item.serialize() for item in windows], safe=False)

# Get Elevators
def get_elevator(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all Elevator for the project
	elevators = Elevator.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in elevators], safe=False)


# Get stairway
def get_stairway(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all Stairway for the project
	stairway = Stairway.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in stairway], safe=False)

# Ramp
def get_ramp(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all Ramp for the project
	ramp = Ramp.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in ramp], safe=False)

# Wall
def get_wall(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all Wall for the project
	wall = Wall.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in wall], safe=False)

# Floor Assembly
def get_floor_assembly(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all Floor Assembly for the project
	floorAssembly = FloorAssembly.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in floorAssembly], safe=False)


# Roof Assembly
def get_roof_assembly(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all Roof Assembly for the project
	roofAssembly = RoofAssembly.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in roofAssembly], safe=False)

# Balcony
def get_balcony(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all Balcony for the project
	balcony = Balcony.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in balcony], safe=False)

# Hallway
def get_hallway(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all Hallway for the project
	hallway = Hallway.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in hallway], safe=False)


def get_structural_elements(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all structuralElements for the project
	structuralElements = StructuralElement.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in structuralElements], safe=False)

# Non structural elements
def get_non_structural_elements(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all Door for the project
	door = Door.objects.filter(hasProjectName=incidentBuilding)
	
	# Get all Window for the project
	windows = Window.objects.filter(hasProjectName=incidentBuilding)
	
	# Get all Elevator for the project
	elevators = Elevator.objects.filter(hasProjectName=incidentBuilding)
	
	# Get all Stairway for the project
	stairway = Stairway.objects.filter(hasProjectName=incidentBuilding)
	
	# Get all Ramp for the project
	ramp = Ramp.objects.filter(hasProjectName=incidentBuilding)
	
	# Get all Wall for the project
	wall = Wall.objects.filter(hasProjectName=incidentBuilding)
	
	# Get all Floor Assembly for the project
	floorAssembly = FloorAssembly.objects.filter(hasProjectName=incidentBuilding)

	# Get all Roof Assembly for the project
	roofAssembly = RoofAssembly.objects.filter(hasProjectName=incidentBuilding)

	# Get all Balcony for the project
	balcony = Balcony.objects.filter(hasProjectName=incidentBuilding)

	# Get all Hallway for the project
	hallway = Hallway.objects.filter(hasProjectName=incidentBuilding)
	
	# Collect all surroundings
	nonStructuralElement = {
		"door":[item.serialize() for item in door ] if door else '',
		"windows":[item.serialize() for item in windows ] if windows else '',
		"elevators":[item.serialize() for item in elevators ] if elevators else '' ,
		"stairway":[item.serialize() for item in stairway ] if stairway else '' ,
		"ramp":[item.serialize() for item in ramp ] if ramp else '' ,
		"wall":[item.serialize() for item in wall ] if wall else '' ,
		"floorAssembly":[item.serialize() for item in floorAssembly ] if floorAssembly else '' ,
		"roofAssembly":[item.serialize() for item in roofAssembly ] if roofAssembly else '' ,
		"balcony":[item.serialize() for item in balcony ] if balcony else '' ,
		"hallway":[item.serialize() for item in hallway ] if hallway else '' 
		}
	return JsonResponse(nonStructuralElement, safe=False)


# Get surroundings
def get_surroundings(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all surrounding building for the project
	surroundingBuilding = Building.objects.filter(hasProjectName=incidentBuilding)

	# Get all Surrounding Terrain for the project
	surroundingTerrain = SurroundingTerrain.objects.filter(hasProjectName=incidentBuilding)

	# Get all Vegetation for the project
	vegetation = Vegetation.objects.filter(hasProjectName=incidentBuilding)

	# Get all Hazardous Materials for the project
	hazardousMaterial = HazardousMaterial.objects.filter(hasProjectName=incidentBuilding)

	# Get all Obstructions for the project
	obstruction = Obstruction.objects.filter(hasProjectName=incidentBuilding)

	# Get all Parking Lot for the project
	parkingLot = ParkingLot.objects.filter(hasProjectName=incidentBuilding)

	# Get all Pipeline for the project
	pipeline = Pipeline.objects.filter(hasProjectName=incidentBuilding)

	# Get all PowerLine for the project
	powerLine = PowerLine.objects.filter(hasProjectName=incidentBuilding)

	# Collect all surroundings
	surroundings = {
		"surroundingBuilding":[item.serialize() for item in surroundingBuilding ] if surroundingBuilding else '',
		"surroundingTerrain":[item.serialize() for item in surroundingTerrain ] if surroundingTerrain else '',
		"vegetation":[item.serialize() for item in vegetation ] if vegetation else '' ,
		"hazardousMaterial":[item.serialize() for item in hazardousMaterial ] if hazardousMaterial else '' ,
		"obstruction":[item.serialize() for item in obstruction ] if obstruction else '' ,
		"parkingLot":[item.serialize() for item in parkingLot ] if parkingLot else '' ,
		"pipeline":[item.serialize() for item in pipeline ] if pipeline else '' ,
		"powerLine":[item.serialize() for item in powerLine ] if powerLine else '' 
		}
	return JsonResponse(surroundings, safe=False)


# Get water sources
def get_water_source(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all Static Water Source for the project
	staticWaterSource = StaticWaterSource.objects.filter(hasProjectName=incidentBuilding)

	# Get all Municipal Distribution System for the project
	municipalDistributionSystem = MunicipalDistributionSystem.objects.filter(hasProjectName=incidentBuilding)

	# Collect all water source
	waterSource = {
		"staticWaterSource":[item.serialize() for item in staticWaterSource ] if staticWaterSource else '',
		"municipalDistributionSystem":[item.serialize() for item in municipalDistributionSystem ] if municipalDistributionSystem else ''
		}
	return JsonResponse(waterSource, safe=False)



# fetch FireLane
def get_fire_lane(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all fireLane for the project
	fireLane = FireLane.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in fireLane], safe=False)



# fetch RoadToIncident
def get_road_to_incident(request, projectName):
	# Get current project
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)

	# Get all roadToIncident for the project
	roadToIncident = RoadToIncident.objects.filter(hasProjectName=incidentBuilding)
	return JsonResponse([item.serialize() for item in roadToIncident], safe=False)



def edit (request):	

	FloorsNumber =  {"Basement":"-01. Basement",
			  "First Floor":"01. First Floor",
			  "Second Floor":"02. Second Floor",
			  "Third Floor":"03. Third Floor",
			  "Fourth Floor":"04. Fourth Floor",
			  "Fifth Floor":"05. Fifth Floor",
			  "Sixth Floor":"06. Sixth Floor",
			  "Seventh Floor":"07. Seventh Floor",
			  "Eighth Floor":"08. Eighth Floor"}
			


			
	dataStore = BuildingPlan.objects.all()

	for data in dataStore:
		print(data)
		
		floor = data.serialize()["hasFloor"]
		print("   ")
		print(floor in FloorsNumber)
		if floor in FloorsNumber:
			data.hasFloor = FloorsNumber[floor]
			data.save()


	return HttpResponse("Success!")