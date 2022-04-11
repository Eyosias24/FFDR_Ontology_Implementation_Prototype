from django.db import models
from .BuildingSafetySystem import BuildingSafetySystem
from .HoseConnection import HoseConnection
from .WaterSource import WaterSource
'''
The 'FireDepartmentConnection' class represents fire department
connections (FDC) through which firefighters pump water into a
standpipe system (NFPA 14).
'''
class FireDepartmentConnection(BuildingSafetySystem):
	hasHoseConnection = models.ForeignKey(HoseConnection, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasWaterSource = models.ForeignKey(WaterSource, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasCoverageZone = models.TextField(blank=True)
	hasDistanceFromWaterSource = models.FloatField(blank=True)
	hasLocation = models.TextField(blank=True)
	hasNumberOfInlet = models.IntegerField(blank=True)
	isFunctional = models.BooleanField(blank=True)


	def serialize(self):
		return {
			'hasHoseConnection': self.hasHoseConnection.serialize() if not self.hasHoseConnection == None else '', 
			'hasWaterSource': self.hasWaterSource.serialize() if not self.hasWaterSource == None else '', 
			'hasCoverageZone': self.hasCoverageZone, 
			'hasDistanceFromWaterSource': self.hasDistanceFromWaterSource, 
			'hasLocation': self.hasLocation, 
			'hasNumberOfInlet': self.hasNumberOfInlet, 
			'isFunctional': self.isFunctional, 
		} | super().serialize() 
