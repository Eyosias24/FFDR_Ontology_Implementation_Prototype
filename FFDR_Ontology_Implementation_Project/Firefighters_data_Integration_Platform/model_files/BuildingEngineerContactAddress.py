from django.db import models
from .ContactAddress import ContactAddress
'''
The 'BuildingEngineerContactAddress' class represents a building
engineer's contact address.
'''
class BuildingEngineerContactAddress(ContactAddress):
	def serialize(self):
		return  super().serialize() 


