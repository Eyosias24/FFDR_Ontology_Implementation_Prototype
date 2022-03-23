from django.db import models
from .NonStructuralElement import NonStructuralElement
from .ElevatorOverrideControlPanel import ElevatorOverrideControlPanel
from .AutomaticFireExtinguishingSystem import AutomaticFireExtinguishingSystem
'''
The 'Elevator' class represents elevators that may be found in a
building.
'''
class Elevator(NonStructuralElement):
	hasControlPanel = models.ForeignKey(ElevatorOverrideControlPanel, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasFireExtinguishingSystem = models.ForeignKey(AutomaticFireExtinguishingSystem, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasCapacity = models.IntegerField(blank=True)
	hasDischargeLevel = models.TextField(blank=True)
	hasFloorsServed = models.TextField(blank=True)
	hasMachineRoomLocation = models.TextField(blank=True)
	isFunctional = models.BooleanField(blank=True)
	isQualifiedForEvacuation = models.BooleanField(blank=True)
	hasExitTravelDistances = models.FloatField(blank=True)


	def serialize(self):
		return {
			'hasControlPanel': self.hasControlPanel.serialize() if not self.hasControlPanel == None else '', 
			'hasFireExtinguishingSystem': self.hasFireExtinguishingSystem.serialize() if not self.hasFireExtinguishingSystem == None else '', 
			'hasCapacity': self.hasCapacity, 
			'hasDischargeLevel': self.hasDischargeLevel, 
			'hasFloorsServed': self.hasFloorsServed, 
			'hasMachineRoomLocation': self.hasMachineRoomLocation, 
			'isFunctional': self.isFunctional, 
			'isQualifiedForEvacuation': self.isQualifiedForEvacuation, 
			'hasExitTravelDistances': self.hasExitTravelDistances, 
		} 
