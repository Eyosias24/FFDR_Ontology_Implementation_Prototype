from django.db import models
from .BuildingSafetySystem import BuildingSafetySystem
'''
The 'FirePump' class represents fire pumps which are used to boost the
water pressure to standpipes and sprinkler systems (OSHA, 2015).
'''
class FirePump(BuildingSafetySystem):
	hasLocation = models.TextField(blank=True)


	def serialize(self):
		return {
			'hasLocation': self.hasLocation, 
		} 
