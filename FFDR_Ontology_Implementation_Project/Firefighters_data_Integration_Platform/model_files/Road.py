from django.db import models
from .Material import Material
'''
Status could be: unknown, known, verified

The 'Road' class represents roads.
'''
class Road(models.Model):
	hasMaterial = models.ForeignKey(Material, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasCondition = models.TextField(blank=True)
	hasSlope = models.FloatField(blank=True)
	hasStatus = models.TextField(blank=True)
	hasType = models.TextField(blank=True)
	hasWidth = models.FloatField(blank=True)


	def serialize(self):
		return {
			'hasMaterial': self.hasMaterial.serialize() if not self.hasMaterial == None else '', 
			'hasCondition': self.hasCondition, 
			'hasSlope': self.hasSlope, 
			'hasStatus': self.hasStatus, 
			'hasType': self.hasType, 
			'hasWidth': self.hasWidth, 
		} 
