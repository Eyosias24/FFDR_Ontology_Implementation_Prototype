# Door

def add(request):
	hasControlPanel = ''
	hasOpeningDirection = ''
	isFunctional = ''
	isPrimaryFireServiceEntryPoint = ''
	isShaftway = ''
	hasExitTravelDistances = ''
	hasWidth = ''
	isExit = ''

	door = Door(hasControlPanel = hasControlPanel,hasOpeningDirection = hasOpeningDirection,isFunctional = isFunctional,isPrimaryFireServiceEntryPoint = isPrimaryFireServiceEntryPoint,isShaftway = isShaftway,hasExitTravelDistances = hasExitTravelDistances,hasWidth = hasWidth,isExit = isExit)
	door.save()