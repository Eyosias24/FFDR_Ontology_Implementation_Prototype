
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



		# enter wall
wall = Wall(
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


	return HttpResponse("Success!")

	# Wall
	project = IncidentBuilding.objects.all()
	
	material = Material.objects.get(hasName = "Concrete block")

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
				thickness = 200

				data = Wall(
				hasProjectName=project[0],
				hasMaterial = material,
				hasId="Wall-" + Floor["floorNumber"] + label,
				hasOnFloor=Floor["floor"], 
				hasFireResistanceRating=2,
				hasFireResistanceRatingUnit="Hours",
				hasThickness = thickness,
				hasThicknessUnit = "Millimeters"
							)
				data.save()
	
	return HttpResponse("Success!")

	# Floor Assembly
	
	
	project = IncidentBuilding.objects.all()
	
	material = Material.objects.get(hasName = "Prestressed concrete")

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

	
	for Floor in FloorsNumber:
			thickness = 250

			data = Wall(
			hasProjectName=project[0],
			hasType="Hollow core slab".
			hasThickness = thickness,
			hasThicknessUnit = "Millimeters",
			isLightweightConstruction = false,
			hasMaterial = material,
			hasId="Floor Assembly-" + Floor["floorNumber"],			
			hasOnFloor=Floor["floor"], 
			hasFireResistanceRating=2,
			hasFireResistanceRatingUnit="Hours"
						)
			data.save()
	
	return HttpResponse("Success!")

	# Floor Assembly
	
def add (request):	
	
	project = IncidentBuilding.objects.all()
	
	material = Material.objects.get(hasName = "Prestressed concrete")

	FloorsNumber = [
			  {"floor":"First Floor",
			  "floorNumber":"1"},
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

	
	for Floor in FloorsNumber:
			thickness = 250

			data = FloorAssembly(
				hasProjectName=project[0],
				hasType="Hollow core slab",
				hasThickness = thickness,
				hasThicknessUnit = "Millimeters",
				isLightweightConstruction = False,
				hasMaterial = material,
				hasId="Floor Assembly-" + Floor["floorNumber"],			
				hasOnFloor=Floor["floor"], 
				hasFireResistanceRating=2,
				hasFireResistanceRatingUnit="Hours"
						)
			data.save()
	
	return HttpResponse("Success!")


# Hallway


def add (request):	
	
	project = IncidentBuilding.objects.all()
	
	material = Material.objects.get(hasName = "Prestressed concrete")

	FloorsNumber = [
			  {"floor":"First Floor",
			  "floorNumber":"1"},
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

	
	labels = ["A","B", "C", "D"]
	
	for Floor in FloorsNumber:
			for label in labels:
				thickness = 200

				data = Hallway(
				hasProjectName=project[0],
				hasWidth = thickness,
				hasWidthUnit = "Millimeters"
				hasOnFloor=Floor["floor"], 
				hasId="Hallway-" + Floor["floorNumber"] + label,
				hasFireResistanceRating=2,
				hasFireResistanceRatingUnit="Hours",
							)
				data.save()
	
	return HttpResponse("Success!")


def testApi(request):
	url = "https://data.mongodb-api.com/app/data-isbxy/endpoint/data/beta/action/findOne"

	payload = json.dumps({
		"collection": "Firefighters_data_Integration_Platform_buildingengineercb0f3",
		"database": "firefighter_data_storage",
		"dataSource": "Cluster0",
		# "projection": {
		# 	"_id": 1
		# }
	})
	headers = {
		'Content-Type': 'application/json',
		'Access-Control-Request-Headers': '*',
		'api-key': 'MbLCBHl4dG8ca4lBYZEHYUNunFlBOW3XCvjwrCWwTcmAsEEbN82SF5TjmeEcegUm'
	}

	# response = requests.request("POST", url, headers=headers, data=payload)
	response = requests.request("GET", url, headers=headers)

	print(response.text)
	return HttpResponse(response.text)

