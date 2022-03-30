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



