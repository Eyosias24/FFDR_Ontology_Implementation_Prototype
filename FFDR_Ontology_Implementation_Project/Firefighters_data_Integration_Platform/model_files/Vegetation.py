from django.db import models
from .SurroundingStructure import SurroundingStructure

'''
The 'vegetation' class represents vegetation nearby an incident
building.
'''
class Vegetation(SurroundingStructure):
		hasFlammabilityLevel = models.IntegerField()
		hasSpecies = models.TextField()
