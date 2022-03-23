from django.db import models

'''
The 'WeatherCondition' class represents weather-related information.
'''
class WeatherCondition(models.Model):
	hasPrecipitationValue = models.FloatField(blank=True)
	hasRelativeHumidity = models.FloatField(blank=True)
	hasTemperature = models.FloatField(blank=True)
	hasTimeMark = models.TimeField(blank=True)
	hasWindDirection = models.TextField(blank=True)
	hasWindSpeed = models.FloatField(blank=True)
	hasWindSpeeds = models.FloatField(blank=True)


	def serialize(self):
		return {
			'hasPrecipitationValue': self.hasPrecipitationValue, 
			'hasRelativeHumidity': self.hasRelativeHumidity, 
			'hasTemperature': self.hasTemperature, 
			'hasTimeMark': self.hasTimeMark, 
			'hasWindDirection': self.hasWindDirection, 
			'hasWindSpeed': self.hasWindSpeed, 
		} 
