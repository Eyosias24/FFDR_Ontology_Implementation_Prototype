from django.db import models
from .BuildingComponent import BuildingComponent
from .ShaftEnclosure import ShaftEnclosure
'''
The 'VerticalOpening' class represents vertical Openings that may be
found in a building.
'''
class VerticalOpening(BuildingComponent):
	hasName = models.CharField(max_length=65)
	hasShaftEnclosure = models.ForeignKey(ShaftEnclosure, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasDescription = models.TextField(blank=True)
	hasLocation = models.TextField(blank=True)


	def serialize(self):
		return {
			'hasName': self.hasName, 
			'hasShaftEnclosure': self.hasShaftEnclosure.serialize() if not self.hasShaftEnclosure == None else '', 
			'hasDescription': self.hasDescription, 
			'hasLocation': self.hasLocation, 
		} | super().serialize()

	def __str__(self):
		return f"Vertical Opening: {self.hasLocation}" 
