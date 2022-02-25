from django.db import models
from .NonStructuralElement import NonStructuralElement

'''
The 'Wall' class represents walls in a building.
'''
class Wall(NonStructuralElement):
		hasThickness = models.FloatField()
