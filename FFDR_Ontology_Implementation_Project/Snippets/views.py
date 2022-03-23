from django.http import JsonResponse
from .models import *

# fetch all AirSupply
def air_supply_all(request):
	airSupply = AirSupply.objects.all()
	return JsonResponse([AirSupply_item.serialize() for AirSupply_item in airSupply], safe=False)

# fetch all AlarmSystemAnnunciatorPanel
def alarm_system_annunciator_panel_all(request):
	alarmSystemAnnunciatorPanel = AlarmSystemAnnunciatorPanel.objects.all()
	return JsonResponse([AlarmSystemAnnunciatorPanel_item.serialize() for AlarmSystemAnnunciatorPanel_item in alarmSystemAnnunciatorPanel], safe=False)

# fetch all AlternativeAutomaticFireExtinguishingSystem
def alternative_automatic_fire_extinguishing_system_all(request):
	alternativeAutomaticFireExtinguishingSystem = AlternativeAutomaticFireExtinguishingSystem.objects.all()
	return JsonResponse([AlternativeAutomaticFireExtinguishingSystem_item.serialize() for AlternativeAutomaticFireExtinguishingSystem_item in alternativeAutomaticFireExtinguishingSystem], safe=False)

# fetch all AreaOfRefuge
def area_of_refuge_all(request):
	areaOfRefuge = AreaOfRefuge.objects.all()
	return JsonResponse([AreaOfRefuge_item.serialize() for AreaOfRefuge_item in areaOfRefuge], safe=False)

# fetch all AutomaticSprinklerSystem
def automatic_sprinkler_system_all(request):
	automaticSprinklerSystem = AutomaticSprinklerSystem.objects.all()
	return JsonResponse([AutomaticSprinklerSystem_item.serialize() for AutomaticSprinklerSystem_item in automaticSprinklerSystem], safe=False)

# fetch all BackUpPowerSupplySystem
def back_up_power_supply_system_all(request):
	backUpPowerSupplySystem = BackUpPowerSupplySystem.objects.all()
	return JsonResponse([BackUpPowerSupplySystem_item.serialize() for BackUpPowerSupplySystem_item in backUpPowerSupplySystem], safe=False)

# fetch all Balcony
def balcony_all(request):
	balcony = Balcony.objects.all()
	return JsonResponse([Balcony_item.serialize() for Balcony_item in balcony], safe=False)

# fetch all Building
def building_all(request):
	building = Building.objects.all()
	return JsonResponse([Building_item.serialize() for Building_item in building], safe=False)

# fetch all BuildingAddress
def building_address_all(request):
	buildingAddress = BuildingAddress.objects.all()
	return JsonResponse([BuildingAddress_item.serialize() for BuildingAddress_item in buildingAddress], safe=False)

# fetch all BuildingEngineerContactAddress
def building_engineer_contact_address_all(request):
	buildingEngineerContactAddress = BuildingEngineerContactAddress.objects.all()
	return JsonResponse([BuildingEngineerContactAddress_item.serialize() for BuildingEngineerContactAddress_item in buildingEngineerContactAddress], safe=False)

# fetch all BuildingManagerContactAddress
def building_manager_contact_address_all(request):
	buildingManagerContactAddress = BuildingManagerContactAddress.objects.all()
	return JsonResponse([BuildingManagerContactAddress_item.serialize() for BuildingManagerContactAddress_item in buildingManagerContactAddress], safe=False)

# fetch all BuildingOccupancy
def building_occupancy_all(request):
	buildingOccupancy = BuildingOccupancy.objects.all()
	return JsonResponse([BuildingOccupancy_item.serialize() for BuildingOccupancy_item in buildingOccupancy], safe=False)

# fetch all BuildingPlan
def building_plan_all(request):
	buildingPlan = BuildingPlan.objects.all()
	return JsonResponse([BuildingPlan_item.serialize() for BuildingPlan_item in buildingPlan], safe=False)

