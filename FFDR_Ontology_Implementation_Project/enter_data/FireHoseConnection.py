# FireHoseConnection

def add(request):
	hasHoseConnection = ''
	hasWaterSource = ''
	hasLocation = ''

	fireHoseConnection = FireHoseConnection(hasHoseConnection = hasHoseConnection,hasWaterSource = hasWaterSource,hasLocation = hasLocation)
	fireHoseConnection.save()