from django.db import models

'''
The 'ConstructionType' class represents the construction type of a
building. The classification is based on the materials used in a
building (whether they are combustible or noncombustible) and the fire
resistance of a building's elements (IBC, 2018)
'''
class ConstructionType(models.Model):
		hasDescription = models.TextField()
		hasType = models.TextField()


		def serialize(self):
			return {
				'hasDescription': self.hasDescription, 
				'hasType': self.hasType, 
			} 
