from django.db import models
from .ControlPanel import ControlPanel
'''
The 'UtilityControlPanel' class represents control panels used to
control different utilities found in a building.
'''
class UtilityControlPanel(ControlPanel):
	
	def __str__(self):
		return f"Utility Control Panel: {self.hasName}" 
