from django.db import models

'''
The 'BuildingOccupancy' class represents the purpose of a building
based on the classification given in the International Building Code
(2018).
'''
class BuildingOccupancy(models.Model):
		hasDescription = models.TextField()
		isAbandoned = models.BooleanField()


		def serialize(self):
			return {
				'hasDescription': self.hasDescription, 
				'isAbandoned': self.isAbandoned, 
			} 
