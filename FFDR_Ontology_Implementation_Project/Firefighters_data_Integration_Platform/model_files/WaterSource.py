from django.db import models

'''
The 'WaterSource' class represents different water sources that can be
used for fire suppression.
'''
class WaterSource(models.Model):
	hasFireFlow = models.FloatField(blank=True)
	isFunctional = models.BooleanField(blank=True)


	def serialize(self):
		return {
			'hasFireFlow': self.hasFireFlow, 
			'isFunctional': self.isFunctional, 
		} 
