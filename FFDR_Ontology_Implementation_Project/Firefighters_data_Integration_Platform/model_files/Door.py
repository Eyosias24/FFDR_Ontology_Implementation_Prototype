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
