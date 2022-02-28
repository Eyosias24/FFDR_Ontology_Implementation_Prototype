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


		def serialize(self):
			return {
				'hasHeight': self.hasHeight, 
				'hasOpeningDirection': self.hasOpeningDirection, 
				'isFunctional': self.isFunctional, 
				'isOnExterior': self.isOnExterior, 
				'isShaftway': self.isShaftway, 
				'hasWidth': self.hasWidth, 
			} 
