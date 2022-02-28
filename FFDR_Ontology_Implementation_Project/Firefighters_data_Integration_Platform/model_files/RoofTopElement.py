from django.db import models
from .BuildingComponent import BuildingComponent

'''
The 'RoofTopElement' class represents roof-top elements, such as
skylights, photovoltaic panels, vegetation, and Other Obstructions
(cables, wires, ropes).
'''
class RoofTopElement(BuildingComponent):
		hasDescription = models.TextField()
		hasLocation = models.TextField()
		hasType = models.TextField()


		def serialize(self):
			return {
				'hasDescription': self.hasDescription, 
				'hasLocation': self.hasLocation, 
				'hasType': self.hasType, 
			} 
