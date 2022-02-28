from django.db import models
from .SurroundingStructure import SurroundingStructure

from .HoseConnection import HoseConnection

from .WaterSource import WaterSource

'''
The 'FireHydrant' class represents fire hydrants, which are an
important part of a fire suppression operation that provides
firefighters with a hose connection to a water supply system (NFPA
24).

Type: Wet barrel hydrants (on pressurized water distribution systems),
Dry barrel hydrants (used on static water supply sources)
'''
class FireHydrant(SurroundingStructure):
		hasHoseConnection = models.ForeignKey(HoseConnection, on_delete=models.DO_NOTHING)
		hasWaterSource = models.ForeignKey(WaterSource, on_delete=models.DO_NOTHING)
		hasDistanceFromFDC = models.FloatField()
		hasFireFlow = models.FloatField()
		hasNumberOfOutlet = models.IntegerField()
		hasType = models.TextField()
		isFunctional = models.BooleanField()


		def serialize(self):
			return {
				'hasHoseConnection': self.hasHoseConnection, 
				'hasWaterSource': self.hasWaterSource, 
				'hasDistanceFromFDC': self.hasDistanceFromFDC, 
				'hasFireFlow': self.hasFireFlow, 
				'hasNumberOfOutlet': self.hasNumberOfOutlet, 
				'hasType': self.hasType, 
				'isFunctional': self.isFunctional, 
			} 
