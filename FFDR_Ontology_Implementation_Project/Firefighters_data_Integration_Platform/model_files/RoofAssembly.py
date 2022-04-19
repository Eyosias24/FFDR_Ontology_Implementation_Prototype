from django.db import models
from .NonStructuralElement import NonStructuralElement
'''
The 'RoofAssembly' class represents the roof assembly in a building.
'''
class RoofAssembly(NonStructuralElement):
	isAccessible = models.BooleanField(blank=True)
	isLightweightConstruction = models.BooleanField(blank=True)


	def serialize(self):
		return {
			'isAccessible': self.isAccessible, 
			'isLightweightConstruction': self.isLightweightConstruction, 
		} | super().serialize()
