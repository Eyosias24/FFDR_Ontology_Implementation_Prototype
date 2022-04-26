from django.db import models
from .BuildingComponent import BuildingComponent
from .Material import Material
'''
The 'StructuralElement' class represents the structural elements of a
building.
'''
class StructuralElement(BuildingComponent):
	hasName = models.CharField(null=True, max_length=65)
	hasType = models.CharField(null=True, max_length=65)
	hasMaterial = models.ForeignKey(Material, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasLocation = models.TextField(blank=True)
	hasFireResistanceRating = models.FloatField(blank=True)
	hasFireResistanceRatingUnit = models.CharField(blank=True, max_length=65)


	def serialize(self):
		return {
			'hasName': self.hasName,
			'hasType': self.hasType,
			'hasMaterial': self.hasMaterial.serialize() if not self.hasMaterial == None else '', 
			'hasLocation': self.hasLocation, 
			'hasFireResistanceRating': self.hasFireResistanceRating, 
			'hasFireResistanceRatingUnit': self.hasFireResistanceRatingUnit, 
		} 

	def __str__(self):
		return f"Structural Element: {self.hasName}" 
