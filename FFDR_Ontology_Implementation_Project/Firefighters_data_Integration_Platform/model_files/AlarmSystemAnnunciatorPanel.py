from django.db import models
from .ControlPanel import ControlPanel
'''
The 'AlarmSystemAnnunciatorPanel' class represents annunciator panels
that display information about the type and location of an active
alarm.
'''
class AlarmSystemAnnunciatorPanel(ControlPanel):	

	def __str__(self):
		return "Alarm System Annunciator Panel"   

	def serialize(self):
		return super().serialize()