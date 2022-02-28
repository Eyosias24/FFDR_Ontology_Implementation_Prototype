from django.db import models

'''
The 'SurroundingTerrain' class represents terrain surrounding an
incident building (the building with a fire emergency).
'''
class SurroundingTerrain(models.Model):
		hasSlope = models.FloatField()


		def serialize(self):
			return {
				'hasSlope': self.hasSlope, 
			} 
