from django.db import models
from .NonStructuralElement import NonStructuralElement

from .DoorUnlockingSystemControlPanel import DoorUnlockingSystemControlPanel

'''
The 'Door' class represents doors in a building.
'''
class Door(NonStructuralElement):
		hasControlPanel = models.ForeignKey(DoorUnlockingSystemControlPanel, on_delete=models.DO_NOTHING)
		hasOpeningDirection = models.TextField()
		isFunctional = models.BooleanField()
		isPrimaryFireServiceEntryPoint = models.BooleanField()
		isShaftway = models.BooleanField()
		hasExitTravelDistances = models.FloatField()
		hasWidth = models.FloatField()
		isExit = models.BooleanField()


		def serialize(self):
			return {
				'hasControlPanel': self.hasControlPanel, 
				'hasOpeningDirection': self.hasOpeningDirection, 
				'isFunctional': self.isFunctional, 
				'isPrimaryFireServiceEntryPoint': self.isPrimaryFireServiceEntryPoint, 
				'isShaftway': self.isShaftway, 
				'hasExitTravelDistances': self.hasExitTravelDistances, 
				'hasWidth': self.hasWidth, 
				'isExit': self.isExit, 
			} 
