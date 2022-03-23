from django.db import models
from .BuildingSafetySystem import BuildingSafetySystem
'''
The 'EmergencyPowerOutlet' class represents emergency power outlets
built into a building that can provide power to electric-operated
firefighting equipment (OSHA, 2015).
'''
class EmergencyPowerOutlet(BuildingSafetySystem):
	hasLocation = models.TextField(blank=True)
	hasType = models.TextField(blank=True)


	def serialize(self):
		return {
			'hasLocation': self.hasLocation, 
			'hasType': self.hasType, 
		} 
