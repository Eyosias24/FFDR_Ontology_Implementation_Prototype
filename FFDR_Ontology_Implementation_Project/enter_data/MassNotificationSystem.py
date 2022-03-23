# MassNotificationSystem

def add(request):
	hasControlPanel = ''
	hasCoverageZone = ''
	hasType = ''

	massNotificationSystem = MassNotificationSystem(hasControlPanel = hasControlPanel,hasCoverageZone = hasCoverageZone,hasType = hasType)
	massNotificationSystem.save()