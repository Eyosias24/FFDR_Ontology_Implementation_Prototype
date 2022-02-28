from django.db import models

'''
The 'WeatherCondition' class represents weather-related information.
'''
class WeatherCondition(models.Model):
		hasPrecipitationValue = models.FloatField()
		hasRelativeHumidity = models.FloatField()
		hasTemperature = models.FloatField()
		hasTimeMark = models.TimeField()
		hasWindDirection = models.TextField()
		hasWindSpeed = models.FloatField()


		def serialize(self):
			return {
				'hasPrecipitationValue': self.hasPrecipitationValue, 
				'hasRelativeHumidity': self.hasRelativeHumidity, 
				'hasTemperature': self.hasTemperature, 
				'hasTimeMark': self.hasTimeMark, 
				'hasWindDirection': self.hasWindDirection, 
				'hasWindSpeed': self.hasWindSpeed, 
			} 
