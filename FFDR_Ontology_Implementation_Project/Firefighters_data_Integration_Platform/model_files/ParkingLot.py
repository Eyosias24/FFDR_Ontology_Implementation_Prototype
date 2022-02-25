from django.db import models
from .SurroundingStructure import SurroundingStructure

'''
The 'ParkingLot' class represents parking lots.
'''
class ParkingLot(SurroundingStructure):
		hasArea = models.FloatField()
