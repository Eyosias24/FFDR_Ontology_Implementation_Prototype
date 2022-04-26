from django.db import models
from .BuildingSafetySystem import BuildingSafetySystem
'''
The 'SmokeandHeatRemovalSystem' class represents a smoke and heat
removal system that assists firefighters in removing smoke after a
fire is extinguished (OSHA, 2015).
'''
class SmokeandHeatRemovalSystem(BuildingSafetySystem):
	hasType = models.CharField(null=True, max_length=65)
	hasLocation = models.CharField(null=True, max_length=65)
	isSystemActivated = models.BooleanField(blank=True)


	def serialize(self):
		return {
			'hasType': self.hasType, 
			'hasLocation': self.hasLocation, 
			'isSystemActivated': self.isSystemActivated, 
		} | super().serialize()

	def __str__(self):
		return f"Smoke Control System: {self.hasLocation}"      
