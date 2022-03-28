from django.db import models
from .IncidentBuilding import IncidentBuilding

'''
The 'BuildingComponent' class represents different building components
that firefighters may interact with during a building fire emergency.
'''
class BuildingComponent(models.Model):
	hasProjectName = models.ForeignKey(IncidentBuilding, on_delete=models.DO_NOTHING) 


	def serialize(self):
		return {
			'hasProjectName': self.hasProjectName  
		} 
