from django.db import models
from .WaterSource import WaterSource
'''
The 'MunicipalDistributionSystem' class represents a water
distribution system provided and maintained by municipalities or
similar entities.
'''
class MunicipalDistributionSystem(WaterSource):
	hasPressure = models.FloatField(blank=True)
	hasPressureUnit = models.CharField(max_length=80)


	def serialize(self):
		return {
			'hasPressure': self.hasPressure, 
			'hasPressureUnit': self.hasPressureUnit, 
		} | super().serialize()

	def __str__(self):
		return f"{self.hasName}"  
