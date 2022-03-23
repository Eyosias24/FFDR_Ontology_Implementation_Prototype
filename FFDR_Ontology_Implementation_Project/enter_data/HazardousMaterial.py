# HazardousMaterial

def add(request):
	hasDescription = ''
	hasHazardLevel = ''
	hasSpecialHazard = ''

	hazardousMaterial = HazardousMaterial(hasDescription = hasDescription,hasHazardLevel = hasHazardLevel,hasSpecialHazard = hasSpecialHazard)
	hazardousMaterial.save()