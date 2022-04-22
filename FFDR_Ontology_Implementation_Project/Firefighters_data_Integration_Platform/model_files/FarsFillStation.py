from django.db import models
from .BuildingSafetySystem import BuildingSafetySystem
from .FarsControlPanel import FarsControlPanel
'''
The 'FarsFillStation' class represents firefighter air replenishment
system (FARS) filling stations or panels that allow firefighters to
replenish their breathing apparatus cylinders (OSHA, 2015).
'''
class FarsFillStation(BuildingSafetySystem):
	hasControlPanel = models.ForeignKey(FarsControlPanel, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasOnFloor = models.CharField(blank=True, max_length=65)
	hasFillPressure = models.FloatField(blank=True)
	hasFillPressureUnit = models.CharField(blank=True, max_length=65)
	hasFillTime = models.FloatField(blank=True)
	hasFillTimeUnit = models.CharField(blank=True, max_length=65)
	hasLocation = models.TextField(blank=True)
	hasNumberOfSimultaneousFill = models.IntegerField(blank=True)


	def serialize(self):
		return {
			'hasControlPanel': self.hasControlPanel.serialize() if not self.hasControlPanel == None else '', 
			'hasOnFloor': self.hasOnFloor, 
			'hasFillPressure': self.hasFillPressure, 
			'hasFillPressureUnit': self.hasFillPressureUnit, 
			'hasFillTime': self.hasFillTime, 
			'hasFillTimeUnit': self.hasFillTimeUnit, 
			'hasLocation': self.hasLocation, 
			'hasNumberOfSimultaneousFill': self.hasNumberOfSimultaneousFill, 
		} | super().serialize()

	def __str__(self):
		return f"FARS Fill Station: On {self.hasOnFloor}"  
