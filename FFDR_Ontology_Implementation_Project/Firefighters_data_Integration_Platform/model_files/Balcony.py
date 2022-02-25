from django.db import models
from .NonStructuralElement import NonStructuralElement

'''
The 'Balcony' class represents balconies that may be found in a
building.
'''
class Balcony(NonStructuralElement):
		hasCapacity = models.IntegerField()
		hasWidth = models.FloatField()
