from django.db import models
from .BuildingSafetySystem import BuildingSafetySystem
from .Material import Material
'''
The 'FireandSmokeProtectionElement' class represents fire and smoke
protection elements that can protect firefighters and building
occupants (OSHA, 2015).
'''
class FireandSmokeProtectionElement(BuildingSafetySystem):
	hasMaterial = models.ForeignKey(Material, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasLocation = models.CharField(max_length=65, blank=True)
	hasFireResistanceRating = models.FloatField(blank=True)
	hasFireResistanceRatingUnit = models.CharField(max_length=65, blank=True)


	def serialize(self):
		return {
			'hasMaterial': self.hasMaterial.serialize() if not self.hasMaterial == None else '', 
			'hasLocation': self.hasLocation, 
			'hasFireResistanceRating': self.hasFireResistanceRating, 
			'hasFireResistanceRatingUnit': self.hasFireResistanceRatingUnit, 
		} 
