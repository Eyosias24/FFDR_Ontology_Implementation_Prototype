from django.db import models

'''
The 'BuildingOccupancy' class represents the purpose of a building
based on the classification given in the International Building Code
(2018).
'''
class BuildingOccupancy(models.Model):
	hasOccupancy = models.TextField(null=True)
	hasDescription = models.TextField(blank=True, null=True)
	isAbandoned = models.BooleanField()


	def serialize(self):
		return {
			'hasOccupancy': self.hasOccupancy,
			'hasDescription': self.hasDescription, 
			'isAbandoned': self.isAbandoned, 
		} 

	def __str__(self):
		return f"{self.hasOccupancy}" 
