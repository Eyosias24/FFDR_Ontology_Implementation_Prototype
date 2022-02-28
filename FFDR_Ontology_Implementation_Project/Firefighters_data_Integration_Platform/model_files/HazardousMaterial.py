from django.db import models
from .SurroundingStructure import SurroundingStructure

'''
The 'HazardousMaterial' class represents any hazardous materials such
as gas tanks and chemical storage.
'''
class HazardousMaterial(SurroundingStructure):
		hasDescription = models.TextField()
		hasHazardLevel = models.IntegerField()
		hasSpecialHazard = models.TextField()


		def serialize(self):
			return {
				'hasDescription': self.hasDescription, 
				'hasHazardLevel': self.hasHazardLevel, 
				'hasSpecialHazard': self.hasSpecialHazard, 
			} 
