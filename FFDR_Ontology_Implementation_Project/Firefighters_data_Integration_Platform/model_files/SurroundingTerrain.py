from django.db import models

'''
The 'SurroundingTerrain' class represents terrain surrounding an
incident building (the building with a fire emergency).
'''
class SurroundingTerrain(models.Model):
	hasLocation = models.CharField(max_length=80, blank=True)
	hasSlope = models.CharField(max_length=80,blank=True)


	def serialize(self):
		return {
			'hasLocation': self.hasLocation, 
			'hasSlope': self.hasSlope, 
		} 

	def __str__(self):
		return f"{self.__class__.__name__}: {self.hasLocation}" 
