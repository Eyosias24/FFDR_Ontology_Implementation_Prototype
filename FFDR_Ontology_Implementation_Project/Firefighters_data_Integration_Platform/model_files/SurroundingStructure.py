from django.db import models

'''
The 'SurroundingStructure' class represents structures surrounding an
incident building (the building with a fire emergency).
'''
class SurroundingStructure(models.Model):
	hasDistanceFromIncidentBuilding = models.FloatField(blank=True)
	hasLocation = models.TextField(blank=True)


	def serialize(self):
		return {
			'hasDistanceFromIncidentBuilding': self.hasDistanceFromIncidentBuilding, 
			'hasLocation': self.hasLocation, 
		} 
