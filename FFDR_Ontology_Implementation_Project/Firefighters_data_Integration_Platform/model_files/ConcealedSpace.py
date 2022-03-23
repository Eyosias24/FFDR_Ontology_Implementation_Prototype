from django.db import models
from .BuildingComponent import BuildingComponent
from .AutomaticFireExtinguishingSystem import AutomaticFireExtinguishingSystem
'''
The 'ConcealedSpace' class represents concealed spaces that may be
found in a building.
'''
class ConcealedSpace(BuildingComponent):
	hasFireExtinguishingSystem = models.ForeignKey(AutomaticFireExtinguishingSystem, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasDescription = models.TextField(blank=True)
	hasLocation = models.TextField(blank=True)


	def serialize(self):
		return {
			'hasFireExtinguishingSystem': self.hasFireExtinguishingSystem.serialize() if not self.hasFireExtinguishingSystem == None else '', 
			'hasDescription': self.hasDescription, 
			'hasLocation': self.hasLocation, 
		} 
