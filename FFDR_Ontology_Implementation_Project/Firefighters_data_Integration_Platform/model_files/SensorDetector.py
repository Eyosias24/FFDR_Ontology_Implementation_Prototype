from django.db import models
from .BuildingSafetySystem import BuildingSafetySystem
'''
The 'SensorDetector' class represents different sensors and detectors
installed in a building.
'''
class SensorDetector(BuildingSafetySystem):
	hasName = models.CharField(null=True, max_length=65)
	hasOnFloor = models.CharField(null=True, max_length=65)
	hasLocation = models.CharField(null=True, max_length=65, blank=True)
	isInAlarm = models.BooleanField(blank=True)


	def serialize(self):
		return {
			'hasName': self.hasName, 
			'hasOnFloor': self.hasOnFloor, 
			'hasLocation': self.hasLocation, 
			'isInAlarm': self.isInAlarm, 
		}      
