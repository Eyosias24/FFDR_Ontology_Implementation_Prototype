# VerticalOpening

def add(request):
	hasShaftEnclosure = ''
	hasDescription = ''
	hasLocation = ''

	verticalOpening = VerticalOpening(hasShaftEnclosure = hasShaftEnclosure,hasDescription = hasDescription,hasLocation = hasLocation)
	verticalOpening.save()