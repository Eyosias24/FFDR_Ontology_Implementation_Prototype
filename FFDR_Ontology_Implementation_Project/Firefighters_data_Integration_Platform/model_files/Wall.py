from django.db import models
from .NonStructuralElement import NonStructuralElement
'''
The 'Wall' class represents walls in a building.
'''
class Wall(NonStructuralElement):
	hasThickness = models.FloatField(blank=True)
	hasThicknessUnit = models.CharField(max_length=65, blank=True)


	def serialize(self):
		return {
			'hasThickness': self.hasThickness, 
			'hasThicknessUnit': self.hasThicknessUnit, 
		} 
