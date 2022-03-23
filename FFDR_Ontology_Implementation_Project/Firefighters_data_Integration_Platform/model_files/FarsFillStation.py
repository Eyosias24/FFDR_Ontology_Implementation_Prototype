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
	hasFillPressure = models.FloatField(blank=True)
	hasFillTime = models.FloatField(blank=True)
	hasLocation = models.TextField(blank=True)
	hasNumberOfSimultaneousFill = models.IntegerField(blank=True)


	def serialize(self):
		return {
			'hasControlPanel': self.hasControlPanel.serialize() if not self.hasControlPanel == None else '', 
			'hasFillPressure': self.hasFillPressure, 
			'hasFillTime': self.hasFillTime, 
			'hasLocation': self.hasLocation, 
			'hasNumberOfSimultaneousFill': self.hasNumberOfSimultaneousFill, 
		} 
