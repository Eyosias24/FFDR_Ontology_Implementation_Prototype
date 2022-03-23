# BuildingPlan

def add(request):
	hasLocation = ''
	hasType = ''

	buildingPlan = BuildingPlan(hasLocation = hasLocation,hasType = hasType)
	buildingPlan.save()