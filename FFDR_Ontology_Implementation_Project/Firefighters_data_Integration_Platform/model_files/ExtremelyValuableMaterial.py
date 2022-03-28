from django.db import models
from .BuildingComponent import BuildingComponent
'''
The 'ExtremelyValuableMaterial' class represents extremely valuable
materials that may be found in a building.
'''
class ExtremelyValuableMaterial(BuildingComponent):
	hasLocation = models.CharField(max_length=255)
	hasDescription = models.TextField(blank=True)


	def serialize(self):
		return {
			'hasLocation': self.hasLocation, 
			'hasDescription': self.hasDescription, 
		} 
	def __str__(self):
		return  f"Extremely Valuable Material: {self.hasLocation}"  
