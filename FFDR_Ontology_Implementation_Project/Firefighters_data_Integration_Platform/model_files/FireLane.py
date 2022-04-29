from django.db import models
from .Road import Road
'''
The 'FireLane' class represents a fire lane, which is an access road
designated for fire apparatus (NFPA 1).
'''
class FireLane(Road):
	hasLocation = models.CharField(blank=True, max_length=255)
	hasAccessBarrierType = models.CharField(blank=True, max_length=80)
	hasAngleOfApproach = models.FloatField(blank=True)
	hasTurningRadius = models.FloatField(blank=True)
	hasTurningRadiusUnit = models.CharField(blank=True, max_length=80)
	hasVerticalClearance = models.FloatField(blank=True)
	hasVerticalClearanceUnit = models.CharField(blank=True, max_length=80)


	def serialize(self):
		return {
			'hasLocation': self.hasLocation, 
			'hasAccessBarrierType': self.hasAccessBarrierType, 
			'hasAngleOfApproach': self.hasAngleOfApproach, 
			'hasTurningRadius': self.hasTurningRadius, 
			'hasTurningRadiusUnit': self.hasTurningRadiusUnit, 
			'hasVerticalClearance': self.hasVerticalClearance, 
			'hasVerticalClearanceUnit': self.hasVerticalClearanceUnit, 
		} | super().serialize()
