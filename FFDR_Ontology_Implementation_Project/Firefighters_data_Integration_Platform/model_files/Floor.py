from django.db import models
from .IncidentBuilding import IncidentBuilding


class Floor(models.Model):
	hasProjectName = models.ForeignKey(IncidentBuilding,null=True, on_delete=models.DO_NOTHING)
	hasFloorName = models.CharField(max_length=75, blank=True)
	hasFloorId = models.CharField(max_length=75, blank=True)


	def serialize(self):
		return {
			'hasProjectName': self.hasProjectName.serialize() if not self.hasProjectName == None else '' , 
			'hasFloorName': self.hasFloorName, 
			'hasFloorId': self.hasFloorId
		} 

	def __str__(self):
		return f"Floor Plan : {self.hasFloorName}"  
