from django.db import models
from .Facade import Facade

'''
The 'Firewall' class represents a firewall, which is a fire-
resistance-rated wall that restricts the spread of fire while
protecting openings and extending continuously from the foundation to
or through the roof. It has sufficient structural stability under fire
conditions to allow the structure to collapse without the collapse of
the wall (IFC, 2018).
'''
class Firewall(Facade):
		hasEnclosedArea = models.TextField()


		def serialize(self):
			return {
				'hasEnclosedArea': self.hasEnclosedArea, 
			} 
