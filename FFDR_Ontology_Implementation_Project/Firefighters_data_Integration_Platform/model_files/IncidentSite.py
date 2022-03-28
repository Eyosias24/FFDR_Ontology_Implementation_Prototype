from django.db import models
from .FireCommandCenter import FireCommandCenter
from .IncidentBuilding import IncidentBuilding
from .SurroundingStructure import SurroundingStructure
from .SurroundingTerrain import SurroundingTerrain
from .PublicSafetyAgencyContactAddress import PublicSafetyAgencyContactAddress
from .WeatherCondition import WeatherCondition
'''
The 'IncidentSite' class represents a site where a building fire
emergency has occurred.
'''
class IncidentSite(models.Model):
	hasProjectName = models.ForeignKey(IncidentBuilding, on_delete=models.DO_NOTHING)
	hasSiteDescription = models.TextField(blank=True)


	def serialize(self):
		return {
			'hasProjectName': self.hasProjectName,
			'hasSiteDescription': self.hasSiteDescription, 
		} 

	def __str__(self):
		return f"{self.__class__.__name__}: {self.hasProjectName}" 
