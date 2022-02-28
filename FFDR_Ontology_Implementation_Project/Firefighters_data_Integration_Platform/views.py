from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse

from .models import *
# Create your views here.

def index(request):
    return render(request, "Firefighters_data_Integration_Platform/index.html")


# fetch all vegetation
def vegetation_all(request):
    vegetations = Vegetation.objects.all()

    return JsonResponse([vegetation.serialize() for vegetation in vegetations], safe=False)
