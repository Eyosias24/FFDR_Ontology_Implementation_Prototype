from django.db import models
from .BuildingComponent import BuildingComponent
'''
The 'Material' class represents the constituting materials of
different elements.
'''
class Material(models.Model):
	hasName = models.CharField(null=True, max_length=80)


	def serialize(self):
		return {
			'hasName': self.hasName 
		} 

	def __str__(self):
		return f"{self.hasName} "   
