from django.db import models
from .IncidentBuilding import IncidentBuilding


class FloorPlan(models.Model):
	pass
	# hasProjectName = models.ForeignKey(IncidentBuilding, on_delete=models.DO_NOTHING)
	# hasFloor = models.CharField(max_length=75, blank=True)
	# hasType = models.CharField(max_length=75, blank=True)
	# hasPlanLocation = models.CharField(max_length=255, blank=True)


	# def serialize(self):
	# 	return {
	# 		'hasProjectName': self.hasProjectName.serialize() if not self.hasProjectName == None else '' , 
	# 		'hasFloor': self.hasFloor, 
	# 		'hasType': self.hasType, 
	# 		'hasPlanLocation': self.hasPlanLocation, 
	# 	} 

	# def __str__(self):
	# 	return f"Floor Plan : {self.hasName}"  
