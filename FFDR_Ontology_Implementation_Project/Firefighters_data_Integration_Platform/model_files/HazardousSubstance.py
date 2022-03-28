from django.db import models
from .BuildingComponent import BuildingComponent
'''
The 'HazardousSubstance' class represents hazardous substances that
may be found in a building.
'''
class HazardousSubstance(BuildingComponent):
	hasName = models.CharField(max_length=75)
	hasDescription = models.TextField(blank=True)
	hasHazardLevel = models.IntegerField(blank=True)
	hasLocation = models.CharField(max_length=255)
	hasSpecialHazard = models.TextField(blank=True)
	isDecontaminationRequired = models.BooleanField(blank=True)


	def serialize(self):
		return {
			'hasName': self.hasName, 
			'hasDescription': self.hasDescription, 
			'hasHazardLevel': self.hasHazardLevel, 
			'hasLocation': self.hasLocation, 
			'hasSpecialHazard': self.hasSpecialHazard, 
			'isDecontaminationRequired': self.isDecontaminationRequired, 
		} 
	def __str__(self):
		return  f"Hazardous Substance: {self.hasName}"  
