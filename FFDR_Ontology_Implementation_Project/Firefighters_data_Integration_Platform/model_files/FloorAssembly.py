from django.db import models
from .NonStructuralElement import NonStructuralElement
'''
The 'FloorAssembly' class represents the floor assembly in a building.
'''
class FloorAssembly(NonStructuralElement):
	hasType = models.CharField(max_length=255, blank=True)
	hasThickness = models.FloatField(blank=True) 
	hasThicknessUnit = models.CharField(max_length=65, blank=True)
	hasOnFloor = models.CharField(max_length=65, blank=True)
	isLightweightConstruction = models.BooleanField(blank=True)


	def serialize(self): 
		return {
			'hasType': self.hasType, 
			'hasThickness': self.hasThickness, 
			'hasThicknessUnit': self.hasThicknessUnit, 
			'hasOnFloor': self.hasOnFloor, 
			'isLightweightConstruction': self.isLightweightConstruction, 
		} | super().serialize()