# fetch all CarbonMonoxideDetector
def carbon_monoxide_detector_all(request):
	carbonMonoxideDetector = CarbonMonoxideDetector.objects.all()
	return JsonResponse([CarbonMonoxideDetector_item.serialize() for CarbonMonoxideDetector_item in carbonMonoxideDetector], safe=False)

# fetch all CbrSensor
def cbr_sensor_all(request):
	cbrSensor = CbrSensor.objects.all()
	return JsonResponse([CbrSensor_item.serialize() for CbrSensor_item in cbrSensor], safe=False)

# fetch all ConcealedSpace
def concealed_space_all(request):
	concealedSpace = ConcealedSpace.objects.all()
	return JsonResponse([ConcealedSpace_item.serialize() for ConcealedSpace_item in concealedSpace], safe=False)

# fetch all ConstructionType
def construction_type_all(request):
	constructionType = ConstructionType.objects.all()
	return JsonResponse([ConstructionType_item.serialize() for ConstructionType_item in constructionType], safe=False)

# fetch all Door
def door_all(request):
	door = Door.objects.all()
	return JsonResponse([Door_item.serialize() for Door_item in door], safe=False)

# fetch all DoorUnlockingSystemControlPanel
def door_unlocking_system_control_panel_all(request):
	doorUnlockingSystemControlPanel = DoorUnlockingSystemControlPanel.objects.all()
	return JsonResponse([DoorUnlockingSystemControlPanel_item.serialize() for DoorUnlockingSystemControlPanel_item in doorUnlockingSystemControlPanel], safe=False)

# fetch all Elevator
def elevator_all(request):
	elevator = Elevator.objects.all()
	return JsonResponse([Elevator_item.serialize() for Elevator_item in elevator], safe=False)

# fetch all ElevatorOverrideControlPanel
def elevator_override_control_panel_all(request):
	elevatorOverrideControlPanel = ElevatorOverrideControlPanel.objects.all()
	return JsonResponse([ElevatorOverrideControlPanel_item.serialize() for ElevatorOverrideControlPanel_item in elevatorOverrideControlPanel], safe=False)

# fetch all EmergencyPowerOutlet
def emergency_power_outlet_all(request):
	emergencyPowerOutlet = EmergencyPowerOutlet.objects.all()
	return JsonResponse([EmergencyPowerOutlet_item.serialize() for EmergencyPowerOutlet_item in emergencyPowerOutlet], safe=False)

# fetch all EmergencyServiceProviderContactAddress
def emergency_service_provider_contact_address_all(request):
	emergencyServiceProviderContactAddress = EmergencyServiceProviderContactAddress.objects.all()
	return JsonResponse([EmergencyServiceProviderContactAddress_item.serialize() for EmergencyServiceProviderContactAddress_item in emergencyServiceProviderContactAddress], safe=False)

# fetch all ExteriorDoor
def exterior_door_all(request):
	exteriorDoor = ExteriorDoor.objects.all()
	return JsonResponse([ExteriorDoor_item.serialize() for ExteriorDoor_item in exteriorDoor], safe=False)

# fetch all ExteriorWall
def exterior_wall_all(request):
	exteriorWall = ExteriorWall.objects.all()
	return JsonResponse([ExteriorWall_item.serialize() for ExteriorWall_item in exteriorWall], safe=False)

# fetch all ExteriorWindow
def exterior_window_all(request):
	exteriorWindow = ExteriorWindow.objects.all()
	return JsonResponse([ExteriorWindow_item.serialize() for ExteriorWindow_item in exteriorWindow], safe=False)

# fetch all ExtremelyValuableMaterial
def extremely_valuable_material_all(request):
	extremelyValuableMaterial = ExtremelyValuableMaterial.objects.all()
	return JsonResponse([ExtremelyValuableMaterial_item.serialize() for ExtremelyValuableMaterial_item in extremelyValuableMaterial], safe=False)

