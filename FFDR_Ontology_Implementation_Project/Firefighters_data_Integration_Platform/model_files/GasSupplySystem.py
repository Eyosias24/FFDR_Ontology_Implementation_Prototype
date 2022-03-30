from django.db import models
from .BuildingUtilitySystem import BuildingUtilitySystem
'''
The 'GasSupplySystem' class represents a building's gas supply system.
'''
class GasSupplySystem(BuildingUtilitySystem):

	def __str__(self):
		return f"Gas Supply System"   
