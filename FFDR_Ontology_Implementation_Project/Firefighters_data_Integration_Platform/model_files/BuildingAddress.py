from django.db import models
from .Address import Address

'''
The 'BuildingAddress' class represents a building's address.
'''
class BuildingAddress(Address):
	hasStreetAddress = models.TextField(null=True)
	hasPostalCode = models.IntegerField(null=True)
	hasCity = models.TextField(null=True)


	def serialize(self):
		return {
			'hasStreetAddress': self.hasStreetAddress, 
			'hasPostalCode': self.hasPostalCode, 
			'hasCity': self.hasCity, 
		} 

	def __str__(self):
		return f"{self.hasStreetAddress}, {self.hasPostalCode} {self.hasCity}"

