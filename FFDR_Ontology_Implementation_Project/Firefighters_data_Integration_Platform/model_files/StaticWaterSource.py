from django.db import models
from .WaterSource import WaterSource

'''
The 'StaticWaterSource' class represents static water sources that can
be used for fire suppression.

Type: Lakes, ponds, cisterns, fountains, swimming pools, reservoirs,
pressure tanks, and elevated tanks.
'''
class StaticWaterSource(WaterSource):
		hasDistanceFromFDC = models.FloatField()
		hasDistanceFromIncidentBuilding = models.FloatField()
		hasLocation = models.TextField()
		hasType = models.TextField()
