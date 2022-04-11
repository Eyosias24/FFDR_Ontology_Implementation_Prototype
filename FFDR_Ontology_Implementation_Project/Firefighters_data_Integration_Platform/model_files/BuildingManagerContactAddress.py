from django.db import models
from .ContactAddress import ContactAddress
'''
The 'BuildingManagerContactAddress' class represents a building
manager's contact address.
'''
class BuildingManagerContactAddress(ContactAddress):
	def serialize(self):
		return  super().serialize() 
