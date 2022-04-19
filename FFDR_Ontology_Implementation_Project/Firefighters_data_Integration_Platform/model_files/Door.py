from django.db import models
from .NonStructuralElement import NonStructuralElement
from .DoorUnlockingSystemControlPanel import DoorUnlockingSystemControlPanel
'''
The 'Door' class represents doors in a building.
'''
class Door(NonStructuralElement):
	hasOnFloor = models.CharField(max_length=65, blank=True)
	hasControlPanel = models.ForeignKey(DoorUnlockingSystemControlPanel, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasOpeningDirection = models.CharField(blank=True, max_length=65)
	isFunctional = models.BooleanField(blank=True)
	isPrimaryFireServiceEntryPoint = models.BooleanField(blank=True)
	isShaftway = models.BooleanField(blank=True)
	hasExitTravelDistances = models.FloatField(blank=True)
	hasExitTravelDistancesUnit = models.CharField(blank=True, max_length=65)
	hasWidth = models.FloatField(blank=True)
	hasWidthUnit = models.CharField(blank=True, max_length=65)
	isExit = models.BooleanField(blank=True) 


	def serialize(self):
		return {		
			'hasOnFloor': self.hasOnFloor, 
			'hasControlPanel': self.hasControlPanel.serialize() if not self.hasControlPanel == None else '', 
			'hasOpeningDirection': self.hasOpeningDirection, 
			'isFunctional': self.isFunctional, 
			'isPrimaryFireServiceEntryPoint': self.isPrimaryFireServiceEntryPoint, 
			'isShaftway': self.isShaftway, 
			'hasExitTravelDistances': self.hasExitTravelDistances, 
			'hasExitTravelDistancesUnit': self.hasExitTravelDistancesUnit, 
			'hasWidth': self.hasWidth, 
			'hasWidthUnit': self.hasWidthUnit, 
			'isExit': self.isExit, 
		} |  super().serialize() 
