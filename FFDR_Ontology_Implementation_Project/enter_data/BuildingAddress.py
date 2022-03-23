
# Building Address
def add(request):
	streetAddress = "Hatsinanpuisto 8"
	postalCode = "02600"
	city = "Espoo"

	buildingAddress = BuildingAddress(hasStreetAddress = streetAddress,hasPostalCode = postalCode,hasCity = city)
	buildingAddress.save()
	return render(request, "Firefighters_data_Integration_Platform/index.html")
