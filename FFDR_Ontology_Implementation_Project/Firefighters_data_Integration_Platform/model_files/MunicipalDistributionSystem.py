from django.db import models
from .WaterSource import WaterSource
'''
The 'MunicipalDistributionSystem' class represents a water
distribution system provided and maintained by municipalities or
similar entities.
'''
class MunicipalDistributionSystem(WaterSource):
	hasPressure = models.FloatField(blank=True)


	def serialize(self):
		return {
			'hasPressure': self.hasPressure, 
		} 
