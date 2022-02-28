from django.db import models
from .SurroundingStructure import SurroundingStructure

'''
The 'Obstruction' class represents structures nearby the building,
such as fences that can obstruct firefighters' and fire trucks'
movement.
'''
class Obstruction(SurroundingStructure):
		hasDescription = models.TextField()
		hasType = models.TextField()


		def serialize(self):
			return {
				'hasDescription': self.hasDescription, 
				'hasType': self.hasType, 
			} 
