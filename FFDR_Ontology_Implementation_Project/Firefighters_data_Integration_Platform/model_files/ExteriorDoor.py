from django.db import models
from .Door import Door
'''
The 'ExteriorDoor' class represents doors found on the exterior of a
building.
'''
class ExteriorDoor(Door):
	def serialize(self):
		return  super().serialize() 
