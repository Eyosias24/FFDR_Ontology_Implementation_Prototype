from django.db import models
from .BuildingUtilitySystem import BuildingUtilitySystem
'''
The 'WaterSupplyandSewerageSystem' class represents a building's water
supply and sewerage system.
'''
class WaterSupplyandSewerageSystem(BuildingUtilitySystem):

	def __str__(self):
		return f"Water Supply and Sewerage System"   
