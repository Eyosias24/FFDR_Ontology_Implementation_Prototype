# HazardousSubstance

def add(request):
	hasDescription = ''
	hasHazardLevel = ''
	hasLocation = ''
	hasSpecialHazard = ''
	isDecontaminationRequired = ''

	hazardousSubstance = HazardousSubstance(hasDescription = hasDescription,hasHazardLevel = hasHazardLevel,hasLocation = hasLocation,hasSpecialHazard = hasSpecialHazard,isDecontaminationRequired = isDecontaminationRequired)
	hazardousSubstance.save()