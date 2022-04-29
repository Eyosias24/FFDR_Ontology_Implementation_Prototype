from django.db import models
from .ControlPanel import ControlPanel
'''
The 'DoorUnlockingSystemControlPanel' class represents a control panel
used to unlock some or all doors in a building.
'''
class DoorUnlockingSystemControlPanel(ControlPanel):
	
	def __str__(self):
		return "Door Unlocking System Control Panel" 

	def serialize(self):
		return super().serialize()
