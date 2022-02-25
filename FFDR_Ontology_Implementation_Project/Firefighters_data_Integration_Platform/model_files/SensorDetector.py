from django.db import models
from .BuildingSafetySystem import BuildingSafetySystem

'''
The 'SensorDetector' class represents different sensors and detectors
installed in a building.
'''
class SensorDetector(BuildingSafetySystem):
		hasCoverageZone = models.TextField()
		isInAlarm = models.BooleanField()
