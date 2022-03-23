from django.db import models
from .BuildingComponent import BuildingComponent
from .Material import Material
'''
The 'NonStructuralElement' class represents the non-structural
elements of a building.
'''
class NonStructuralElement(BuildingComponent):
	hasMaterial = models.ForeignKey(Material, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasID = models.TextField(blank=True)
	hasLocation = models.TextField(blank=True)
	hasFireResistanceRating = models.FloatField(blank=True)


	def serialize(self):
		return {
			'hasMaterial': self.hasMaterial.serialize() if not self.hasMaterial == None else '', 
			'hasID': self.hasID, 
			'hasLocation': self.hasLocation, 
			'hasFireResistanceRating': self.hasFireResistanceRating, 
		} 
