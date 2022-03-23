# StructuralElement

def add(request):
	hasMaterial = ''
	hasLocation = ''
	hasFireResistanceRating = ''

	structuralElement = StructuralElement(hasMaterial = hasMaterial,hasLocation = hasLocation,hasFireResistanceRating = hasFireResistanceRating)
	structuralElement.save()