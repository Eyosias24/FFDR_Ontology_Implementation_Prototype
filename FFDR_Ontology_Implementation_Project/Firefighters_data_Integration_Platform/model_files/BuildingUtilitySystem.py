from django.db import models
from .BuildingComponent import BuildingComponent

from .UtilityContactAddress import UtilityContactAddress

from .UtilityControlPanel import UtilityControlPanel

'''
The 'BuildingUtilitySystem' class represents utilities found in a
building.
'''
class BuildingUtilitySystem(BuildingComponent):
		hasAddress = models.ForeignKey(UtilityContactAddress, on_delete=models.DO_NOTHING)
		hasControlPanel = models.ForeignKey(UtilityControlPanel, on_delete=models.DO_NOTHING)
		isUtilityRunning = models.BooleanField()


		def serialize(self):
			return {
				'hasAddress': self.hasAddress, 
				'hasControlPanel': self.hasControlPanel, 
				'isUtilityRunning': self.isUtilityRunning, 
			} 
