from django.db import models
from .IncidentBuilding import IncidentBuilding

'''
The 'Address' class represents different types of addresses needed
during a building fire emergency.
'''
class ContactAddress(models.Model):
	hasProjectName = models.ForeignKey(IncidentBuilding,null=True, on_delete=models.DO_NOTHING)
	hasName = models.CharField(blank=True, max_length=80)
	hasTelephoneNumber = models.CharField(blank=True, max_length=80)
	hasMobileNumber = models.CharField(blank=True, max_length=15)
	hasEmail = models.TextField(blank=True)
	hasPhysicalAddress = models.CharField(max_length=255, blank=True)


	def serialize(self):
		return {
			'hasProjectName': self.hasProjectName.serialize() if not self.hasProjectName == None else '',   
			'hasName': self.hasName,
			'hasTelephoneNumber': self.hasTelephoneNumber,  
			'hasMobileNumber': self.hasMobileNumber,  
			'hasEmail': self.hasEmail, 
			'hasPhysicalAddress': self.hasPhysicalAddress 
		} 

	def __str__(self):
		return  self.hasName + " Address" 
