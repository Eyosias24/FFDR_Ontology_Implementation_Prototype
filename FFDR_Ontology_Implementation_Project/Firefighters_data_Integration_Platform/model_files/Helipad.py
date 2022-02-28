from django.db import models
from .BuildingComponent import BuildingComponent

'''
The 'Helipad' class represents a helipad, which is an area for landing
helicopters, that may be available on a building.
'''
class Helipad(BuildingComponent):
		hasLocation = models.TextField()


		def serialize(self):
			return {
				'hasLocation': self.hasLocation, 
			} 
