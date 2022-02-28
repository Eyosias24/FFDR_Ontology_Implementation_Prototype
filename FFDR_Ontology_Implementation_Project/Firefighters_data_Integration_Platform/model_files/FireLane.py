from django.db import models
from .Road import Road

'''
The 'FireLane' class represents a fire lane, which is an access road
designated for fire apparatus (NFPA 1).
'''
class FireLane(Road):
		hasAccessBarrierType = models.TextField()
		hasAnglesOfApproach = models.FloatField()
		hasTurningRadius = models.FloatField()
		hasVerticalClearance = models.FloatField()


		def serialize(self):
			return {
				'hasAccessBarrierType': self.hasAccessBarrierType, 
				'hasAnglesOfApproach': self.hasAnglesOfApproach, 
				'hasTurningRadius': self.hasTurningRadius, 
				'hasVerticalClearance': self.hasVerticalClearance, 
			} 
