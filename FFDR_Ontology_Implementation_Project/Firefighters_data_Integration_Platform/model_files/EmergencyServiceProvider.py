from pydoc import classname
from unicodedata import name
from django.db import models
from .ESPContactAddress import ESPContactAddress
from .IncidentBuilding import IncidentBuilding
'''
The 'EmergencyServiceProvider' class represents emergency service
providers involved in a building fire emergency response.
'''
class EmergencyServiceProvider(models.Model):
	hasProjectName = models.ForeignKey(IncidentBuilding,null=True, on_delete=models.DO_NOTHING)
	hasName = models.CharField(null=True, max_length=80)
	hasAddress = models.ForeignKey(ESPContactAddress, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasDistanceFromIncidentBuilding = models.FloatField(blank=True)
	hasDistanceFromIncidentBuildingUnit = models.CharField(blank=True, max_length=80)


	def serialize(self):
		return {
			'hasProjectName': self.hasProjectName.serialize(),
			'hasName': self.hasName, 
			'hasAddress': self.hasAddress.serialize() if not self.hasAddress == None else '',  
			'hasDistanceFromIncidentBuilding': self.hasDistanceFromIncidentBuilding, 
			'hasDistanceFromIncidentBuildingUnit': self.hasDistanceFromIncidentBuildingUnit
		}

	def __str__(self):
		return f"{self.__class__.__name__}: {self.hasName}"

 
