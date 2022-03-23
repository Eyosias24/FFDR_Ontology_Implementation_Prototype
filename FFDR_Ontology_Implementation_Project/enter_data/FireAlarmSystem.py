# FireAlarmSystem

def add(request):
	hasControlPanel = ''
	hasCoverageZone = ''
	hasTypeOfSignalInitiator = ''
	isSystemActivated = ''

	fireAlarmSystem = FireAlarmSystem(hasControlPanel = hasControlPanel,hasCoverageZone = hasCoverageZone,hasTypeOfSignalInitiator = hasTypeOfSignalInitiator,isSystemActivated = isSystemActivated)
	fireAlarmSystem.save()