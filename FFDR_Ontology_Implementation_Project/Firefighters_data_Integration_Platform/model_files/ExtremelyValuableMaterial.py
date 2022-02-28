from django.db import models
from .BuildingComponent import BuildingComponent

'''
The 'ExtremelyValuableMaterial' class represents extremely valuable
materials that may be found in a building.
'''
class ExtremelyValuableMaterial(BuildingComponent):
		hasLocation = models.TextField()


		def serialize(self):
			return {
				'hasLocation': self.hasLocation, 
			} 
