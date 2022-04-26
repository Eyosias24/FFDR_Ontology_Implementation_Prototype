from django.db import models
from .IncidentBuilding import IncidentBuilding

'''
The 'ControlPanel' class represents different control panels used to
control several building systems and utilities.
'''
class ControlPanel(models.Model):
	hasProjectName = models.ForeignKey(IncidentBuilding,null=True, on_delete=models.DO_NOTHING)
	hasName = models.CharField(null=True, max_length=80)
	hasLocation = models.CharField(null=True, max_length=255)
	hasDescription = models.TextField(blank=True)


	def serialize(self):
		return {
			'hasId': self.id,
			'hasProjectName': self.hasProjectName.serialize() if not self.hasProjectName == None else ''  ,
			'hasName': self.hasName,
			'hasLocation': self.hasLocation, 
			'hasDescription': self.hasDescription, 
		}

	def __str__(self):
		return f"{self.hasName}"  
