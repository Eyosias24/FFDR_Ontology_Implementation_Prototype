# ConcealedSpace

def add(request):
	hasFireExtinguishingSystem = ''
	hasDescription = ''
	hasLocation = ''

	concealedSpace = ConcealedSpace(hasFireExtinguishingSystem = hasFireExtinguishingSystem,hasDescription = hasDescription,hasLocation = hasLocation)
	concealedSpace.save()