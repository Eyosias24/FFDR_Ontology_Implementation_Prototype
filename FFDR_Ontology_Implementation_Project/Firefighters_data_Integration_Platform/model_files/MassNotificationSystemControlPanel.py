from django.db import models
from .ControlPanel import ControlPanel
'''
The 'MassNotificationSystemControlPanel' class represents a control
panel used to control a mass notification system that may be found in
a building.
'''
class MassNotificationSystemControlPanel(ControlPanel):
	
	def __str__(self):
		return "Mass Notification System Control Panel" 
