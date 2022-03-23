# RoofTopElement

def add(request):
	hasDescription = ''
	hasLocation = ''
	hasType = ''

	roofTopElement = RoofTopElement(hasDescription = hasDescription,hasLocation = hasLocation,hasType = hasType)
	roofTopElement.save()