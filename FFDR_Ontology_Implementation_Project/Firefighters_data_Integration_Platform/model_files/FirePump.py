from django.db import models
from .BuildingSafetySystem import BuildingSafetySystem
'''
The 'FirePump' class represents fire pumps which are used to boost the
water pressure to standpipes and sprinkler systems (OSHA, 2015).
'''
class FirePump(BuildingSafetySystem):
	hasLocation = models.CharField(max_length=65, blank=True)


	def serialize(self):
		return {
			'hasLocation': self.hasLocation, 
		} | super().serialize()

	def __str__(self):
		return f"Fire Pump: {self.hasLocation}"   
