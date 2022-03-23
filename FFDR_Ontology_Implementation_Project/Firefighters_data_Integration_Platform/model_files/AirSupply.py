from django.db import models

'''
Air supply type: Fire department connection panel (FDCP) or fixed air
storage system

The 'AirSupply' class represents an air supply system used to fill
firefighters' breathing apparatus cylinders.
'''
class AirSupply(models.Model):
	hasLocation = models.TextField(blank=True)
	hasType = models.TextField(blank=True)


	def serialize(self):
		return {
			'hasLocation': self.hasLocation, 
			'hasType': self.hasType, 
		} 
