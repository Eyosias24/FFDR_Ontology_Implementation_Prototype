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
		hasControlPanel = models.ForeignKey(MassNotificationSystemControlPanel, on_delete=models.DO_NOTHING)
		hasCoverageZone = models.TextField()
		hasType = models.TextField()


		def serialize(self):
			return {
				'hasControlPanel': self.hasControlPanel, 
				'hasCoverageZone': self.hasCoverageZone, 
				'hasType': self.hasType, 
			} 
