from django.db import models
from .BuildingUtilitySystem import BuildingUtilitySystem
'''
The 'BackUpPowerSupplySystem' class represents a building's backup
power supply system.
'''
class BackUpPowerSupplySystem(BuildingUtilitySystem):

	def __str__(self):
		return f"BackUp Power Supply System"   
	pass
