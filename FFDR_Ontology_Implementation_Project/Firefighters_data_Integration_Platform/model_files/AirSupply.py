from django.db import models

'''
Air supply type: Fire department connection panel (FDCP) or fixed air
storage system

The 'AirSupply' class represents an air supply system used to fill
firefighters' breathing apparatus cylinders.
'''
class AirSupply(models.Model):
		hasLocation = models.TextField()
		hasType = models.TextField()
