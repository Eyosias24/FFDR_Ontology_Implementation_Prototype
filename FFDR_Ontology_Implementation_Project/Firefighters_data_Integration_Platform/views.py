from django.shortcuts import render
from django.http import HttpResponse

from .models import AirSupply
# Create your views here.

def index(request):
    air_supply = AirSupply(
                hasLocation="Top", hasType="Open")
    # air_supply.save()
    air_supplys = AirSupply.objects.all()
    print(air_supplys)
    return HttpResponse("Hello, world!")