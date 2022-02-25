from django.db import models
from .BuildingComponent import BuildingComponent

'''
The 'Material' class represents the constituting materials of
different elements.
'''
class Material(models.Model):
		isMaterialOf = models.ForeignKey(BuildingComponent, on_delete=models.DO_NOTHING)
