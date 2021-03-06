from django.db import models
from .ControlPanel import ControlPanel
'''
The 'FireDepartmentCommunicationSystemPanel' class represents a
control panel used to control a fire department communication system
that may be found in a building.
'''
class FireDepartmentCommunicationSystemPanel(ControlPanel):
	
	def __str__(self):
		return "Fire Department Communication System Panel" 

	def serialize(self):
		return super().serialize()
