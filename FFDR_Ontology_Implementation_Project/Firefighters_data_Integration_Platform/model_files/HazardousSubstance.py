from django.db import models
from .BuildingComponent import BuildingComponent

'''
The 'HazardousSubstance' class represents hazardous substances that
may be found in a building.
'''
class HazardousSubstance(BuildingComponent):
		hasDescription = models.TextField()
		hasHazardLevel = models.IntegerField()
		hasLocation = models.TextField()
		hasSpecialHazard = models.TextField()
		isDecontaminationRequired = models.BooleanField()
