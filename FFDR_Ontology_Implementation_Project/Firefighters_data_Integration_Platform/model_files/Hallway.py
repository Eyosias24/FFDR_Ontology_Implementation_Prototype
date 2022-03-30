from django.db import models
from .NonStructuralElement import NonStructuralElement
'''
The 'Hallway' class represents hallways in a building.
'''
class Hallway(NonStructuralElement):
	hasCapacity = models.IntegerField(blank=True)
	hasWidth = models.FloatField(blank=True)
	hasWidthUnit = models.CharField(blank=True, max_length=65)
	hasOnFloor = models.CharField(max_length=65, blank=True)


	def serialize(self):
		return {
			'hasCapacity': self.hasCapacity, 
			'hasWidth': self.hasWidth,
			'hasWidthUnit': self.hasWidthUnit,  
			'hasOnFloor': self.hasOnFloor, 
		} 
