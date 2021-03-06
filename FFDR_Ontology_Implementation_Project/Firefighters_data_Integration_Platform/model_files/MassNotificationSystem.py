from django.db import models
from .BuildingSafetySystem import BuildingSafetySystem
from .MassNotificationSystemControlPanel import MassNotificationSystemControlPanel
'''
Notification type could be auditory or visual or both.

The 'MassNotificationSystem' class represents a mass notification
system that is used by firefighters to provide clear instruction to
building occupants (OSHA, 2015).
'''
class MassNotificationSystem(BuildingSafetySystem):
	hasType = models.CharField(max_length=65, blank=True)
	hasControlPanel = models.ForeignKey(MassNotificationSystemControlPanel, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasCoverageZone = models.CharField(max_length=65, blank=True)


	def serialize(self):
		return {
			'hasControlPanel': self.hasControlPanel.serialize() if not self.hasControlPanel == None else '', 
			'hasCoverageZone': self.hasCoverageZone, 
			'hasType': self.hasType, 
		} | super().serialize()

	def __str__(self):
		return f"Fire Pump: {self.hasCoverageZone}"    
   
