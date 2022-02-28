from django.db import models
from .NonStructuralElement import NonStructuralElement

'''
The 'FloorAssembly' class represents the floor assembly in a building.
'''
class FloorAssembly(NonStructuralElement):
		isLightweightConstruction = models.BooleanField()


		def serialize(self):
			return {
				'isLightweightConstruction': self.isLightweightConstruction, 
			} 
