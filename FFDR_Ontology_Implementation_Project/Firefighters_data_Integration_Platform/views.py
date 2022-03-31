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
	print(automaticSprinklerSystem[0].serialize())
	automaticFireExtinguishingSystem = {"automaticSprinklerSystem":[item.serialize() for item in automaticSprinklerSystem ],
										"alternativeAutomaticFireExtinguishingSystem":[item.serialize() for item in alternativeAutomaticFireExtinguishingSystem ]}
	return JsonResponse(automaticFireExtinguishingSystem, safe=False)

