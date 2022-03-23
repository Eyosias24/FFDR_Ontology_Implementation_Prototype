# FireLane

def add(request):
	hasAccessBarrierType = ''
	hasAnglesOfApproach = ''
	hasTurningRadius = ''
	hasVerticalClearance = ''

	fireLane = FireLane(hasAccessBarrierType = hasAccessBarrierType,hasAnglesOfApproach = hasAnglesOfApproach,hasTurningRadius = hasTurningRadius,hasVerticalClearance = hasVerticalClearance)
	fireLane.save()