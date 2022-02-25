from django.db import models
from .BuildingComponent import BuildingComponent

from .ShaftEnclosure import ShaftEnclosure

'''
The 'VerticalOpening' class represents vertical Openings that may be
found in a building.
'''
class VerticalOpening(BuildingComponent):
		hasShaftEnclosure = models.ForeignKey(ShaftEnclosure, on_delete=models.DO_NOTHING)
		hasDescription = models.TextField()
		hasLocation = models.TextField()
