from django.db import models
from .BuildingSafetySystem import BuildingSafetySystem

from .FireAlarmSystem import FireAlarmSystem

'''
The 'AutomaticFireExtinguishingSystem' class represents an automatic
fire extinguishing system installed in a building.
'''
class AutomaticFireExtinguishingSystem(BuildingSafetySystem):
		hasConnectionWith = models.ForeignKey(FireAlarmSystem, on_delete=models.DO_NOTHING)
		hasCoverageZone = models.TextField()
		hasLocationOfControlValve = models.TextField()
		isSystemActivated = models.BooleanField()
