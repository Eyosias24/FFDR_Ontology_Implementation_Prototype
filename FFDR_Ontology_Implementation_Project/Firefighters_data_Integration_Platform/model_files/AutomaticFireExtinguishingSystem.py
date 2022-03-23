from django.db import models
from .BuildingSafetySystem import BuildingSafetySystem
from .FireAlarmSystem import FireAlarmSystem
'''
The 'AutomaticFireExtinguishingSystem' class represents an automatic
fire extinguishing system installed in a building.
'''
class AutomaticFireExtinguishingSystem(BuildingSafetySystem):
	hasConnectionWith = models.ForeignKey(FireAlarmSystem, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasCoverageZone = models.TextField(blank=True)
	hasLocationOfControlValve = models.TextField(blank=True)
	isSystemActivated = models.BooleanField(blank=True)


	def serialize(self):
		return {
			'hasConnectionWith': self.hasConnectionWith.serialize() if not self.hasConnectionWith == None else '', 
			'hasCoverageZone': self.hasCoverageZone, 
			'hasLocationOfControlValve': self.hasLocationOfControlValve, 
			'isSystemActivated': self.isSystemActivated, 
		} 
