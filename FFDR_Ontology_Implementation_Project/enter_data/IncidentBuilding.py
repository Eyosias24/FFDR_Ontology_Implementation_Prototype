# IncidentBuilding

def add(request):
	hasAddress = ' '
	hasBuildingPlan = ''
	hasComponent = ''
	hasOccupancy = ''
	hasConstructionType = ''
	hasBuildingArea = ''
	hasBuildingHeight = ''
	hasCondition = ''
	includeHazardousOperation = ''
	hasNumberOfExit = ''
	hasNumberOfStory = ''
	hasNumberOfSublevel = ''
	hasOccupantLoad = ''

	incidentBuilding = IncidentBuilding(hasAddress = hasAddress,hasBuildingPlan = hasBuildingPlan,hasComponent = hasComponent,hasOccupancy = hasOccupancy,hasConstructionType = hasConstructionType,hasBuildingArea = hasBuildingArea,hasBuildingHeight = hasBuildingHeight,hasCondition = hasCondition,includeHazardousOperation = includeHazardousOperation,hasNumberOfExit = hasNumberOfExit,hasNumberOfStory = hasNumberOfStory,hasNumberOfSublevel = hasNumberOfSublevel,hasOccupantLoad = hasOccupantLoad)
	incidentBuilding.save()