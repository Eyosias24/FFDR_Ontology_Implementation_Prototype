from django.db import models
from .IncidentBuilding import IncidentBuilding

'''
The 'ControlPanel' class represents different control panels used to
control several building systems and utilities.
'''
class ControlPanel(models.Model):
	hasProjectName = models.ForeignKey(IncidentBuilding, on_delete=models.DO_NOTHING)
	hasName = models.CharField(max_length=80)
	hasLocation = models.CharField(max_length=255)
	hasDescription = models.TextField(blank=True)


	def serialize(self):
		return {
			'hasProjectName': self.hasProjectName,
			'hasName': self.hasName,
			'hasLocation': self.hasLocation, 
			'hasDescription': self.hasDescription, 
		}

	def __str__(self):
		return f"{self.hasName}"  
