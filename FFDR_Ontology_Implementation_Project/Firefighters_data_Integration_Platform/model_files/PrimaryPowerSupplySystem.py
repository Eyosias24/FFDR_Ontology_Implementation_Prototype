from django.db import models
from .BuildingUtilitySystem import BuildingUtilitySystem
'''
The 'PrimaryPowerSupplySystem' class represents a building's primary
power supply system.
'''
class PrimaryPowerSupplySystem(BuildingUtilitySystem):

	def __str__(self):
		return f"Primary Power Supply System"   
