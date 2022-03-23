# Ramp

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

	ramp = Ramp(hasFireExtinguishingSystem = hasFireExtinguishingSystem,hasDirectionToExit = hasDirectionToExit,hasDischargeLevel = hasDischargeLevel,hasFloorsServed = hasFloorsServed,isRoofAccess = isRoofAccess,hasCapacity = hasCapacity,hasExitTravelDistances = hasExitTravelDistances,hasWidth = hasWidth,isExit = isExit)
	ramp.save()