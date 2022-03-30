
# enter door
data = Door(
								hasProjectName=project[0],
								hasMaterial = material,
								hasId="Interior Door-" + Floor["floorNumber"] + label,
								hasOnFloor=Floor["floor"], 
								hasFireResistanceRating=45,
								hasFireResistanceRatingUnit="Minutes",
								hasWidth = Width,
								hasWidthUnit = "Millimeters",
								hasOpeningDirection = "Inward",
								hasExitTravelDistances = distance,
								hasExitTravelDistancesUnit = "Meters",
								isFunctional = True
								)
					data.save()


# Hallway
data = Hallway(
							hasProjectName=project[0],
							hasId="Hallway-" + Floor["floorNumber"] + label,
							hasOnFloor=Floor["floor"], 
							hasWidth = Width,
							hasWidthUnit = "Meters",
							)
				data.save()


# Enter balcony
data = Balcony(
							hasProjectName=project[0],
							hasId="Balcony-" + Floor["floorNumber"] + label,
							hasOnFloor=Floor["floor"], 
							hasWidth = Width,
							hasWidthUnit = "Meters",
							)
				data.save()


				def add(request):
	controlPanel = DoorUnlockingSystemControlPanel.objects.get(hasName="Door unlocking system control panel")
	
	project = IncidentBuilding.objects.all()
	
	Floors = [
			  "Basement",
			  "First Floor",
			  "Second Floor",
			  "Third Floor",
			  "Fourth Floor",
			  "Fifth Floor",
			  "Sixth Floor",
			  "Seventh Floor",
			  "Eighth Floor"
			]
			
			#   {"floor":"Basement",
			#   "floorNumber":"-1"},
			#   {"floor":"First Floor",
			#   "floorNumber":"1"}
	FloorsNumber = [
			  {"floor":"Second Floor",
			  "floorNumber":"2"},
			  {"floor":"Third Floor",
			  "floorNumber":"3"},
			  {"floor":"Fourth Floor",
			  "floorNumber":"4"},
			  {"floor":"Fifth Floor",
			  "floorNumber":"5"},
			  {"floor":"Sixth Floor",
			  "floorNumber":"6"},
			  {"floor":"Seventh Floor",
			  "floorNumber":"7"},
			  {"floor":"Eighth Floor",
			  "floorNumber":"8"}
			]

	labels = ["A","B"]
	
	for Floor in FloorsNumber:
			for label in labels:
				Width = 5
				data = Balcony(
							hasProjectName=project[0],
							hasId="Balcony-" + Floor["floorNumber"] + label,
							hasOnFloor=Floor["floor"], 
							hasWidth = Width,
							hasWidthUnit = "Meters",
							)
				data.save()



		


	return HttpResponse("Success!")