from django.db import models
from .SurroundingStructure import SurroundingStructure
'''
The 'Obstruction' class represents structures nearby the building,
such as fences that can obstruct firefighters' and fire trucks'
movement.
'''
class Obstruction(SurroundingStructure):
	hasType = models.TextField(max_length=80)
	hasDescription = models.TextField(blank=True)


	def serialize(self):
		return {
			'hasType': self.hasType, 
			'hasDescription': self.hasDescription,  
		}  | super().serialize()

	def __str__(self):
		return f"Obstruction: {self.hasName} " 
