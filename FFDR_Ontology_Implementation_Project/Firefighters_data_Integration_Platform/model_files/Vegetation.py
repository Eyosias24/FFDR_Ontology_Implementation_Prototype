from django.db import models
from .SurroundingStructure import SurroundingStructure
'''
The 'vegetation' class represents vegetation nearby an incident
building.
'''
class Vegetation(SurroundingStructure):
	hasFlammabilityLevel = models.IntegerField(blank=True)
	hasSpecies = models.TextField(blank=True)


	def serialize(self):
		return {
			'hasFlammabilityLevel': self.hasFlammabilityLevel, 
			'hasSpecies': self.hasSpecies, 
		} 
