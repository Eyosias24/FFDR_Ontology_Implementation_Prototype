from django.db import models
from .IncidentBuilding import IncidentBuilding

'''
The 'SurroundingStructure' class represents structures surrounding an
incident building (the building with a fire emergency).
'''
class SurroundingStructure(models.Model):
	hasProjectName = models.ForeignKey(IncidentBuilding,null=True, on_delete=models.DO_NOTHING) 
	hasName = models.CharField(null=True, max_length=80) 
	hasDistanceFromIncidentBuilding = models.FloatField(blank=True)
	hasDistanceUnit = models.CharField(max_length=80, blank=True)
	hasLocation = models.TextField(blank=True)


	def serialize(self):
		return {
			'hasProjectName': self.hasProjectName.serialize() if not self.hasProjectName == None else '',  
			'hasName': self.hasName,
			'hasDistanceFromIncidentBuilding': self.hasDistanceFromIncidentBuilding, 
			'hasDistanceUnit': self.hasDistanceUnit,  
			'hasLocation': self.hasLocation,  
		}  
