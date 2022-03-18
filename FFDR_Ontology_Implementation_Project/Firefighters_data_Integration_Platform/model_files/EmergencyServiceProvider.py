from django.db import models
from .EmergencyServiceProviderContactAddress import EmergencyServiceProviderContactAddress

'''
The 'EmergencyServiceProvider' class represents emergency service
providers involved in a building fire emergency response.
'''
class EmergencyServiceProvider(models.Model):
		hasAddress = models.ForeignKey(EmergencyServiceProviderContactAddress, on_delete=models.DO_NOTHING)
		hasDistanceFromIncidentBuilding = models.FloatField()
		hasLocation = models.TextField()


		def serialize(self):
			return {
				'hasAddress': self.hasAddress, 
				'hasDistanceFromIncidentBuilding': self.hasDistanceFromIncidentBuilding, 
				'hasLocation': self.hasLocation, 
			} 
