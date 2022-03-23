from django.db import models

'''
The 'ControlPanel' class represents different control panels used to
control several building systems and utilities.
'''
class ControlPanel(models.Model):
	hasDescription = models.TextField(blank=True)
	hasLocation = models.TextField(blank=True)


	def serialize(self):
		return {
			'hasDescription': self.hasDescription, 
			'hasLocation': self.hasLocation, 
		} 
