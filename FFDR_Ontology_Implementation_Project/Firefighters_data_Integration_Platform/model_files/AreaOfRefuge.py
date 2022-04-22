from django.db import models
from .BuildingComponent import BuildingComponent
'''
The 'AreaOfRefuge' class represents an area of refuge, which is a
protected area in a building where occupants can take refuge during an
emergency (NFPA 101).
'''
class AreaOfRefuge(BuildingComponent):
	hasName = models.CharField(max_length=255)
	hasLocation = models.CharField(max_length=255)
	hasCapacity = models.IntegerField(blank=True)


	def serialize(self):
		return { 
			'hasName': self.hasName,
			'hasLocation': self.hasLocation,
			'hasCapacity': self.hasCapacity, 
		} 

	def __str__(self):
		return f"Area of Refuge: {self.hasLocation}"  
