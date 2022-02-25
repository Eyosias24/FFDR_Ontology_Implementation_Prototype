from django.db import models
from .BuildingSafetySystem import BuildingSafetySystem

from .Material import Material

'''
The 'FireandSmokeProtectionElement' class represents fire and smoke
protection elements that can protect firefighters and building
occupants (OSHA, 2015).
'''
class FireandSmokeProtectionElement(BuildingSafetySystem):
		hasMaterial = models.ForeignKey(Material, on_delete=models.DO_NOTHING)
		hasLocation = models.TextField()
		hasFireResistanceRating = models.FloatField()
