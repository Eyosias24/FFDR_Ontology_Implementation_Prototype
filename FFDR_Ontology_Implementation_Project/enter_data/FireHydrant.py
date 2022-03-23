# FireHydrant

def add(request):
	hasHoseConnection = ''
	hasWaterSource = ''
	hasDistanceFromFDC = ''
	hasFireFlow = ''
	hasNumberOfOutlet = ''
	hasType = ''
	isFunctional = ''

	fireHydrant = FireHydrant(hasHoseConnection = hasHoseConnection,hasWaterSource = hasWaterSource,hasDistanceFromFDC = hasDistanceFromFDC,hasFireFlow = hasFireFlow,hasNumberOfOutlet = hasNumberOfOutlet,hasType = hasType,isFunctional = isFunctional)
	fireHydrant.save()