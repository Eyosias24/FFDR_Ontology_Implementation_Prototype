from django.db import models
from .ContactAddress import ContactAddress
'''
The 'UtilityContactAddress' class represents the address of people
that manage the utilities in a building.
'''
class UtilityContactAddress(ContactAddress):
	def serialize(self):
		return  super().serialize()  
