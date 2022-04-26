from django.db import models
from .BuildingComponent import BuildingComponent
#from .Key import Key
'''
The 'KeyBox' class represents key boxes,  which are small vaults
placed in a building or nearby that contain keys to a building's
doors, elevators, and other rooms (OSHA, 2015).
'''
class KeyBox(BuildingComponent):
	hasKeyFor = models.TextField()
	hasLocation = models.CharField(null=True, max_length=255, blank=True)

	def serialize(self):
		return {
			'hasKey': self.hasKeyFor, 
			'hasLocation': self.hasLocation, 
		} | super().serialize() 
	def __str__(self):
		return  f"KeyBox: {self.hasLocation}"  
