from django.db import models
from .BuildingComponent import BuildingComponent

from .AutomaticFireExtinguishingSystem import AutomaticFireExtinguishingSystem

'''
The 'ConcealedSpace' class represents concealed spaces that may be
found in a building.
'''
class ConcealedSpace(BuildingComponent):
		hasFireExtinguishingSystem = models.ForeignKey(AutomaticFireExtinguishingSystem, on_delete=models.DO_NOTHING)
		hasDescription = models.TextField()
		hasLocation = models.TextField()
