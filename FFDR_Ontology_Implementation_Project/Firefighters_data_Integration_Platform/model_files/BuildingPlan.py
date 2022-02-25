from django.db import models

'''
The 'BuildingPlan' class represents building plans such as schematic
plans of the building and a fire emergency evacuation plan.
'''
class BuildingPlan(models.Model):
		hasLocation = models.TextField()
		hasType = models.TextField()
