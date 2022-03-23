# StandpipeSystem

def add(request):
	hasWaterSource = ''
	hasClass = ''
	hasCoverageZone = ''
	hasIsolationValveLocation = ''
	hasRequiredMaximumPressure = ''
	hasRequiredMinimumPressure = ''
	hasType = ''
	isIsolationValveOpen = ''

	standpipeSystem = StandpipeSystem(hasWaterSource = hasWaterSource,hasClass = hasClass,hasCoverageZone = hasCoverageZone,hasIsolationValveLocation = hasIsolationValveLocation,hasRequiredMaximumPressure = hasRequiredMaximumPressure,hasRequiredMinimumPressure = hasRequiredMinimumPressure,hasType = hasType,isIsolationValveOpen = isIsolationValveOpen)
	standpipeSystem.save()