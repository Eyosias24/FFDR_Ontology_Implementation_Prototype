from django.db import models
from .BuildingComponent import BuildingComponent
'''
The 'BuildingSafetySystem' class represents components of a building
geared towards building safety.
'''
class BuildingSafetySystem(BuildingComponent):
	def serialize(self):
		return  super().serialize() 
