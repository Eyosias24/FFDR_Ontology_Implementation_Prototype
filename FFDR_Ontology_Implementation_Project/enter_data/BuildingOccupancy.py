# BuildingOccupancy

def add(request):
	hasDescription = ''
	isAbandoned = ''

	buildingOccupancy = BuildingOccupancy(hasDescription = hasDescription,isAbandoned = isAbandoned)
	buildingOccupancy.save()