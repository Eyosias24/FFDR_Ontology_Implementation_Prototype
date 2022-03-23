from django.db import models

'''
The 'ConstructionType' class represents the construction type of a
building. The classification is based on the materials used in a
building (whether they are combustible or noncombustible) and the fire
resistance of a building's elements (IBC, 2018)
'''
class ConstructionType(models.Model):
	hasType = models.TextField(blank=True)
	hasDescription = models.TextField(blank=True)


	def serialize(self):
		return {			 
			'hasType': self.hasType, 
			'hasDescription': self.hasDescription,
		} 

	def __str__(self):
		return f"Construction Type: {self.hasType}" 
