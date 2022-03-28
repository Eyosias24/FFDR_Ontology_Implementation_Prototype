from django.db import models
from .SurroundingStructure import SurroundingStructure
'''
The 'HazardousMaterial' class represents any hazardous materials such
as gas tanks and chemical storage.
'''
class HazardousMaterial(SurroundingStructure):
	hasDescription = models.TextField(blank=True)
	hasHazardLevel = models.IntegerField(blank=True)
	hasSpecialHazard = models.TextField(blank=True)


	def serialize(self):
		return {
			'hasDescription': self.hasDescription, 
			'hasHazardLevel': self.hasHazardLevel, 
			'hasSpecialHazard': self.hasSpecialHazard, 
		}

	def __str__(self):
		return f"Hazardous Material: {self.hasName} "    
