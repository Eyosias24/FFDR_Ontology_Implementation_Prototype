from django.db import models
from .AutomaticFireExtinguishingSystem import AutomaticFireExtinguishingSystem
'''
The 'AutomaticSprinklerSystem' class represents a sprinkler system
installed in a building.
'''
class AutomaticSprinklerSystem(AutomaticFireExtinguishingSystem):
	# hasWaterSource = models.Add_manually(blank=True)
	hasRequiredMaximumPressure = models.FloatField(blank=True)
	hasRequiredMinimumPressure = models.FloatField(blank=True)
	isControlValveOn = models.BooleanField(blank=True)


	def serialize(self):
		return {
			'hasWaterSource': self.hasWaterSource, 
			'hasRequiredMaximumPressure': self.hasRequiredMaximumPressure, 
			'hasRequiredMinimumPressure': self.hasRequiredMinimumPressure, 
			'isControlValveOn': self.isControlValveOn, 
		} 
