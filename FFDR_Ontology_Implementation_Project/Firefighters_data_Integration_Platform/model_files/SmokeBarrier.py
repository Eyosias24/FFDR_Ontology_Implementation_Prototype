from django.db import models
from .FireandSmokeProtectionElement import FireandSmokeProtectionElement
'''
The 'SmokeBarrier' class represents a smoke barrier, which is a
continuous vertical or horizontal membrane (such as a wall, floor, or
ceiling assembly) that restricts the movement of smoke (IFC 2018).
'''
class SmokeBarrier(FireandSmokeProtectionElement):	
	hasOnFloor = models.CharField(null=True, max_length=65)
	
	def serialize(self):
		return {
			'hasOnFloor': self.hasOnFloor
		} | super().serialize()  

	def __str__(self):
		return f"Smoke Barrier : {self.hasOnFloor}"      
