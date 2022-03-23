from django.db import models
from .BuildingSafetySystem import BuildingSafetySystem
'''
Has different type such as:   Air-Water;  Air-Foam;  Wet Chemical;
Dry Chemical Powder; Carbon Dioxide and Vaporising Liquid.

The 'PortableFireExtinguisher' class represents portable fire
extinguishers placed throughout a building.
'''
class PortableFireExtinguisher(BuildingSafetySystem):
	hasFireExtinguisherRating = models.TextField(blank=True)
	hasLocation = models.TextField(blank=True)
	hasType = models.TextField(blank=True)


	def serialize(self):
		return {
			'hasFireExtinguisherRating': self.hasFireExtinguisherRating, 
			'hasLocation': self.hasLocation, 
			'hasType': self.hasType, 
		} 
