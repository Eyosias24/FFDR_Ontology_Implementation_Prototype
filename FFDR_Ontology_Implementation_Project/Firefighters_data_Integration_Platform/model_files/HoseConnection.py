from django.db import models

'''
The 'HoseConnection' class represents different hose connections used
by firefighters during building fire emergencies.

Type could be threaded or quick- connect.
'''
class HoseConnection(models.Model):
	hasSize = models.FloatField(blank=True)
	hasSizeUnit = models.CharField(null=True, max_length=80)
	hasType = models.CharField(max_length=80, blank=True)


	def serialize(self):
		return {
			'hasSize': self.hasSize, 
			'hasSizeUnit': self.hasSizeUnit, 
			'hasType': self.hasType, 
		} 

	def __str__(self):
		return f"{self.__class__.__name__} Hose Connection: {self.hasSize} {self.hasSizeUnit}"  
