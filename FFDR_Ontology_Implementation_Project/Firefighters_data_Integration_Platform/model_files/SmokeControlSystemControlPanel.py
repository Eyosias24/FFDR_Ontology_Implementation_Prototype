from django.db import models
from .ControlPanel import ControlPanel
'''
The 'SmokeControlSystemControlPanel' class represents a control panel
used to control a smoke control system that may be found in a
building.
'''
class SmokeControlSystemControlPanel(ControlPanel):
	
	def __str__(self):
		return "Smoke Control System Control Panel" 

	def serialize(self):
		return super().serialize()
