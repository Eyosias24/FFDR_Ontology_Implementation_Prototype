from django.db import models
from .BuildingComponent import BuildingComponent
'''
The 'Facade' class represents the facade of a building.
'''
class Facade(BuildingComponent):
	def serialize(self):
		return  super().serialize() 
 