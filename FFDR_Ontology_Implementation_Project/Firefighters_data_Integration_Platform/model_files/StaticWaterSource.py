from django.db import models
from .WaterSource import WaterSource
'''
The 'StaticWaterSource' class represents static water sources that can
be used for fire suppression.

Type: Lakes, ponds, cisterns, fountains, swimming pools, reservoirs,
pressure tanks, and elevated tanks.
'''
class StaticWaterSource(WaterSource):
	hasDistanceFromFDC = models.FloatField(blank=True)
	hasDistanceFromIncidentBuilding = models.FloatField(blank=True)
	hasLocation = models.TextField(blank=True)
	hasType = models.TextField(blank=True)


	def serialize(self):
		return {
			'hasDistanceFromFDC': self.hasDistanceFromFDC, 
			'hasDistanceFromIncidentBuilding': self.hasDistanceFromIncidentBuilding, 
			'hasLocation': self.hasLocation, 
			'hasType': self.hasType, 
		} 
