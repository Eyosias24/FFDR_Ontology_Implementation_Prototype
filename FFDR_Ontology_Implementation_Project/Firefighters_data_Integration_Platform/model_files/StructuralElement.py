from django.db import models
from .BuildingComponent import BuildingComponent

from .Material import Material

'''
The 'StructuralElement' class represents the structural elements of a
building.
'''
class StructuralElement(BuildingComponent):
		hasMaterial = models.ForeignKey(Material, on_delete=models.DO_NOTHING)
		hasLocation = models.TextField()
		hasFireResistanceRating = models.FloatField()


		def serialize(self):
			return {
				'hasMaterial': self.hasMaterial, 
				'hasLocation': self.hasLocation, 
				'hasFireResistanceRating': self.hasFireResistanceRating, 
			} 
