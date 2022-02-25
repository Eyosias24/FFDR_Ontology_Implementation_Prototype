from django.db import models
from .NonStructuralElement import NonStructuralElement

'''
The 'Window' class represents windows in a building.
'''
class Window(NonStructuralElement):
		hasHeight = models.FloatField()
		hasOpeningDirection = models.TextField()
		isFunctional = models.BooleanField()
		isOnExterior = models.BooleanField()
		isShaftway = models.BooleanField()
		hasWidth = models.FloatField()
