# StaticWaterSource

def add(request):
	hasDistanceFromFDC = ''
	hasDistanceFromIncidentBuilding = ''
	hasLocation = ''
	hasType = ''

	staticWaterSource = StaticWaterSource(hasDistanceFromFDC = hasDistanceFromFDC,hasDistanceFromIncidentBuilding = hasDistanceFromIncidentBuilding,hasLocation = hasLocation,hasType = hasType)
	staticWaterSource.save()