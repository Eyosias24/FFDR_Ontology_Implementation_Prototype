from django.db import models
from .FireandSmokeProtectionElement import FireandSmokeProtectionElement

'''
The 'SmokePartition' class represents a smoke partition, which is a
wall assembly that limits the transfer of smoke (IFC, 2018).
'''
class SmokePartition(FireandSmokeProtectionElement):
		hasEnclosedArea = models.TextField()


		def serialize(self):
			return {
				'hasEnclosedArea': self.hasEnclosedArea, 
			} 
