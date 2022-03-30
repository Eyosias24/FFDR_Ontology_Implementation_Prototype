from django.db import models
from .SensorDetector import SensorDetector
'''
The 'CarbonMonoxideDetector' class represents Carbon Monoxide
detectors installed in a building.
'''
class CarbonMonoxideDetector(SensorDetector):	

	def __str__(self):
		return f"Carbon Monoxide Detector : {self.hasOnFloor} - {self.hasName}"   
