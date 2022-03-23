from django.db import models
from .BuildingComponent import BuildingComponent
'''
The 'AreaOfRefuge' class represents an area of refuge, which is a
protected area in a building where occupants can take refuge during an
emergency (NFPA 101).
'''
class AreaOfRefuge(BuildingComponent):
	hasCapacity = models.IntegerField(blank=True)
	hasLocation = models.TextField(blank=True)


	def serialize(self):
		return {
			'hasCapacity': self.hasCapacity, 
			'hasLocation': self.hasLocation, 
		} 
