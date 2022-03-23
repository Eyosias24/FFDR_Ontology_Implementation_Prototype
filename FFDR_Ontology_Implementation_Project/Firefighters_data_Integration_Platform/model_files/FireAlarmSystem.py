from django.db import models
from .BuildingSafetySystem import BuildingSafetySystem
from .AlarmSystemAnnunciatorPanel import AlarmSystemAnnunciatorPanel
'''
The 'FireAlarmSystem' class represents a fire alarm system installed
in a building.
'''
class FireAlarmSystem(BuildingSafetySystem):
	hasControlPanel = models.ForeignKey(AlarmSystemAnnunciatorPanel, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasCoverageZone = models.TextField(blank=True)
	hasTypeOfSignalInitiator = models.TextField(blank=True)
	isSystemActivated = models.BooleanField(blank=True)


	def serialize(self):
		return {
			'hasControlPanel': self.hasControlPanel.serialize() if not self.hasControlPanel == None else '', 
			'hasCoverageZone': self.hasCoverageZone, 
			'hasTypeOfSignalInitiator': self.hasTypeOfSignalInitiator, 
			'isSystemActivated': self.isSystemActivated, 
		} 
