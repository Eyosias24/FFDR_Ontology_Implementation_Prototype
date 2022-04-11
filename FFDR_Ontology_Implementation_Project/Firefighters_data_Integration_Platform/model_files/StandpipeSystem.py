from opcode import hasname
from django.db import models
from .BuildingSafetySystem import BuildingSafetySystem
from .WaterSource import WaterSource
'''
Properties:  has water source: Automatic water supply, manual supply
through FDC, Or both  has Class: fire service use (Class I), occupant
use (Class II), or combined fire service and occupant use (Class III)
has type: Wet (automatic or manual) and Dry

The 'StandpipeSystem' class represents a standpipe system which is a
system of pipes within a building that provides water to fire hose
connections and, in some cases, to sprinkler systems (NFPA 14).
'''
class StandpipeSystem(BuildingSafetySystem):
	hasName = models.CharField(max_length=65, blank=True)
	hasWaterSource = models.ForeignKey(WaterSource, on_delete=models.DO_NOTHING, blank=True, null=True)	
	hasClass = models.CharField(max_length=65, blank=True)
	hasCoverageZone = models.TextField(blank=True)
	hasIsolationValveLocation = models.TextField(blank=True)
	hasRequiredMaximumPressure = models.FloatField(blank=True)
	hasRequiredMinimumPressure = models.FloatField(blank=True)
	hasPressureUnit = models.CharField(max_length=65, blank=True)
	hasType = models.CharField(max_length=65, blank=True)
	hasIsolationValveLocation = models.CharField(max_length=65, blank=True)
	isIsolationValveOpen = models.BooleanField(blank=True)

 
	def serialize(self):
		return {
			'hasName': self.hasName, 
			'hasWaterSource': self.hasWaterSource.serialize() if not self.hasWaterSource == None else '', 
			'hasClass': self.hasClass, 
			'hasCoverageZone': self.hasCoverageZone, 
			'hasIsolationValveLocation': self.hasIsolationValveLocation, 
			'hasRequiredMaximumPressure': self.hasRequiredMaximumPressure, 
			'hasRequiredMinimumPressure': self.hasRequiredMinimumPressure, 
			'hasPressureUnit': self.hasPressureUnit, 
			'hasType': self.hasType, 
			'hasIsolationValveLocation': self.hasIsolationValveLocation, 
			'isIsolationValveOpen': self.isIsolationValveOpen, 
		} | super().serialize() 

	def __str__(self):
		return f"Standpipe System : {self.hasName}"   
