from django.db import models
from .BuildingComponent import BuildingComponent
'''
The 'HazardousSubstance' class represents hazardous substances that
may be found in a building.
'''
class HazardousSubstance(BuildingComponent):
	hasDescription = models.TextField(blank=True)
	hasHazardLevel = models.IntegerField(blank=True)
	hasLocation = models.TextField(blank=True)
	hasSpecialHazard = models.TextField(blank=True)
	isDecontaminationRequired = models.BooleanField(blank=True)


	def serialize(self):
		return {
			'hasDescription': self.hasDescription, 
			'hasHazardLevel': self.hasHazardLevel, 
			'hasLocation': self.hasLocation, 
			'hasSpecialHazard': self.hasSpecialHazard, 
			'isDecontaminationRequired': self.isDecontaminationRequired, 
		} 
