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
	hasType = models.CharField(max_length=80)
	hasPosition = models.CharField(max_length=80, blank=True)
	hasHoseConnection = models.ForeignKey(HoseConnection, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasWaterSource = models.ForeignKey(WaterSource, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasDistanceFromFDC = models.FloatField(blank=True)
	hasFireFlow = models.FloatField(blank=True)
	hasFireFlowUnit = models.CharField(max_length=80, blank=True)
	hasNumberOfOutlet = models.IntegerField(blank=True)
	isFunctional = models.BooleanField(blank=True)


	def serialize(self):
		return {
			'hasType': self.hasType,  
			'hasPosition': self.hasPosition, 
			'hasHoseConnection': self.hasHoseConnection.serialize() if not self.hasHoseConnection == None else '', 
			'hasWaterSource': self.hasWaterSource.serialize() if not self.hasWaterSource == None else '', 
			'hasDistanceFromFDC': self.hasDistanceFromFDC, 
			'hasFireFlow': self.hasFireFlow, 
			'hasNumberOfOutlet': self.hasNumberOfOutlet, 
			'isFunctional': self.isFunctional, 
		} 
