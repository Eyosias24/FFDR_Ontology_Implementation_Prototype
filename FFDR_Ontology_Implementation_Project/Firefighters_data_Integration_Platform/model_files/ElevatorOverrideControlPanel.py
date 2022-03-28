from django.db import models
from .ControlPanel import ControlPanel
'''
The 'ElevatorOverrideControlPanel' class represents a control panel
used to override elevators in a building.
'''
class ElevatorOverrideControlPanel(ControlPanel):
	hasName = models.CharField(max_length=80)
	
	def serialize(self):
		return {
			'hastype': self.hasName
		}
	
	def __str__(self):
		return "Elevator Override Control Panel" 
