from django.db import models
from .Wall import Wall
'''
The 'ExteriorWall' class represents walls found on the exterior of a
building.
'''
class ExteriorWall(Wall):
	def serialize(self):
		return super().serialize() 
