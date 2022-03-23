from django.db import models
from .NonStructuralElement import NonStructuralElement
from .DoorUnlockingSystemControlPanel import DoorUnlockingSystemControlPanel
'''
The 'Door' class represents doors in a building.
'''
class Door(NonStructuralElement):
	hasControlPanel = models.ForeignKey(DoorUnlockingSystemControlPanel, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasOpeningDirection = models.TextField(blank=True)
	isFunctional = models.BooleanField(blank=True)
	isPrimaryFireServiceEntryPoint = models.BooleanField(blank=True)
	isShaftway = models.BooleanField(blank=True)
	hasExitTravelDistances = models.FloatField(blank=True)
	hasWidth = models.FloatField(blank=True)
	isExit = models.BooleanField(blank=True)


	def serialize(self):
		return {
			'hasControlPanel': self.hasControlPanel.serialize() if not self.hasControlPanel == None else '', 
			'hasOpeningDirection': self.hasOpeningDirection, 
			'isFunctional': self.isFunctional, 
			'isPrimaryFireServiceEntryPoint': self.isPrimaryFireServiceEntryPoint, 
			'isShaftway': self.isShaftway, 
			'hasExitTravelDistances': self.hasExitTravelDistances, 
			'hasWidth': self.hasWidth, 
			'isExit': self.isExit, 
		} 
