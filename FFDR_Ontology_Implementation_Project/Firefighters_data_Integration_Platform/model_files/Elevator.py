from django.db import models
from .NonStructuralElement import NonStructuralElement

from .ElevatorOverrideControlPanel import ElevatorOverrideControlPanel

from .AutomaticFireExtinguishingSystem import AutomaticFireExtinguishingSystem

'''
The 'Elevator' class represents elevators that may be found in a
building.
'''
class Elevator(NonStructuralElement):
		hasControlPanel = models.ForeignKey(ElevatorOverrideControlPanel, on_delete=models.DO_NOTHING)
		hasFireExtinguishingSystem = models.ForeignKey(AutomaticFireExtinguishingSystem, on_delete=models.DO_NOTHING)
		hasCapacity = models.IntegerField()
		hasDischargeLevel = models.TextField()
		hasFloorsServed = models.TextField()
		hasMachineRoomLocation = models.TextField()
		isFunctional = models.BooleanField()
		isQualifiedForEvacuation = models.BooleanField()
		hasExitTravelDistances = models.FloatField()
