from django.db import models
from .NonStructuralElement import NonStructuralElement

from .AutomaticFireExtinguishingSystem import AutomaticFireExtinguishingSystem

'''
The 'Stairway' class represents stairways that may be found in a
building.
'''
class Stairway(NonStructuralElement):
		hasFireExtinguishingSystem = models.ForeignKey(AutomaticFireExtinguishingSystem, on_delete=models.DO_NOTHING)
		hasDirectionToExit = models.TextField()
		hasDischargeLevel = models.TextField()
		hasFloorsServed = models.TextField()
		isRoofAccess = models.BooleanField()
		hasCapacity = models.IntegerField()
		hasExitTravelDistances = models.FloatField()
		hasWidth = models.FloatField()
		isExit = models.BooleanField()


		def serialize(self):
			return {
				'hasFireExtinguishingSystem': self.hasFireExtinguishingSystem, 
				'hasDirectionToExit': self.hasDirectionToExit, 
				'hasDischargeLevel': self.hasDischargeLevel, 
				'hasFloorsServed': self.hasFloorsServed, 
				'isRoofAccess': self.isRoofAccess, 
				'hasCapacity': self.hasCapacity, 
				'hasExitTravelDistances': self.hasExitTravelDistances, 
				'hasWidth': self.hasWidth, 
				'isExit': self.isExit, 
			} 