# fetch all FarsControlPanel
def fars_control_panel_all(request):
	farsControlPanel = FarsControlPanel.objects.all()
	return JsonResponse([FarsControlPanel_item.serialize() for FarsControlPanel_item in farsControlPanel], safe=False)

# fetch all FarsFillStation
def fars_fill_station_all(request):
	farsFillStation = FarsFillStation.objects.all()
	return JsonResponse([FarsFillStation_item.serialize() for FarsFillStation_item in farsFillStation], safe=False)

# fetch all FireAlarmSystem
def fire_alarm_system_all(request):
	fireAlarmSystem = FireAlarmSystem.objects.all()
	return JsonResponse([FireAlarmSystem_item.serialize() for FireAlarmSystem_item in fireAlarmSystem], safe=False)

# fetch all FireBarrier
def fire_barrier_all(request):
	fireBarrier = FireBarrier.objects.all()
	return JsonResponse([FireBarrier_item.serialize() for FireBarrier_item in fireBarrier], safe=False)

# fetch all FireCommandCenter
def fire_command_center_all(request):
	fireCommandCenter = FireCommandCenter.objects.all()
	return JsonResponse([FireCommandCenter_item.serialize() for FireCommandCenter_item in fireCommandCenter], safe=False)

# fetch all FireDepartmentCommunicationSystemPanel
def fire_department_communication_system_panel_all(request):
	fireDepartmentCommunicationSystemPanel = FireDepartmentCommunicationSystemPanel.objects.all()
	return JsonResponse([FireDepartmentCommunicationSystemPanel_item.serialize() for FireDepartmentCommunicationSystemPanel_item in fireDepartmentCommunicationSystemPanel], safe=False)

# fetch all FireDepartmentConnection
def fire_department_connection_all(request):
	fireDepartmentConnection = FireDepartmentConnection.objects.all()
	return JsonResponse([FireDepartmentConnection_item.serialize() for FireDepartmentConnection_item in fireDepartmentConnection], safe=False)

# fetch all FireHoseConnection
def fire_hose_connection_all(request):
	fireHoseConnection = FireHoseConnection.objects.all()
	return JsonResponse([FireHoseConnection_item.serialize() for FireHoseConnection_item in fireHoseConnection], safe=False)

# fetch all FireHydrant
def fire_hydrant_all(request):
	fireHydrant = FireHydrant.objects.all()
	return JsonResponse([FireHydrant_item.serialize() for FireHydrant_item in fireHydrant], safe=False)

# fetch all FireLane
def fire_lane_all(request):
	fireLane = FireLane.objects.all()
	return JsonResponse([FireLane_item.serialize() for FireLane_item in fireLane], safe=False)

# fetch all FirePartition
def fire_partition_all(request):
	firePartition = FirePartition.objects.all()
	return JsonResponse([FirePartition_item.serialize() for FirePartition_item in firePartition], safe=False)

# fetch all FirePump
def fire_pump_all(request):
	firePump = FirePump.objects.all()
	return JsonResponse([FirePump_item.serialize() for FirePump_item in firePump], safe=False)

# fetch all FireServiceOrganization
def fire_service_organization_all(request):
	fireServiceOrganization = FireServiceOrganization.objects.all()
	return JsonResponse([FireServiceOrganization_item.serialize() for FireServiceOrganization_item in fireServiceOrganization], safe=False)

# fetch all Firewall
def firewall_all(request):
	firewall = Firewall.objects.all()
	return JsonResponse([Firewall_item.serialize() for Firewall_item in firewall], safe=False)

# fetch all FloorAssembly
def floor_assembly_all(request):
	floorAssembly = FloorAssembly.objects.all()
	return JsonResponse([FloorAssembly_item.serialize() for FloorAssembly_item in floorAssembly], safe=False)

# fetch all GasDetector
def gas_detector_all(request):
	gasDetector = GasDetector.objects.all()
	return JsonResponse([GasDetector_item.serialize() for GasDetector_item in gasDetector], safe=False)

