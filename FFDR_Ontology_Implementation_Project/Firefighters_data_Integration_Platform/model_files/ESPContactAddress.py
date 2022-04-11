from django.db import models
from .ContactAddress import ContactAddress
'''
The 'ESP or EmergencyServiceProviderContactAddress' class represents
different emergency service provider's contact address.
'''
class ESPContactAddress(ContactAddress):
	
	def __str__(self):
		return f"Utility Control Panel: {self.hasName}" 

