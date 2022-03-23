from django.db import models
from .BuildingComponent import BuildingComponent
'''
The 'RoofTopElement' class represents roof-top elements, such as
skylights, photovoltaic panels, vegetation, and Other Obstructions
(cables, wires, ropes).
'''
class RoofTopElement(BuildingComponent):
	hasDescription = models.TextField(blank=True)
	hasLocation = models.TextField(blank=True)
	hasType = models.TextField(blank=True)


	def serialize(self):
		return {
			'hasDescription': self.hasDescription, 
			'hasLocation': self.hasLocation, 
			'hasType': self.hasType, 
		} 
