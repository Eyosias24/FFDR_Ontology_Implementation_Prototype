from django.db import models
from .NonStructuralElement import NonStructuralElement
'''
The 'Wall' class represents walls in a building.
'''
class Wall(NonStructuralElement):
	hasOnFloor = models.CharField(max_length=65, blank=True)
	hasThickness = models.FloatField(blank=True) 
	hasThicknessUnit = models.CharField(max_length=65, blank=True)


	def serialize(self):
		return {
			'hasOnFloor': self.hasOnFloor, 
			'hasThickness': self.hasThickness, 
			'hasThicknessUnit': self.hasThicknessUnit, 
		} | super().serialize() 
