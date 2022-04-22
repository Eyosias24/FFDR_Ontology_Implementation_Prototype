from django.db import models
from .SurroundingStructure import SurroundingStructure

'''
The 'SurroundingTerrain' class represents terrain surrounding an
incident building (the building with a fire emergency).
''' 
class SurroundingTerrain(SurroundingStructure):
	hasSlope = models.CharField(max_length=80,blank=True)


	def serialize(self):
		return {
			'hasSlope': self.hasSlope, 
		}  | super().serialize()

	def __str__(self):
		return f"{self.__class__.__name__}: {self.hasName}" 
