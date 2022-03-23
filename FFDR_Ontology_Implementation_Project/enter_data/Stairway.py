# Stairway

def add(request):
	hasFireExtinguishingSystem = ''
	hasDirectionToExit = ''
	hasDischargeLevel = ''
	hasFloorsServed = ''
	isRoofAccess = ''
	hasCapacity = ''
	hasExitTravelDistances = ''
	hasWidth = ''
	isExit = ''

	stairway = Stairway(hasFireExtinguishingSystem = hasFireExtinguishingSystem,hasDirectionToExit = hasDirectionToExit,hasDischargeLevel = hasDischargeLevel,hasFloorsServed = hasFloorsServed,isRoofAccess = isRoofAccess,hasCapacity = hasCapacity,hasExitTravelDistances = hasExitTravelDistances,hasWidth = hasWidth,isExit = isExit)
	stairway.save()