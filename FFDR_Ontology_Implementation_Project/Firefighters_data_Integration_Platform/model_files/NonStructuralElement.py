from django.db import models
from .BuildingComponent import BuildingComponent
from .Material import Material
'''
The 'NonStructuralElement' class represents the non-structural
elements of a building.
'''
class NonStructuralElement(BuildingComponent):
	hasId = models.CharField(null=True, max_length=65)
	hasMaterial = models.ForeignKey(Material, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasLocation = models.CharField(blank=True, max_length=65)
	hasFireResistanceRating = models.FloatField(blank=True)
	hasFireResistanceRatingUnit = models.CharField(blank=True, max_length=65)


	def serialize(self):
		return {			 
			'hasId': self.hasId, 
			'hasMaterial': self.hasMaterial.serialize() if not self.hasMaterial == None else '',
			'hasLocation': self.hasLocation, 
			'hasFireResistanceRating': self.hasFireResistanceRating, 
			'hasFireResistanceRatingUnit': self.hasFireResistanceRatingUnit,
		}  |  super().serialize() 

	def __str__(self):
		return f"{self.__class__.__name__}: {self.hasId}"  
