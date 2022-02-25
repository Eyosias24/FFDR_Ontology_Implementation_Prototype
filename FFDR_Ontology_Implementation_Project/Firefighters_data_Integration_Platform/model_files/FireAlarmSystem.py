from django.db import models
from .BuildingSafetySystem import BuildingSafetySystem

from .AlarmSystemAnnunciatorPanel import AlarmSystemAnnunciatorPanel

'''
The 'FireAlarmSystem' class represents a fire alarm system installed
in a building.
'''
class FireAlarmSystem(BuildingSafetySystem):
		hasControlPanel = models.ForeignKey(AlarmSystemAnnunciatorPanel, on_delete=models.DO_NOTHING)
		hasCoverageZone = models.TextField()
		hasTypeOfSignalInitiator = models.TextField()
		isSystemActivated = models.BooleanField()
