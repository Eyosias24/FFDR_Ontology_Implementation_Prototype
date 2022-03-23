from django.db import models

'''
The 'BuildingPlan' class represents building plans such as schematic
plans of the building and a fire emergency evacuation plan.
'''
class BuildingPlan(models.Model):
	hasLocation = models.TextField(blank=True)
	hasType = models.TextField(blank=True)


	def serialize(self):
		return {
			'hasLocation': self.hasLocation, 
			'hasType': self.hasType, 
		} 
