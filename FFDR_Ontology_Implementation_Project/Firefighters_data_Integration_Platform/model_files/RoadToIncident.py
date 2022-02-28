from django.db import models
from .Road import Road

'''
The 'RoadToIncident' class represents a road that leads to an incident
site.
'''
class RoadToIncident(Road):
		hasTrafficLevel = models.TextField()


		def serialize(self):
			return {
				'hasTrafficLevel': self.hasTrafficLevel, 
			} 
