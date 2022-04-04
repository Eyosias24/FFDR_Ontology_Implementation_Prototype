from turtle import width
from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse

from .models import *


# Create your views here.

def index(request):
    return render(request, "Firefighters_data_Integration_Platform/index.html")


# fetch IncidentBuilding
def get_incident_building(request, projectName):
	incidentBuilding = IncidentBuilding.objects.get(hasProjectName=projectName)
	return JsonResponse(incidentBuilding.serialize(), safe=False)



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


