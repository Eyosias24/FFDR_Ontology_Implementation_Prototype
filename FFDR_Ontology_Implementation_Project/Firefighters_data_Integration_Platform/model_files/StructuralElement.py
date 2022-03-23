from django.db import models
from .BuildingComponent import BuildingComponent
from .Material import Material
'''
The 'StructuralElement' class represents the structural elements of a
building.
'''
class StructuralElement(BuildingComponent):
	hasMaterial = models.ForeignKey(Material, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasLocation = models.TextField(blank=True)
	hasFireResistanceRating = models.FloatField(blank=True)


	def serialize(self):
		return {
			'hasMaterial': self.hasMaterial.serialize() if not self.hasMaterial == None else '', 
			'hasLocation': self.hasLocation, 
			'hasFireResistanceRating': self.hasFireResistanceRating, 
		} 
