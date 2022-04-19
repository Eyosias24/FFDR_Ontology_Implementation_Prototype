from django.db import models
from .Window import Window
'''
The 'ExteriorWindow' class represents windows found on the exterior of
a building.
'''
class ExteriorWindow(Window):
	def serialize(self):
		return super().serialize() 
