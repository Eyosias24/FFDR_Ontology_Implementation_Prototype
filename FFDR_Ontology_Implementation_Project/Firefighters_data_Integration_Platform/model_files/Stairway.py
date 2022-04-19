from django.db import models
from .NonStructuralElement import NonStructuralElement
from .AutomaticFireExtinguishingSystem import AutomaticFireExtinguishingSystem
'''
The 'Stairway' class represents stairways that may be found in a
building.
'''
class Stairway(NonStructuralElement):
	hasFireExtinguishingSystem = models.ForeignKey(AutomaticFireExtinguishingSystem, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasDirectionToExit = models.TextField(blank=True)
	hasDischargeLevel = models.CharField(blank=True, max_length=65)
	hasFloorsServed = models.TextField(blank=True)
	isRoofAccess = models.BooleanField(blank=True)
	hasCapacity = models.IntegerField(blank=True)
	hasExitTravelDistances = models.FloatField(blank=True)
	hasDistancesUnit = models.CharField(blank=True, max_length=65)
	hasWidth = models.FloatField(blank=True)
	hasWidthUnit = models.CharField(blank=True, max_length=65)
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
			'hasDistancesUnit': self.hasDistancesUnit, 
			'hasWidth': self.hasWidth,
			'hasWidthUnit': self.hasWidthUnit,  
			'isExit': self.isExit, 
		} | super().serialize()