# fetch all GasSupplySystem
def gas_supply_system_all(request):
	gasSupplySystem = GasSupplySystem.objects.all()
	return JsonResponse([GasSupplySystem_item.serialize() for GasSupplySystem_item in gasSupplySystem], safe=False)

# fetch all Hallway
def hallway_all(request):
	hallway = Hallway.objects.all()
	return JsonResponse([Hallway_item.serialize() for Hallway_item in hallway], safe=False)

# fetch all HazardousMaterial
def hazardous_material_all(request):
	hazardousMaterial = HazardousMaterial.objects.all()
	return JsonResponse([HazardousMaterial_item.serialize() for HazardousMaterial_item in hazardousMaterial], safe=False)

# fetch all HazardousSubstance
def hazardous_substance_all(request):
	hazardousSubstance = HazardousSubstance.objects.all()
	return JsonResponse([HazardousSubstance_item.serialize() for HazardousSubstance_item in hazardousSubstance], safe=False)

# fetch all Helipad
def helipad_all(request):
	helipad = Helipad.objects.all()
	return JsonResponse([Helipad_item.serialize() for Helipad_item in helipad], safe=False)

# fetch all HoseConnection
def hose_connection_all(request):
	hoseConnection = HoseConnection.objects.all()
	return JsonResponse([HoseConnection_item.serialize() for HoseConnection_item in hoseConnection], safe=False)

# fetch all Hospital
def hospital_all(request):
	hospital = Hospital.objects.all()
	return JsonResponse([Hospital_item.serialize() for Hospital_item in hospital], safe=False)

# fetch all HvacSystem
def hvac_system_all(request):
	hvacSystem = HvacSystem.objects.all()
	return JsonResponse([HvacSystem_item.serialize() for HvacSystem_item in hvacSystem], safe=False)

# fetch all IncidentBuilding
def incident_building_all(request):
	incidentBuilding = IncidentBuilding.objects.all()
	return JsonResponse([IncidentBuilding_item.serialize() for IncidentBuilding_item in incidentBuilding], safe=False)

# fetch all IncidentSite
def incident_site_all(request):
	incidentSite = IncidentSite.objects.all()
	return JsonResponse([IncidentSite_item.serialize() for IncidentSite_item in incidentSite], safe=False)

# fetch all KeyBox
def key_box_all(request):
	keyBox = KeyBox.objects.all()
	return JsonResponse([KeyBox_item.serialize() for KeyBox_item in keyBox], safe=False)

# fetch all MassNotificationSystem
def mass_notification_system_all(request):
	massNotificationSystem = MassNotificationSystem.objects.all()
	return JsonResponse([MassNotificationSystem_item.serialize() for MassNotificationSystem_item in massNotificationSystem], safe=False)

# fetch all MassNotificationSystemControlPanel
def mass_notification_system_control_panel_all(request):
	massNotificationSystemControlPanel = MassNotificationSystemControlPanel.objects.all()
	return JsonResponse([MassNotificationSystemControlPanel_item.serialize() for MassNotificationSystemControlPanel_item in massNotificationSystemControlPanel], safe=False)

# fetch all Material
def material_all(request):
	material = Material.objects.all()
	return JsonResponse([Material_item.serialize() for Material_item in material], safe=False)

# fetch all MunicipalDistributionSystem
def municipal_distribution_system_all(request):
	municipalDistributionSystem = MunicipalDistributionSystem.objects.all()
	return JsonResponse([MunicipalDistributionSystem_item.serialize() for MunicipalDistributionSystem_item in municipalDistributionSystem], safe=False)

# fetch all Obstruction
def obstruction_all(request):
	obstruction = Obstruction.objects.all()
	return JsonResponse([Obstruction_item.serialize() for Obstruction_item in obstruction], safe=False)

