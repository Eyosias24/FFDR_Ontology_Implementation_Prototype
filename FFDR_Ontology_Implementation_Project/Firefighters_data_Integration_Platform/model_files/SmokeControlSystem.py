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
	hasControlPanel = models.ForeignKey(SmokeControlSystemControlPanel, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasCoverageZone = models.TextField(blank=True)
	hasType = models.TextField(blank=True)
	isSystemActivated = models.BooleanField(blank=True)


	def serialize(self):
		return {
			'hasControlPanel': self.hasControlPanel.serialize() if not self.hasControlPanel == None else '', 
			'hasCoverageZone': self.hasCoverageZone, 
			'hasType': self.hasType, 
			'isSystemActivated': self.isSystemActivated, 
		} 
