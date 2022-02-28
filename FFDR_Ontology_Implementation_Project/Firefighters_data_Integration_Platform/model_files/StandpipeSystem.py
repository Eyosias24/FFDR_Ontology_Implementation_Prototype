from django.db import models
from .BuildingSafetySystem import BuildingSafetySystem

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
		# hasWaterSource = models.[Add manually!!!]()
		hasClass = models.TextField()
		hasCoverageZone = models.TextField()
		hasIsolationValveLocation = models.TextField()
		hasRequiredMaximumPressure = models.FloatField()
		hasRequiredMinimumPressure = models.FloatField()
		hasType = models.TextField()
		isIsolationValveOpen = models.BooleanField()


		def serialize(self):
			return {
				'hasWaterSource': self.hasWaterSource, 
				'hasClass': self.hasClass, 
				'hasCoverageZone': self.hasCoverageZone, 
				'hasIsolationValveLocation': self.hasIsolationValveLocation, 
				'hasRequiredMaximumPressure': self.hasRequiredMaximumPressure, 
				'hasRequiredMinimumPressure': self.hasRequiredMinimumPressure, 
				'hasType': self.hasType, 
				'isIsolationValveOpen': self.isIsolationValveOpen, 
			} 
