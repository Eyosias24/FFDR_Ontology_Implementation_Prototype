from django.db import models
from .FireandSmokeProtectionElement import FireandSmokeProtectionElement
'''
The 'FireBarrier' class represents a fire barrier, which is a fire-
resistance-rated wall assembly of materials designed to restrict the
spread of fire in which continuity of the wall is maintained (IFC,
2018).
'''
class FireBarrier(FireandSmokeProtectionElement):
	hasOnFloor = models.CharField(max_length=65)
	
	def serialize(self):
		return {
			'hasOnFloor': self.hasOnFloor
		} | super().serialize() 

	def __str__(self):
		return f"Fire Barrier : {self.hasOnFloor}"        
