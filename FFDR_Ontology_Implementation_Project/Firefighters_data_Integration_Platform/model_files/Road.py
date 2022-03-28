from django.db import models
from .Material import Material
from .IncidentBuilding import IncidentBuilding
'''
Status could be: unknown, known, verified

The 'Road' class represents roads.
'''
class Road(models.Model):
	hasProjectName = models.ForeignKey(IncidentBuilding, on_delete=models.DO_NOTHING)
	hasMaterial = models.ForeignKey(Material, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasCondition = models.TextField(blank=True)
	hasSlope = models.CharField(blank=True, max_length=80)
	hasType = models.CharField(blank=True, max_length=80)
	hasWidth = models.FloatField(blank=True)
	hasWidthUnit = models.CharField(blank=True, max_length=80)


	def serialize(self):
		return {
			'hasProjectName': self.hasProjectName, 
			'hasMaterial': self.hasMaterial.serialize() if not self.hasMaterial == None else '', 
			'hasCondition': self.hasCondition, 
			'hasSlope': self.hasSlope, 
			'hasType': self.hasType, 
			'hasWidth': self.hasWidth, 
			'hasWidthUnit': self.hasWidth, 
		} 
