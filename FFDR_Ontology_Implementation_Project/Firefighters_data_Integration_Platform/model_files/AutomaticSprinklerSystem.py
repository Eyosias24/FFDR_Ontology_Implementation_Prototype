from django.db import models
from .AutomaticFireExtinguishingSystem import AutomaticFireExtinguishingSystem
from.WaterSource import WaterSource
'''
The 'AutomaticSprinklerSystem' class represents a sprinkler system
installed in a building.
'''
class AutomaticSprinklerSystem(AutomaticFireExtinguishingSystem):
	hasWaterSource = models.ForeignKey(WaterSource, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasRequiredMaximumPressure = models.FloatField(blank=True)
	hasRequiredMinimumPressure = models.FloatField(blank=True)
	hasPressureUnit = models.CharField(max_length=75, blank=True)
	isControlValveOn = models.BooleanField(blank=True)

	def serialize(self):		
		return {
			'hasWaterSource': self.hasWaterSource.serialize() if not self.hasWaterSource == None else '' ,
			'hasRequiredMaximumPressure': self.hasRequiredMaximumPressure, 
			'hasRequiredMinimumPressure': self.hasRequiredMinimumPressure, 
			'hasPressureUnit': self.hasPressureUnit, 
			'isControlValveOn': self.isControlValveOn, 
		}  | super().serialize()
