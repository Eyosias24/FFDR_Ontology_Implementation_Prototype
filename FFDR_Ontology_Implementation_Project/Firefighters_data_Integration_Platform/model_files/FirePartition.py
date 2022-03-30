from django.db import models
from .FireandSmokeProtectionElement import FireandSmokeProtectionElement
'''
The 'FirePartition' class represents a fire partition, which is a
vertical assembly of materials designed to restrict the spread of fire
while protecting openings (IFC, 2018).
'''
class FirePartition(FireandSmokeProtectionElement):
	hasOnFloor = models.CharField(max_length=65)
	
	def serialize(self):
		return {
			'hasOnFloor': self.hasOnFloor
		}

	def __str__(self):
		return f"Fire Partition : {self.hasOnFloor}"  
