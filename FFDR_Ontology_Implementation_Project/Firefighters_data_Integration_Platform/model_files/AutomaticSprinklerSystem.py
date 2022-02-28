from django.db import models
from .AutomaticFireExtinguishingSystem import AutomaticFireExtinguishingSystem

'''
The 'AutomaticSprinklerSystem' class represents a sprinkler system
installed in a building.
'''
class AutomaticSprinklerSystem(AutomaticFireExtinguishingSystem):
		# hasWaterSource = models.[Add manually!!!]()
		hasRequiredMaximumPressure = models.FloatField()
		hasRequiredMinimumPressure = models.FloatField()
		isControlValveOn = models.BooleanField()


		def serialize(self):
			return {
				'hasWaterSource': self.hasWaterSource, 
				'hasRequiredMaximumPressure': self.hasRequiredMaximumPressure, 
				'hasRequiredMinimumPressure': self.hasRequiredMinimumPressure, 
				'isControlValveOn': self.isControlValveOn, 
			} 
