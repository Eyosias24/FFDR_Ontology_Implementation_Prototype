from django.db import models

'''
The 'SurroundingStructure' class represents structures surrounding an
incident building (the building with a fire emergency).
'''
class SurroundingStructure(models.Model):
		hasDistanceFromIncidentBuilding = models.FloatField()
		hasLocation = models.TextField()


		def serialize(self):
			return {
				'hasDistanceFromIncidentBuilding': self.hasDistanceFromIncidentBuilding, 
				'hasLocation': self.hasLocation, 
			} 
