from django.db import models
from .BuildingSafetySystem import BuildingSafetySystem

from .SmokeControlSystemControlPanel import SmokeControlSystemControlPanel

'''
System type could be: smoke exhaust systems and stair pressurization
systems

The 'SmokeControlSystem' class represents a smoke control system that
supports the protection of building occupants while they evacuate the
building (OSHA, 2015).
'''
class SmokeControlSystem(BuildingSafetySystem):
		hasControlPanel = models.ForeignKey(SmokeControlSystemControlPanel, on_delete=models.DO_NOTHING)
		hasCoverageZone = models.TextField()
		hasType = models.TextField()
		isSystemActivated = models.BooleanField()
