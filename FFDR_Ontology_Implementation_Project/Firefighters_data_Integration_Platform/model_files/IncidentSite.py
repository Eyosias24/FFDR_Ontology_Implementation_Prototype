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
	contains = models.ForeignKey(FireCommandCenter, on_delete=models.DO_NOTHING, blank=True, null=True)
	contains = models.ForeignKey(IncidentBuilding, on_delete=models.DO_NOTHING, blank=True, null=True)
	contains = models.ForeignKey(SurroundingStructure, on_delete=models.DO_NOTHING, blank=True, null=True)
	contains = models.ForeignKey(SurroundingTerrain, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasAddress = models.ForeignKey(PublicSafetyAgencyContactAddress, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasWeatherCondition = models.ForeignKey(WeatherCondition, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasDemography = models.TextField(blank=True)


	def serialize(self):
		return {
			'contains': self.contains.serialize() if not self.contains == None else '', 
			'contains': self.contains.serialize() if not self.contains == None else '', 
			'contains': self.contains.serialize() if not self.contains == None else '', 
			'contains': self.contains.serialize() if not self.contains == None else '', 
			'hasAddress': self.hasAddress.serialize() if not self.hasAddress == None else '', 
			'hasWeatherCondition': self.hasWeatherCondition.serialize() if not self.hasWeatherCondition == None else '', 
			'hasDemography': self.hasDemography, 
		} 
