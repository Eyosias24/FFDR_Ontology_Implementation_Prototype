# Elevator

def add(request):
	hasControlPanel = ''
	hasFireExtinguishingSystem = ''
	hasCapacity = ''
	hasDischargeLevel = ''
	hasFloorsServed = ''
	hasMachineRoomLocation = ''
	isFunctional = ''
	isQualifiedForEvacuation = ''
	hasExitTravelDistances = ''

	elevator = Elevator(hasControlPanel = hasControlPanel,hasFireExtinguishingSystem = hasFireExtinguishingSystem,hasCapacity = hasCapacity,hasDischargeLevel = hasDischargeLevel,hasFloorsServed = hasFloorsServed,hasMachineRoomLocation = hasMachineRoomLocation,isFunctional = isFunctional,isQualifiedForEvacuation = isQualifiedForEvacuation,hasExitTravelDistances = hasExitTravelDistances)
	elevator.save()