from django.db import models
from .BuildingComponent import BuildingComponent
'''
The 'Helipad' class represents a helipad, which is an area for landing
helicopters, that may be available on a building.
'''
class Helipad(BuildingComponent):
	hasLocation = models.CharField(max_length=255, blank=True)


	def serialize(self):
		return {
			'hasLocation': self.hasLocation, 
		} | super().serialize()
	def __str__(self):
		return  f"Helipad: {self.hasLocation}"  
