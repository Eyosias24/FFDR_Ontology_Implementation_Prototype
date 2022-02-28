from django.shortcuts import render
from django.http import HttpResponse

from .models import AirSupply
# Create your views here.

def index(request):
    return render(request, "Firefighters_data_Integration_Platform/index.html")
