from django.db import models
from .Road import Road
'''
The 'FireLane' class represents a fire lane, which is an access road
designated for fire apparatus (NFPA 1).
'''
class FireLane(Road):
	hasAccessBarrierType = models.TextField(blank=True)
	hasAnglesOfApproach = models.FloatField(blank=True)
	hasTurningRadius = models.FloatField(blank=True)
	hasVerticalClearance = models.FloatField(blank=True)


	def serialize(self):
		return {
			'hasAccessBarrierType': self.hasAccessBarrierType, 
			'hasAnglesOfApproach': self.hasAnglesOfApproach, 
			'hasTurningRadius': self.hasTurningRadius, 
			'hasVerticalClearance': self.hasVerticalClearance, 
		} 
