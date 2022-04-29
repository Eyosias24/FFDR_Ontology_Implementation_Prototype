from django.db import models
from .ControlPanel import ControlPanel
'''
The 'FarsControlPanel' class represents a control panel used to
control a firefighter's air replenishment system (FARS)  that may be
found in a building.
'''
class FarsControlPanel(ControlPanel):
	
	def __str__(self):
		return "FARS Control Panel" 

	def serialize(self):
		return super().serialize()
