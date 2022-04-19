from django.db import models
from .NonStructuralElement import NonStructuralElement
'''
The 'Window' class represents windows in a building.
'''
class Window(NonStructuralElement):
	hasOnFloor = models.CharField(max_length=65, blank=True)
	hasWidth = models.FloatField(blank=True)
	hasHeight = models.FloatField(blank=True)
	hasMeasurementUnit = models.CharField(max_length=65, blank=True)
	hasOpeningDirection = models.CharField(max_length=65, blank=True)
	isFunctional = models.BooleanField(blank=True)
	isOnExterior = models.BooleanField(blank=True)
	isShaftway = models.BooleanField(blank=True)


	def serialize(self):
		return {
			'hasOnFloor': self.hasOnFloor, 
			'hasHeight': self.hasHeight, 
			'hasWidth': self.hasWidth, 
			'hasMeasurementUnit': self.hasMeasurementUnit, 
			'hasOpeningDirection': self.hasOpeningDirection, 
			'isFunctional': self.isFunctional, 
			'isOnExterior': self.isOnExterior, 
			'isShaftway': self.isShaftway, 
		}  |  super().serialize() 
