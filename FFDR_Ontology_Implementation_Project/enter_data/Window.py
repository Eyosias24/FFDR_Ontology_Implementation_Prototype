# Window

def add(request):
	hasHeight = ''
	hasOpeningDirection = ''
	isFunctional = ''
	isOnExterior = ''
	isShaftway = ''
	hasWidth = ''

	window = Window(hasHeight = hasHeight,hasOpeningDirection = hasOpeningDirection,isFunctional = isFunctional,isOnExterior = isOnExterior,isShaftway = isShaftway,hasWidth = hasWidth)
	window.save()