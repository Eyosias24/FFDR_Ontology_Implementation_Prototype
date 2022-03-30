from django.db import models
from .SensorDetector import SensorDetector
'''
The 'GasDetector' class represents different gas detectors installed
in a building.
'''
class GasDetector(SensorDetector):

	def __str__(self):
		return f"Gas Detector : {self.hasOnFloor} - {self.hasName}"  
