from django.db import models
from .SurroundingStructure import SurroundingStructure
'''
The 'ParkingLot' class represents parking lots.
'''
class ParkingLot(SurroundingStructure):
	hasArea = models.FloatField(blank=True)
	hasAreaUnit = models.CharField(max_length=80, blank=True)


	def serialize(self):
		return {
			'hasArea': self.hasArea, 
			'hasAreaUnit': self.hasAreaUnit, 
		} | super().serialize()

	def __str__(self):
		return f"Parking Lot: {self.hasName} "  