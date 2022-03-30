from django.db import models
from .BuildingSafetySystem import BuildingSafetySystem
'''
Has different type such as:   Air-Water;  Air-Foam;  Wet Chemical;
Dry Chemical Powder; Carbon Dioxide and Vaporising Liquid.

The 'PortableFireExtinguisher' class represents portable fire
extinguishers placed throughout a building.
'''
class PortableFireExtinguisher(BuildingSafetySystem):
	hasType = models.CharField(max_length=65, blank=True)
	hasFireExtinguisherRating = models.CharField(max_length=65, blank=True)
	hasLocation = models.CharField(max_length=65, blank=True)


	def serialize(self):
		return {
			'hasFireExtinguisherRating': self.hasFireExtinguisherRating, 
			'hasLocation': self.hasLocation, 
			'hasType': self.hasType, 
		}

	def __str__(self):
		return f"Portable Fire Extinguisher: {self.hasLocation}"     
