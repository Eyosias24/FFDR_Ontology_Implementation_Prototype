from django.db import models
from .FireandSmokeProtectionElement import FireandSmokeProtectionElement
'''
The 'SmokePartition' class represents a smoke partition, which is a
wall assembly that limits the transfer of smoke (IFC, 2018).
'''
class SmokePartition(FireandSmokeProtectionElement):
	hasOnFloor = models.CharField(null=True, max_length=65)
	
	def serialize(self):
		return {
			'hasOnFloor': self.hasOnFloor
		} | super().serialize()  

	def __str__(self):
		return f"Smoke Barrier : {self.hasOnFloor}"   
