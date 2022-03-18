from django.db import models

'''
The 'ControlPanel' class represents different control panels used to
control several building systems and utilities.
'''
class ControlPanel(models.Model):
		hasDescription = models.TextField()
		hasLocation = models.TextField()


		def serialize(self):
			return {
				'hasDescription': self.hasDescription, 
				'hasLocation': self.hasLocation, 
			} 
