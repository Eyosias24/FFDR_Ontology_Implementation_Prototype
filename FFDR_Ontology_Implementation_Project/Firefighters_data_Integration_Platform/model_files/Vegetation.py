from django.db import models
from .SurroundingStructure import SurroundingStructure

'''
The 'vegetation' class represents vegetation nearby an incident
building.
'''
class Vegetation(SurroundingStructure):
		hasFlammabilityLevel = models.IntegerField()
		hasSpecies = models.TextField()


		def serialize(self):
			return {
				'hasFlammabilityLevel': self.hasFlammabilityLevel, 
				'hasSpecies': self.hasSpecies,
				'hasLocation': self.hasLocation

			} 

		def __str__(self):
			return f"{self.hasSpecies}"
