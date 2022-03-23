from django.db import models
from .EmergencyServiceProviderContactAddress import EmergencyServiceProviderContactAddress
'''
The 'EmergencyServiceProvider' class represents emergency service
providers involved in a building fire emergency response.
'''
class EmergencyServiceProvider(models.Model):
	hasAddress = models.ForeignKey(EmergencyServiceProviderContactAddress, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasDistanceFromIncidentBuilding = models.FloatField(blank=True)
	hasLocation = models.TextField(blank=True)


	def serialize(self):
		return {
			'hasAddress': self.hasAddress.serialize() if not self.hasAddress == None else '', 
			'hasDistanceFromIncidentBuilding': self.hasDistanceFromIncidentBuilding, 
			'hasLocation': self.hasLocation, 
		} 
