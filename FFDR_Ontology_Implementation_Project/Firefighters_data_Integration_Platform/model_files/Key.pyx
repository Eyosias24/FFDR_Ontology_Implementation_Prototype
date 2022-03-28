from django.db import models
'''
The 'Key' class represents keys and key cards
 to the building doors, elevators, and other 
 equipment. (OSHA, 2015).
'''
class Key(models.Model):
	hasKeyFor = models.CharField(max_length=255)


	def serialize(self):
		return {
			'hasKeyFor': self.hasKeyFor, 
		} 
	def __str__(self):
		return  f"Key for: {self.hasKeyFor}"  
