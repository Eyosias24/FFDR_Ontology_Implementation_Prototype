from django.db import models
from .ContactAddress import ContactAddress
'''
The 'PublicSafetyAgencyContactAddress' class represents public safety
agencies's contact address.
'''
class PublicSafetyContactAddress(ContactAddress):
	
	def __str__(self):
		return f"Utility Control Panel: {self.hasName}" 

