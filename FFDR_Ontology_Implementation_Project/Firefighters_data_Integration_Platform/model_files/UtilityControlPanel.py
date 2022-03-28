from django.db import models
from .ControlPanel import ControlPanel
'''
The 'UtilityControlPanel' class represents control panels used to
control different utilities found in a building.
'''
class UtilityControlPanel(ControlPanel):
	hasName = models.CharField(max_length=80)

	def serialize(self):
		return {
			'hasName': self.hasLocation,  
		}
	
	def __str__(self):
		return f"Utility Control Panel: {self.hasName}" 
