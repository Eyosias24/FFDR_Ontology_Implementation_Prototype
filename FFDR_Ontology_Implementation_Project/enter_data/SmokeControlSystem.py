# SmokeControlSystem

def add(request):
	hasControlPanel = ''
	hasCoverageZone = ''
	hasType = ''
	isSystemActivated = ''

	smokeControlSystem = SmokeControlSystem(hasControlPanel = hasControlPanel,hasCoverageZone = hasCoverageZone,hasType = hasType,isSystemActivated = isSystemActivated)
	smokeControlSystem.save()