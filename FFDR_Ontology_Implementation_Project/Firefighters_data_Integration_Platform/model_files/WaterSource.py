from django.db import models
from .IncidentBuilding import IncidentBuilding

'''
The 'WaterSource' class represents different water sources that can be
used for fire suppression.
'''
class WaterSource(models.Model):
	hasProjectName = models.ForeignKey(IncidentBuilding,null=True, on_delete=models.DO_NOTHING)
	hasName = models.CharField(null=True, max_length=80)
	hasFireFlow = models.FloatField(blank=True)
	hasFireFlowUnit = models.CharField(null=True, max_length=80)
	isFunctional = models.BooleanField(blank=True) 


	def serialize(self):
		return {
			'hasProjectName': self.hasProjectName.serialize() if not self.hasProjectName == None else '' ,
			'hasName': self.hasName, 
			'hasFireFlow': self.hasFireFlow, 
			'hasFireFlowUnit': self.hasFireFlowUnit, 
			'isFunctional': self.isFunctional, 
		}

	def __str__(self):
		return f"{self.hasName} "   
