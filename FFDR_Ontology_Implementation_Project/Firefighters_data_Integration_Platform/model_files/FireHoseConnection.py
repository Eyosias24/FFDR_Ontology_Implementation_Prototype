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
		hasHoseConnection = models.ForeignKey(HoseConnection, on_delete=models.DO_NOTHING)
		hasWaterSource = models.ForeignKey(StandpipeSystem, on_delete=models.DO_NOTHING)
		hasLocation = models.TextField()
