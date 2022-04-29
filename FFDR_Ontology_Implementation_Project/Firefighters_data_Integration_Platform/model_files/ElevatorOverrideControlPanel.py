from django.db import models
from .ControlPanel import ControlPanel
'''
The 'ElevatorOverrideControlPanel' class represents a control panel
used to override elevators in a building.
'''
class ElevatorOverrideControlPanel(ControlPanel):
	
	
	def __str__(self):
		return "Elevator Override Control Panel" 

	def serialize(self):
		return super().serialize()

