from django.db import models
from .BuildingSafetySystem import BuildingSafetySystem
'''
The 'SmokeandHeatRemovalSystem' class represents a smoke and heat
removal system that assists firefighters in removing smoke after a
fire is extinguished (OSHA, 2015).
'''
class SmokeandHeatRemovalSystem(BuildingSafetySystem):
	hasLocation = models.TextField(blank=True)
	hasType = models.TextField(blank=True)
	isSystemActivated = models.BooleanField(blank=True)


	def serialize(self):
		return {
			'hasLocation': self.hasLocation, 
			'hasType': self.hasType, 
			'isSystemActivated': self.isSystemActivated, 
		} 
