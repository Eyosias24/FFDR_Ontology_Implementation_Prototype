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
		hasHoseConnection = models.ForeignKey(HoseConnection, on_delete=models.DO_NOTHING)
		hasWaterSource = models.ForeignKey(WaterSource, on_delete=models.DO_NOTHING)
		hasCoverageZone = models.TextField()
		hasDistanceFromWaterSource = models.FloatField()
		hasLocation = models.TextField()
		hasNumberOfInlet = models.IntegerField()


		def serialize(self):
			return {
				'hasHoseConnection': self.hasHoseConnection, 
				'hasWaterSource': self.hasWaterSource, 
				'hasCoverageZone': self.hasCoverageZone, 
				'hasDistanceFromWaterSource': self.hasDistanceFromWaterSource, 
				'hasLocation': self.hasLocation, 
				'hasNumberOfInlet': self.hasNumberOfInlet, 
			} 
