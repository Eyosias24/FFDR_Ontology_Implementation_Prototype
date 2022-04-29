from django.db import models
from .BuildingComponent import BuildingComponent
from .AutomaticFireExtinguishingSystem import AutomaticFireExtinguishingSystem
'''
The 'ConcealedSpace' class represents concealed spaces that may be
found in a building.
'''
class ConcealedSpace(BuildingComponent):
	hasName = models.CharField(null=True, max_length=65)
	hasLocation = models.CharField(null=True, max_length=255)
	hasDescription = models.TextField(blank=True)
	hasFireExtinguishingSystem = models.ForeignKey(AutomaticFireExtinguishingSystem, on_delete=models.DO_NOTHING, blank=True, null=True)


	def serialize(self):
		return {
			'hasName': self.hasName, 
			'hasLocation': self.hasLocation, 
			'hasDescription': self.hasDescription, 
			'hasFireExtinguishingSystem': self.hasFireExtinguishingSystem.serialize() if not self.hasFireExtinguishingSystem == None else '',
			} | super().serialize() 
	def __str__(self): 
		return  f"Concealed Space: {self.hasLocation}"  