# fetch all OwnerContactAddress
def owner_contact_address_all(request):
	ownerContactAddress = OwnerContactAddress.objects.all()
	return JsonResponse([OwnerContactAddress_item.serialize() for OwnerContactAddress_item in ownerContactAddress], safe=False)

# fetch all ParkingLot
def parking_lot_all(request):
	parkingLot = ParkingLot.objects.all()
	return JsonResponse([ParkingLot_item.serialize() for ParkingLot_item in parkingLot], safe=False)

# fetch all Pipeline
def pipeline_all(request):
	pipeline = Pipeline.objects.all()
	return JsonResponse([Pipeline_item.serialize() for Pipeline_item in pipeline], safe=False)

# fetch all PoliceDepartment
def police_department_all(request):
	policeDepartment = PoliceDepartment.objects.all()
	return JsonResponse([PoliceDepartment_item.serialize() for PoliceDepartment_item in policeDepartment], safe=False)

# fetch all PortableFireExtinguisher
def portable_fire_extinguisher_all(request):
	portableFireExtinguisher = PortableFireExtinguisher.objects.all()
	return JsonResponse([PortableFireExtinguisher_item.serialize() for PortableFireExtinguisher_item in portableFireExtinguisher], safe=False)

# fetch all PowerLine
def power_line_all(request):
	powerLine = PowerLine.objects.all()
	return JsonResponse([PowerLine_item.serialize() for PowerLine_item in powerLine], safe=False)

# fetch all PrimaryPowerSupplySystem
def primary_power_supply_system_all(request):
	primaryPowerSupplySystem = PrimaryPowerSupplySystem.objects.all()
	return JsonResponse([PrimaryPowerSupplySystem_item.serialize() for PrimaryPowerSupplySystem_item in primaryPowerSupplySystem], safe=False)

# fetch all PublicSafetyAgencyContactAddress
def public_safety_agency_contact_address_all(request):
	publicSafetyAgencyContactAddress = PublicSafetyAgencyContactAddress.objects.all()
	return JsonResponse([PublicSafetyAgencyContactAddress_item.serialize() for PublicSafetyAgencyContactAddress_item in publicSafetyAgencyContactAddress], safe=False)

# fetch all Ramp
def ramp_all(request):
	ramp = Ramp.objects.all()
	return JsonResponse([Ramp_item.serialize() for Ramp_item in ramp], safe=False)

# fetch all RoadToIncident
def road_to_incident_all(request):
	roadToIncident = RoadToIncident.objects.all()
	return JsonResponse([RoadToIncident_item.serialize() for RoadToIncident_item in roadToIncident], safe=False)

# fetch all RoofAssembly
def roof_assembly_all(request):
	roofAssembly = RoofAssembly.objects.all()
	return JsonResponse([RoofAssembly_item.serialize() for RoofAssembly_item in roofAssembly], safe=False)

# fetch all RoofTopElement
def roof_top_element_all(request):
	roofTopElement = RoofTopElement.objects.all()
	return JsonResponse([RoofTopElement_item.serialize() for RoofTopElement_item in roofTopElement], safe=False)

# fetch all ShaftEnclosure
def shaft_enclosure_all(request):
	shaftEnclosure = ShaftEnclosure.objects.all()
	return JsonResponse([ShaftEnclosure_item.serialize() for ShaftEnclosure_item in shaftEnclosure], safe=False)

# fetch all SmokeandHeatRemovalSystem
def smokeand_heat_removal_system_all(request):
	smokeandHeatRemovalSystem = SmokeandHeatRemovalSystem.objects.all()
	return JsonResponse([SmokeandHeatRemovalSystem_item.serialize() for SmokeandHeatRemovalSystem_item in smokeandHeatRemovalSystem], safe=False)

# fetch all SmokeBarrier
def smoke_barrier_all(request):
	smokeBarrier = SmokeBarrier.objects.all()
	return JsonResponse([SmokeBarrier_item.serialize() for SmokeBarrier_item in smokeBarrier], safe=False)

