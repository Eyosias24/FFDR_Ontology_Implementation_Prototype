from django.db import models
from .BuildingSafetySystem import BuildingSafetySystem

'''
The 'SmokeandHeatRemovalSystem' class represents a smoke and heat
removal system that assists firefighters in removing smoke after a
fire is extinguished (OSHA, 2015).
'''
class SmokeandHeatRemovalSystem(BuildingSafetySystem):
		hasLocation = models.TextField()
		hasType = models.TextField()
		isSystemActivated = models.BooleanField()
