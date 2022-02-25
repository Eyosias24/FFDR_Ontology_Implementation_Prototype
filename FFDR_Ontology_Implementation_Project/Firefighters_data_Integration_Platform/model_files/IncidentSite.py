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
		contains = models.ForeignKey(FireCommandCenter, on_delete=models.DO_NOTHING)
		contains = models.ForeignKey(IncidentBuilding, on_delete=models.DO_NOTHING)
		contains = models.ForeignKey(SurroundingStructure, on_delete=models.DO_NOTHING)
		contains = models.ForeignKey(SurroundingTerrain, on_delete=models.DO_NOTHING)
		hasAddress = models.ForeignKey(PublicSafetyAgencyContactAddress, on_delete=models.DO_NOTHING)
		hasWeatherCondition = models.ForeignKey(WeatherCondition, on_delete=models.DO_NOTHING)
		hasDemography = models.TextField()
