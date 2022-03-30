from django.db import models


class Floor(models.Model):
	hasName = models.TextField(blank=True)


	def serialize(self):
		return {
			'hasName': self.hasName, 
		} 
