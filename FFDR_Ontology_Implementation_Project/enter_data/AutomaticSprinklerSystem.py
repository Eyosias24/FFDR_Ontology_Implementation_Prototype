# AutomaticSprinklerSystem

def add(request):
	hasWaterSource = ''
	hasRequiredMaximumPressure = ''
	hasRequiredMinimumPressure = ''
	isControlValveOn = ''

	automaticSprinklerSystem = AutomaticSprinklerSystem(hasWaterSource = hasWaterSource,hasRequiredMaximumPressure = hasRequiredMaximumPressure,hasRequiredMinimumPressure = hasRequiredMinimumPressure,isControlValveOn = isControlValveOn)
	automaticSprinklerSystem.save()