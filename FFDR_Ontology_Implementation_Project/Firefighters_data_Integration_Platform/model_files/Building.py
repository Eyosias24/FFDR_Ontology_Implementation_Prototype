from django.db import models
from .SurroundingStructure import SurroundingStructure
'''
The 'Building' class represents buildings other than the incident
building.
'''
class Building(SurroundingStructure):
	hastype = models.CharField(max_length=80)
	
	def serialize(self):
		return {
			'hastype': self.hastype
		}

	def __str__(self):
		return f"Surrounding {self.__class__.__name__}: {self.hasName}"  
