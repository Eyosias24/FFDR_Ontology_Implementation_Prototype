from django.db import models
from .WaterSource import WaterSource
'''
The 'StaticWaterSource' class represents static water sources that can
be used for fire suppression.

Type: Lakes, ponds, cisterns, fountains, swimming pools, reservoirs,
pressure tanks, and elevated tanks.
'''
class StaticWaterSource(WaterSource):
	hasType = models.TextField(blank=True)
	hasLocation = models.TextField(blank=True)
	hasDistanceFromFDC = models.FloatField(blank=True)
	hasDistanceFromIncidentBuilding = models.FloatField(blank=True)
	hasDistanceUnit = models.CharField(max_length=80)


	def serialize(self):
		return {
			'hasType': self.hasType, 
			'hasLocation': self.hasLocation, 
			'hasDistanceFromFDC': self.hasDistanceFromFDC,
			'hasDistanceFromIncidentBuilding': self.hasDistanceFromIncidentBuilding, 
			'hasDistanceUnit': self.hasDistanceUnit, 
		} | super().serialize()

	def __str__(self):
		return f"{self.__class__.__name__}: {self.hasName}" 
