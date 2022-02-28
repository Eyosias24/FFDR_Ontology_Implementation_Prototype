from django.db import models
from .FireandSmokeProtectionElement import FireandSmokeProtectionElement

'''
The 'FirePartition' class represents a fire partition, which is a
vertical assembly of materials designed to restrict the spread of fire
while protecting openings (IFC, 2018).
'''
class FirePartition(FireandSmokeProtectionElement):
		hasEnclosedArea = models.TextField()


		def serialize(self):
			return {
				'hasEnclosedArea': self.hasEnclosedArea, 
			} 
