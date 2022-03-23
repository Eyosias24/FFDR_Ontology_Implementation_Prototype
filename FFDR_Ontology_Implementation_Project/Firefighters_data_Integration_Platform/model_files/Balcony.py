from django.db import models
from .NonStructuralElement import NonStructuralElement
'''
The 'Balcony' class represents balconies that may be found in a
building.
'''
class Balcony(NonStructuralElement):
	hasCapacity = models.IntegerField(blank=True)
	hasWidth = models.FloatField(blank=True)


	def serialize(self):
		return {
			'hasCapacity': self.hasCapacity, 
			'hasWidth': self.hasWidth, 
		} 
