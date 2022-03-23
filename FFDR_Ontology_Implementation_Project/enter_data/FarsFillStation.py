# FarsFillStation

def add(request):
	hasControlPanel = ''
	hasFillPressure = ''
	hasFillTime = ''
	hasLocation = ''
	hasNumberOfSimultaneousFill = ''

	farsFillStation = FarsFillStation(hasControlPanel = hasControlPanel,hasFillPressure = hasFillPressure,hasFillTime = hasFillTime,hasLocation = hasLocation,hasNumberOfSimultaneousFill = hasNumberOfSimultaneousFill)
	farsFillStation.save()