from django.db import models
from .BuildingComponent import BuildingComponent

from .Material import Material

'''
The 'NonStructuralElement' class represents the non-structural
elements of a building.
'''
class NonStructuralElement(BuildingComponent):
		hasMaterial = models.ForeignKey(Material, on_delete=models.DO_NOTHING)
		hasID = models.TextField()
		hasLocation = models.TextField()
		hasFireResistanceRating = models.FloatField()


		def serialize(self):
			return {
				'hasMaterial': self.hasMaterial, 
				'hasID': self.hasID, 
				'hasLocation': self.hasLocation, 
				'hasFireResistanceRating': self.hasFireResistanceRating, 
			} 
