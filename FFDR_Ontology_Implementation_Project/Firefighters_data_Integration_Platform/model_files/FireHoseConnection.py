from django.db import models
from .BuildingSafetySystem import BuildingSafetySystem
from .HoseConnection import HoseConnection
from .StandpipeSystem import StandpipeSystem
'''
The 'FireHoseConnection' class represents fire hose connections which
are outlets of a standpipe system where firefighters connect their
fire hose (NFPA 14).
'''
class FireHoseConnection(BuildingSafetySystem):
	hasHoseConnection = models.ForeignKey(HoseConnection, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasWaterSource = models.ForeignKey(StandpipeSystem, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasLocation = models.TextField(blank=True)
	hasFloorsServed = models.CharField(max_length=65)

 
	def serialize(self):
		return {
			'hasHoseConnection': self.hasHoseConnection.serialize() if not self.hasHoseConnection == None else '', 
			'hasWaterSource': self.hasWaterSource.serialize() if not self.hasWaterSource == None else '', 
			'hasLocation': self.hasLocation,
			'hasFloorsServed': self.hasFloorsServed,  
		} | super().serialize() 

	def __str__(self):
		return f"Fire Hose Connection: {self.hasFloorsServed}"  
