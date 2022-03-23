from django.db import models
from .NonStructuralElement import NonStructuralElement
from .AutomaticFireExtinguishingSystem import AutomaticFireExtinguishingSystem
'''
The 'Ramp' class represents ramps that may be found in a building.
'''
class Ramp(NonStructuralElement):
	hasFireExtinguishingSystem = models.ForeignKey(AutomaticFireExtinguishingSystem, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasDirectionToExit = models.TextField(blank=True)
	hasDischargeLevel = models.TextField(blank=True)
	hasFloorsServed = models.TextField(blank=True)
	isRoofAccess = models.BooleanField(blank=True)
	hasCapacity = models.IntegerField(blank=True)
	hasExitTravelDistances = models.FloatField(blank=True)
	hasWidth = models.FloatField(blank=True)
	isExit = models.BooleanField(blank=True)


	def serialize(self):
		return {
			'hasFireExtinguishingSystem': self.hasFireExtinguishingSystem.serialize() if not self.hasFireExtinguishingSystem == None else '', 
			'hasDirectionToExit': self.hasDirectionToExit, 
			'hasDischargeLevel': self.hasDischargeLevel, 
			'hasFloorsServed': self.hasFloorsServed, 
			'isRoofAccess': self.isRoofAccess, 
			'hasCapacity': self.hasCapacity, 
			'hasExitTravelDistances': self.hasExitTravelDistances, 
			'hasWidth': self.hasWidth, 
			'isExit': self.isExit, 
		} 
