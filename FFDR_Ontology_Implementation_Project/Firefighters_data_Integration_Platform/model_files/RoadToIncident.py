from django.db import models
from .Road import Road
import itertools

'''
The 'RoadToIncident' class represents a road that leads to an incident
site.
'''
class RoadToIncident(Road):
	hasTrafficLevel = models.CharField(blank=True, max_length=80)
	hasDistance = models.FloatField(blank=True, max_length=80)
	hasDistanceUnit = models.CharField(blank=True, max_length=80)
	hasDuration = models.FloatField(blank=True, max_length=80)
	hasDurationUnit = models.CharField(blank=True, max_length=80)


	def serialize(self):
		return {
			'hasTrafficLevel': self.hasTrafficLevel, 
			'hasDistance': self.hasDistance, 
			'hasDistanceUnit': self.hasDistanceUnit, 
			'hasDuration': self.hasDuration, 
			'hasDurationUnit': self.hasDurationUnit, 
		} | super().serialize()
