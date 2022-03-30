from django.db import models
from .SensorDetector import SensorDetector
'''
The 'CbrSensor' class represents Chemical/Biological/Radiation (CBR)
sensors installed in a building.
'''
class CbrSensor(SensorDetector):

	def __str__(self):
		return f"CBR Sensor : {self.hasOnFloor} - {self.hasName}"   
