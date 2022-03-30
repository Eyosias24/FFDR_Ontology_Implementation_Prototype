from django.db import models
from .BuildingComponent import BuildingComponent
'''
The 'RoofTopElement' class represents roof-top elements, such as
skylights, photovoltaic panels, vegetation, and Other Obstructions
(cables, wires, ropes).
'''
class RoofTopElement(BuildingComponent):
	hasType = models.CharField(max_length=65)
	hasDescription = models.TextField(blank=True)
	hasLocation = models.TextField(blank=True)


	def serialize(self):
		return {
			'hasLocation': self.hasLocation,  
			'hasDescription': self.hasDescription, 
			'hasType': self.hasType, 
		}

	def __str__(self):
		return f"Roof Top Element: {self.hasType}"  
