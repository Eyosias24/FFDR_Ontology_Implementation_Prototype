from django.db import models
from .NonStructuralElement import NonStructuralElement

'''
The 'Hallway' class represents hallways in a building.
'''
class Hallway(NonStructuralElement):
		hasCapacity = models.IntegerField()
		hasWidth = models.FloatField()
