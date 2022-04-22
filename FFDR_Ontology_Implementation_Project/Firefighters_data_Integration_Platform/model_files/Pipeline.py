from django.db import models
from .SurroundingStructure import SurroundingStructure
'''
The 'Pipeline' class represents pipelines located near an incident
building.
'''
class Pipeline(SurroundingStructure):
	def serialize(self):
		return super().serialize()
