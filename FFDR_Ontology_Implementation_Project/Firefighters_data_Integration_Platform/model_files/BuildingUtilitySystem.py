from asyncio.windows_events import NULL
from django.db import models
from .BuildingComponent import BuildingComponent
from .UtilityContactAddress import UtilityContactAddress
from .UtilityControlPanel import UtilityControlPanel
'''
The 'BuildingUtilitySystem' class represents utilities found in a
building.
'''
class BuildingUtilitySystem(BuildingComponent):
	hasAddress = models.ForeignKey(UtilityContactAddress, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasControlPanel = models.ForeignKey(UtilityControlPanel, on_delete=models.DO_NOTHING, blank=True, null=True)
	isUtilityRunning = models.BooleanField(blank=True)


	def serialize(self):
		return {
			'hasAddress': self.hasAddress.serialize() if not self.hasAddress == None else '',  
			'hasControlPanel': self.hasControlPanel.serialize() if not self.hasControlPanel == None else '',
			'isUtilityRunning': self.isUtilityRunning,  
		}  | super().serialize()

