from django.db import models
from .NonStructuralElement import NonStructuralElement
'''
The 'Window' class represents windows in a building.
'''
class Window(NonStructuralElement):
	hasHeight = models.FloatField(blank=True)
	hasOpeningDirection = models.TextField(blank=True)
	isFunctional = models.BooleanField(blank=True)
	isOnExterior = models.BooleanField(blank=True)
	isShaftway = models.BooleanField(blank=True)
	hasWidth = models.FloatField(blank=True)


	def serialize(self):
		return {
			'hasHeight': self.hasHeight, 
			'hasOpeningDirection': self.hasOpeningDirection, 
			'isFunctional': self.isFunctional, 
			'isOnExterior': self.isOnExterior, 
			'isShaftway': self.isShaftway, 
			'hasWidth': self.hasWidth, 
		} 
