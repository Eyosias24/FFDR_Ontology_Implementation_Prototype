# WeatherCondition

def add(request):
	hasPrecipitationValue = ''
	hasRelativeHumidity = ''
	hasTemperature = ''
	hasTimeMark = ''
	hasWindDirection = ''
	hasWindSpeed = ''

	weatherCondition = WeatherCondition(hasPrecipitationValue = hasPrecipitationValue,hasRelativeHumidity = hasRelativeHumidity,hasTemperature = hasTemperature,hasTimeMark = hasTimeMark,hasWindDirection = hasWindDirection,hasWindSpeed = hasWindSpeed)
	weatherCondition.save()