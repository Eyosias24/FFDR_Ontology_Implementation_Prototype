from django.db import models
from .Road import Road
import itertools

'''
The 'RoadToIncident' class represents a road that leads to an incident
site.
'''
class RoadToIncident(Road):
	hasTrafficLevel = models.CharField(blank=True, max_length=80)


	def serialize(self):
		return {
			'hasTrafficLevel': self.hasTrafficLevel, 
		} 
