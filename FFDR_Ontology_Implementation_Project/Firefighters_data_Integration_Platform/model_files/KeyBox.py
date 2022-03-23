from django.db import models
from .BuildingComponent import BuildingComponent
'''
The 'KeyBox' class represents key boxes,  which are small vaults
placed in a building or nearby that contain keys to a building's
doors, elevators, and other rooms (OSHA, 2015).
'''
class KeyBox(BuildingComponent):
	hasKey = models.TextField(blank=True)
	hasLocation = models.TextField(blank=True)


	def serialize(self):
		return {
			'hasKey': self.hasKey, 
			'hasLocation': self.hasLocation, 
		} 
