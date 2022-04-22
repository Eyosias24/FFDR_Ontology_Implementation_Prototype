from django.db import models

'''
The 'BuildingPlan' class represents building plans such as schematic
plans of the building and a fire emergency evacuation plan.
'''

class BuildingPlan(models.Model):
	hasFloor = models.CharField(max_length=75, blank=True)
	hasType = models.CharField(max_length=75, blank=True)
	hasPlanLocation = models.CharField(max_length=255, blank=True)

 
	def serialize(self):
		return {
			'hasFloor': self.hasFloor, 
			'hasType': self.hasType, 
			'hasPlanLocation': self.hasPlanLocation, 
		} 

	def __str__(self):
		return f"Floor Plan : {self.hasFloor}"  