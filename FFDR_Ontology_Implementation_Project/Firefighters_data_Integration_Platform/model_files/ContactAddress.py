from django.db import models
from .IncidentBuilding import IncidentBuilding

'''
The 'Address' class represents different types of addresses needed
during a building fire emergency.
'''
class ContactAddress(models.Model):
	hasProjectName = models.ForeignKey(IncidentBuilding, on_delete=models.DO_NOTHING)
	hasName = models.CharField(blank=True, max_length=80)
	hasTelephoneNumber = models.CharField(blank=True, max_length=80)
	hasMobileNumber = models.CharField(blank=True, max_length=15)
	hasEmail = models.TextField(blank=True)
	hasPhysicalAddress = models.TextField(blank=True)


	def serialize(self):
		return {
			'hasProjectName': self.hasProjectName,
			'hasName': self.hasName,
			'hasTelephoneNumber': self.hasTelephoneNumber,  
			'hasMobileNumber': self.hasMobileNumber,  
			'hasEmail': self.hasEmail, 
			'hasPhysicalAddress': self.hasPhysicalAddress 
		} 
