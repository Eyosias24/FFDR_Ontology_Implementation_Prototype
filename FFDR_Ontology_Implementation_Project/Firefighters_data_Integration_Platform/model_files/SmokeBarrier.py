from django.db import models
from .FireandSmokeProtectionElement import FireandSmokeProtectionElement

'''
The 'SmokeBarrier' class represents a smoke barrier, which is a
continuous vertical or horizontal membrane (such as a wall, floor, or
ceiling assembly) that restricts the movement of smoke (IFC 2018).
'''
class SmokeBarrier(FireandSmokeProtectionElement):
		hasEnclosedArea = models.TextField()


		def serialize(self):
			return {
				'hasEnclosedArea': self.hasEnclosedArea, 
			} 
