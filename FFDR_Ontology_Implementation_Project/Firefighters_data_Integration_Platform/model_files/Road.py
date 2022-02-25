from django.db import models
from .Material import Material

'''
Status could be: unknown, known, verified

The 'Road' class represents roads.
'''
class Road(models.Model):
		hasMaterial = models.ForeignKey(Material, on_delete=models.DO_NOTHING)
		hasCondition = models.TextField()
		hasSlope = models.FloatField()
		hasStatus = models.TextField()
		hasType = models.TextField()
		hasWidth = models.FloatField()
