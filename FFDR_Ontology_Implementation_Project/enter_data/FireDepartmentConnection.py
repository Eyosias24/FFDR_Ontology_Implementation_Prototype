# FireDepartmentConnection

def add(request):
	hasHoseConnection = ''
	hasWaterSource = ''
	hasCoverageZone = ''
	hasDistanceFromWaterSource = ''
	hasLocation = ''
	hasNumberOfInlet = ''

	fireDepartmentConnection = FireDepartmentConnection(hasHoseConnection = hasHoseConnection,hasWaterSource = hasWaterSource,hasCoverageZone = hasCoverageZone,hasDistanceFromWaterSource = hasDistanceFromWaterSource,hasLocation = hasLocation,hasNumberOfInlet = hasNumberOfInlet)
	fireDepartmentConnection.save()