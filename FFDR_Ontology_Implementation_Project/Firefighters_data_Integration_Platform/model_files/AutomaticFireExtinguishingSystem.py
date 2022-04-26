from django.db import models
from .BuildingSafetySystem import BuildingSafetySystem
from .FireAlarmSystem import FireAlarmSystem
'''
The 'AutomaticFireExtinguishingSystem' class represents an automatic
fire extinguishing system installed in a building.
'''
class AutomaticFireExtinguishingSystem(BuildingSafetySystem):
	hasSystem = models.CharField(null=True, max_length=65)
	hasConnectionWith = models.ForeignKey(FireAlarmSystem, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasCoverageZone = models.CharField(null=True, max_length=65)
	hasLocationOfControlValve = models.CharField(max_length=65)
	isSystemActivated = models.BooleanField(blank=True)



	def serialize(self):
		return {
			'hasSystem': self.hasSystem, 
			'hasConnectionWith': self.hasConnectionWith.serialize() if not self.hasConnectionWith == None else '', 
			'hasCoverageZone': self.hasCoverageZone, 
			'hasLocationOfControlValve': self.hasLocationOfControlValve, 
			'isSystemActivated': self.isSystemActivated, 
		}  | super().serialize()
		
	def __str__(self):
		return  f"Automatic Fire Extinguishing System: {self.hasCoverageZone}" 
