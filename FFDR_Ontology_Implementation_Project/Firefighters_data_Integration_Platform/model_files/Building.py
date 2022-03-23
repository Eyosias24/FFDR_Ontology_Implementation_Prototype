from django.db import models
from .SurroundingStructure import SurroundingStructure
'''
The 'Building' class represents buildings other than the incident
building.
'''
class Building(SurroundingStructure):
	pass