# fetch all SmokeControlSystem
def smoke_control_system_all(request):
	smokeControlSystem = SmokeControlSystem.objects.all()
	return JsonResponse([SmokeControlSystem_item.serialize() for SmokeControlSystem_item in smokeControlSystem], safe=False)

# fetch all SmokeControlSystemControlPanel
def smoke_control_system_control_panel_all(request):
	smokeControlSystemControlPanel = SmokeControlSystemControlPanel.objects.all()
	return JsonResponse([SmokeControlSystemControlPanel_item.serialize() for SmokeControlSystemControlPanel_item in smokeControlSystemControlPanel], safe=False)

# fetch all SmokePartition
def smoke_partition_all(request):
	smokePartition = SmokePartition.objects.all()
	return JsonResponse([SmokePartition_item.serialize() for SmokePartition_item in smokePartition], safe=False)

# fetch all Stairway
def stairway_all(request):
	stairway = Stairway.objects.all()
	return JsonResponse([Stairway_item.serialize() for Stairway_item in stairway], safe=False)

# fetch all StandpipeSystem
def standpipe_system_all(request):
	standpipeSystem = StandpipeSystem.objects.all()
	return JsonResponse([StandpipeSystem_item.serialize() for StandpipeSystem_item in standpipeSystem], safe=False)

# fetch all StaticWaterSource
def static_water_source_all(request):
	staticWaterSource = StaticWaterSource.objects.all()
	return JsonResponse([StaticWaterSource_item.serialize() for StaticWaterSource_item in staticWaterSource], safe=False)

# fetch all StructuralElement
def structural_element_all(request):
	structuralElement = StructuralElement.objects.all()
	return JsonResponse([StructuralElement_item.serialize() for StructuralElement_item in structuralElement], safe=False)

# fetch all SurroundingTerrain
def surrounding_terrain_all(request):
	surroundingTerrain = SurroundingTerrain.objects.all()
	return JsonResponse([SurroundingTerrain_item.serialize() for SurroundingTerrain_item in surroundingTerrain], safe=False)

# fetch all UtilityContactAddress
def utility_contact_address_all(request):
	utilityContactAddress = UtilityContactAddress.objects.all()
	return JsonResponse([UtilityContactAddress_item.serialize() for UtilityContactAddress_item in utilityContactAddress], safe=False)

# fetch all UtilityControlPanel
def utility_control_panel_all(request):
	utilityControlPanel = UtilityControlPanel.objects.all()
	return JsonResponse([UtilityControlPanel_item.serialize() for UtilityControlPanel_item in utilityControlPanel], safe=False)

# fetch all Vegetation
def vegetation_all(request):
	vegetation = Vegetation.objects.all()
	return JsonResponse([Vegetation_item.serialize() for Vegetation_item in vegetation], safe=False)

# fetch all VerticalOpening
def vertical_opening_all(request):
	verticalOpening = VerticalOpening.objects.all()
	return JsonResponse([VerticalOpening_item.serialize() for VerticalOpening_item in verticalOpening], safe=False)

# fetch all Wall
def wall_all(request):
	wall = Wall.objects.all()
	return JsonResponse([Wall_item.serialize() for Wall_item in wall], safe=False)

# fetch all WaterSupplyandSewerageSystem
def water_supplyand_sewerage_system_all(request):
	waterSupplyandSewerageSystem = WaterSupplyandSewerageSystem.objects.all()
	return JsonResponse([WaterSupplyandSewerageSystem_item.serialize() for WaterSupplyandSewerageSystem_item in waterSupplyandSewerageSystem], safe=False)

# fetch all WeatherCondition
def weather_condition_all(request):
	weatherCondition = WeatherCondition.objects.all()
	return JsonResponse([WeatherCondition_item.serialize() for WeatherCondition_item in weatherCondition], safe=False)

# fetch all Window
def window_all(request):
	window = Window.objects.all()
	return JsonResponse([Window_item.serialize() for Window_item in window], safe=False)

