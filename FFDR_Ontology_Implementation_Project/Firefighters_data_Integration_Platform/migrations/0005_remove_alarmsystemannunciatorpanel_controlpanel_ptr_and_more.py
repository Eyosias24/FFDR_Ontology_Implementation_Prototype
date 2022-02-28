# Generated by Django 4.0.2 on 2022-02-25 14:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Firefighters_data_Integration_Platform', '0004_airsupply_buildingaddress_buildingcomponent_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='alarmsystemannunciatorpanel',
            name='controlpanel_ptr',
        ),
        migrations.RemoveField(
            model_name='alternativeautomaticfireextinguishingsystem',
            name='automaticfireextinguishingsystem_ptr',
        ),
        migrations.RemoveField(
            model_name='areaofrefuge',
            name='buildingcomponent_ptr',
        ),
        migrations.RemoveField(
            model_name='automaticfireextinguishingsystem',
            name='buildingsafetysystem_ptr',
        ),
        migrations.RemoveField(
            model_name='automaticfireextinguishingsystem',
            name='hasConnectionWith',
        ),
        migrations.RemoveField(
            model_name='automaticsprinklersystem',
            name='automaticfireextinguishingsystem_ptr',
        ),
        migrations.RemoveField(
            model_name='backuppowersupplysystem',
            name='buildingutilitysystem_ptr',
        ),
        migrations.RemoveField(
            model_name='balcony',
            name='nonstructuralelement_ptr',
        ),
        migrations.RemoveField(
            model_name='building',
            name='surroundingstructure_ptr',
        ),
        migrations.RemoveField(
            model_name='buildingaddress',
            name='address_ptr',
        ),
        migrations.RemoveField(
            model_name='buildingengineercontactaddress',
            name='address_ptr',
        ),
        migrations.RemoveField(
            model_name='buildingmanagercontactaddress',
            name='address_ptr',
        ),
        migrations.RemoveField(
            model_name='buildingsafetysystem',
            name='buildingcomponent_ptr',
        ),
        migrations.RemoveField(
            model_name='buildingutilitysystem',
            name='buildingcomponent_ptr',
        ),
        migrations.RemoveField(
            model_name='buildingutilitysystem',
            name='hasAddress',
        ),
        migrations.RemoveField(
            model_name='buildingutilitysystem',
            name='hasControlPanel',
        ),
        migrations.RemoveField(
            model_name='carbonmonoxidedetector',
            name='sensordetector_ptr',
        ),
        migrations.RemoveField(
            model_name='cbrsensor',
            name='sensordetector_ptr',
        ),
        migrations.RemoveField(
            model_name='concealedspace',
            name='buildingcomponent_ptr',
        ),
        migrations.RemoveField(
            model_name='concealedspace',
            name='hasFireExtinguishingSystem',
        ),
        migrations.RemoveField(
            model_name='door',
            name='hasControlPanel',
        ),
        migrations.RemoveField(
            model_name='door',
            name='nonstructuralelement_ptr',
        ),
        migrations.RemoveField(
            model_name='doorunlockingsystemcontrolpanel',
            name='controlpanel_ptr',
        ),
        migrations.RemoveField(
            model_name='elevator',
            name='hasControlPanel',
        ),
        migrations.RemoveField(
            model_name='elevator',
            name='hasFireExtinguishingSystem',
        ),
        migrations.RemoveField(
            model_name='elevator',
            name='nonstructuralelement_ptr',
        ),
        migrations.RemoveField(
            model_name='elevatoroverridecontrolpanel',
            name='controlpanel_ptr',
        ),
        migrations.RemoveField(
            model_name='emergencypoweroutlet',
            name='buildingsafetysystem_ptr',
        ),
        migrations.RemoveField(
            model_name='emergencyserviceprovider',
            name='hasAddress',
        ),
        migrations.RemoveField(
            model_name='emergencyserviceprovidercontactaddress',
            name='address_ptr',
        ),
        migrations.RemoveField(
            model_name='exteriordoor',
            name='facade_ptr',
        ),
        migrations.RemoveField(
            model_name='exteriorwall',
            name='facade_ptr',
        ),
        migrations.RemoveField(
            model_name='exteriorwindow',
            name='facade_ptr',
        ),
        migrations.RemoveField(
            model_name='extremelyvaluablematerial',
            name='buildingcomponent_ptr',
        ),
        migrations.RemoveField(
            model_name='facade',
            name='buildingcomponent_ptr',
        ),
        migrations.RemoveField(
            model_name='farscontrolpanel',
            name='controlpanel_ptr',
        ),
        migrations.RemoveField(
            model_name='farsfillstation',
            name='buildingsafetysystem_ptr',
        ),
        migrations.RemoveField(
            model_name='farsfillstation',
            name='hasControlPanel',
        ),
        migrations.RemoveField(
            model_name='firealarmsystem',
            name='buildingsafetysystem_ptr',
        ),
        migrations.RemoveField(
            model_name='firealarmsystem',
            name='hasControlPanel',
        ),
        migrations.RemoveField(
            model_name='fireandsmokeprotectionelement',
            name='buildingsafetysystem_ptr',
        ),
        migrations.RemoveField(
            model_name='fireandsmokeprotectionelement',
            name='hasMaterial',
        ),
        migrations.RemoveField(
            model_name='firebarrier',
            name='fireandsmokeprotectionelement_ptr',
        ),
        migrations.RemoveField(
            model_name='firecommandcenter',
            name='contains',
        ),
        migrations.RemoveField(
            model_name='firedepartmentcommunicationsystempanel',
            name='controlpanel_ptr',
        ),
        migrations.RemoveField(
            model_name='firedepartmentconnection',
            name='buildingsafetysystem_ptr',
        ),
        migrations.RemoveField(
            model_name='firedepartmentconnection',
            name='hasHoseConnection',
        ),
        migrations.RemoveField(
            model_name='firedepartmentconnection',
            name='hasWaterSource',
        ),
        migrations.RemoveField(
            model_name='firehoseconnection',
            name='buildingsafetysystem_ptr',
        ),
        migrations.RemoveField(
            model_name='firehoseconnection',
            name='hasHoseConnection',
        ),
        migrations.RemoveField(
            model_name='firehoseconnection',
            name='hasWaterSource',
        ),
        migrations.RemoveField(
            model_name='firehydrant',
            name='hasHoseConnection',
        ),
        migrations.RemoveField(
            model_name='firehydrant',
            name='hasWaterSource',
        ),
        migrations.RemoveField(
            model_name='firehydrant',
            name='surroundingstructure_ptr',
        ),
        migrations.RemoveField(
            model_name='firelane',
            name='road_ptr',
        ),
        migrations.RemoveField(
            model_name='firepartition',
            name='fireandsmokeprotectionelement_ptr',
        ),
        migrations.RemoveField(
            model_name='firepump',
            name='buildingsafetysystem_ptr',
        ),
        migrations.RemoveField(
            model_name='fireserviceorganization',
            name='emergencyserviceprovider_ptr',
        ),
        migrations.RemoveField(
            model_name='firewall',
            name='facade_ptr',
        ),
        migrations.RemoveField(
            model_name='floorassembly',
            name='nonstructuralelement_ptr',
        ),
        migrations.RemoveField(
            model_name='gasdetector',
            name='sensordetector_ptr',
        ),
        migrations.RemoveField(
            model_name='gassupplysystem',
            name='buildingutilitysystem_ptr',
        ),
        migrations.RemoveField(
            model_name='hallway',
            name='nonstructuralelement_ptr',
        ),
        migrations.RemoveField(
            model_name='hazardousmaterial',
            name='surroundingstructure_ptr',
        ),
        migrations.RemoveField(
            model_name='hazardoussubstance',
            name='buildingcomponent_ptr',
        ),
        migrations.RemoveField(
            model_name='helipad',
            name='buildingcomponent_ptr',
        ),
        migrations.RemoveField(
            model_name='hospital',
            name='emergencyserviceprovider_ptr',
        ),
        migrations.RemoveField(
            model_name='hvacsystem',
            name='buildingutilitysystem_ptr',
        ),
        migrations.RemoveField(
            model_name='incidentbuilding',
            name='hasAddress',
        ),
        migrations.RemoveField(
            model_name='incidentbuilding',
            name='hasBuildingPlan',
        ),
        migrations.RemoveField(
            model_name='incidentbuilding',
            name='hasComponent',
        ),
        migrations.RemoveField(
            model_name='incidentbuilding',
            name='hasConstructionType',
        ),
        migrations.RemoveField(
            model_name='incidentbuilding',
            name='hasOccupancy',
        ),
        migrations.RemoveField(
            model_name='incidentsite',
            name='contains',
        ),
        migrations.RemoveField(
            model_name='incidentsite',
            name='hasAddress',
        ),
        migrations.RemoveField(
            model_name='incidentsite',
            name='hasWeatherCondition',
        ),
        migrations.RemoveField(
            model_name='keybox',
            name='buildingcomponent_ptr',
        ),
        migrations.RemoveField(
            model_name='massnotificationsystem',
            name='buildingsafetysystem_ptr',
        ),
        migrations.RemoveField(
            model_name='massnotificationsystem',
            name='hasControlPanel',
        ),
        migrations.RemoveField(
            model_name='massnotificationsystemcontrolpanel',
            name='controlpanel_ptr',
        ),
        migrations.RemoveField(
            model_name='material',
            name='isMaterialOf',
        ),
        migrations.RemoveField(
            model_name='municipaldistributionsystem',
            name='watersource_ptr',
        ),
        migrations.RemoveField(
            model_name='nonstructuralelement',
            name='buildingcomponent_ptr',
        ),
        migrations.RemoveField(
            model_name='nonstructuralelement',
            name='hasMaterial',
        ),
        migrations.RemoveField(
            model_name='obstruction',
            name='surroundingstructure_ptr',
        ),
        migrations.RemoveField(
            model_name='ownercontactaddress',
            name='address_ptr',
        ),
        migrations.RemoveField(
            model_name='parkinglot',
            name='surroundingstructure_ptr',
        ),
        migrations.RemoveField(
            model_name='pipeline',
            name='surroundingstructure_ptr',
        ),
        migrations.RemoveField(
            model_name='policedepartment',
            name='emergencyserviceprovider_ptr',
        ),
        migrations.RemoveField(
            model_name='portablefireextinguisher',
            name='buildingsafetysystem_ptr',
        ),
        migrations.RemoveField(
            model_name='powerline',
            name='surroundingstructure_ptr',
        ),
        migrations.RemoveField(
            model_name='primarypowersupplysystem',
            name='buildingutilitysystem_ptr',
        ),
        migrations.RemoveField(
            model_name='publicsafetyagencycontactaddress',
            name='address_ptr',
        ),
        migrations.RemoveField(
            model_name='ramp',
            name='hasFireExtinguishingSystem',
        ),
        migrations.RemoveField(
            model_name='ramp',
            name='nonstructuralelement_ptr',
        ),
        migrations.RemoveField(
            model_name='road',
            name='hasMaterial',
        ),
        migrations.RemoveField(
            model_name='roadtoincident',
            name='road_ptr',
        ),
        migrations.RemoveField(
            model_name='roofassembly',
            name='nonstructuralelement_ptr',
        ),
        migrations.RemoveField(
            model_name='rooftopelement',
            name='buildingcomponent_ptr',
        ),
        migrations.RemoveField(
            model_name='sensordetector',
            name='buildingsafetysystem_ptr',
        ),
        migrations.RemoveField(
            model_name='shaftenclosure',
            name='fireandsmokeprotectionelement_ptr',
        ),
        migrations.RemoveField(
            model_name='smokeandheatremovalsystem',
            name='buildingsafetysystem_ptr',
        ),
        migrations.RemoveField(
            model_name='smokebarrier',
            name='fireandsmokeprotectionelement_ptr',
        ),
        migrations.RemoveField(
            model_name='smokecontrolsystem',
            name='buildingsafetysystem_ptr',
        ),
        migrations.RemoveField(
            model_name='smokecontrolsystem',
            name='hasControlPanel',
        ),
        migrations.RemoveField(
            model_name='smokecontrolsystemcontrolpanel',
            name='controlpanel_ptr',
        ),
        migrations.RemoveField(
            model_name='smokepartition',
            name='fireandsmokeprotectionelement_ptr',
        ),
        migrations.RemoveField(
            model_name='stairway',
            name='hasFireExtinguishingSystem',
        ),
        migrations.RemoveField(
            model_name='stairway',
            name='nonstructuralelement_ptr',
        ),
        migrations.RemoveField(
            model_name='standpipesystem',
            name='buildingsafetysystem_ptr',
        ),
        migrations.RemoveField(
            model_name='staticwatersource',
            name='watersource_ptr',
        ),
        migrations.RemoveField(
            model_name='structuralelement',
            name='buildingcomponent_ptr',
        ),
        migrations.RemoveField(
            model_name='structuralelement',
            name='hasMaterial',
        ),
        migrations.RemoveField(
            model_name='utilitycontactaddress',
            name='address_ptr',
        ),
        migrations.RemoveField(
            model_name='utilitycontrolpanel',
            name='controlpanel_ptr',
        ),
        migrations.RemoveField(
            model_name='vegetation',
            name='surroundingstructure_ptr',
        ),
        migrations.RemoveField(
            model_name='verticalopening',
            name='buildingcomponent_ptr',
        ),
        migrations.RemoveField(
            model_name='verticalopening',
            name='hasShaftEnclosure',
        ),
        migrations.RemoveField(
            model_name='wall',
            name='nonstructuralelement_ptr',
        ),
        migrations.RemoveField(
            model_name='watersupplyandseweragesystem',
            name='buildingutilitysystem_ptr',
        ),
        migrations.RemoveField(
            model_name='window',
            name='nonstructuralelement_ptr',
        ),
        migrations.DeleteModel(
            name='Address',
        ),
        migrations.DeleteModel(
            name='AlarmSystemAnnunciatorPanel',
        ),
        migrations.DeleteModel(
            name='AlternativeAutomaticFireExtinguishingSystem',
        ),
        migrations.DeleteModel(
            name='AreaOfRefuge',
        ),
        migrations.DeleteModel(
            name='AutomaticFireExtinguishingSystem',
        ),
        migrations.DeleteModel(
            name='AutomaticSprinklerSystem',
        ),
        migrations.DeleteModel(
            name='BackUpPowerSupplySystem',
        ),
        migrations.DeleteModel(
            name='Balcony',
        ),
        migrations.DeleteModel(
            name='Building',
        ),
        migrations.DeleteModel(
            name='BuildingAddress',
        ),
        migrations.DeleteModel(
            name='BuildingComponent',
        ),
        migrations.DeleteModel(
            name='BuildingEngineerContactAddress',
        ),
        migrations.DeleteModel(
            name='BuildingManagerContactAddress',
        ),
        migrations.DeleteModel(
            name='BuildingOccupancy',
        ),
        migrations.DeleteModel(
            name='BuildingPlan',
        ),
        migrations.DeleteModel(
            name='BuildingSafetySystem',
        ),
        migrations.DeleteModel(
            name='BuildingUtilitySystem',
        ),
        migrations.DeleteModel(
            name='CarbonMonoxideDetector',
        ),
        migrations.DeleteModel(
            name='CbrSensor',
        ),
        migrations.DeleteModel(
            name='ConcealedSpace',
        ),
        migrations.DeleteModel(
            name='ConstructionType',
        ),
        migrations.DeleteModel(
            name='ControlPanel',
        ),
        migrations.DeleteModel(
            name='Door',
        ),
        migrations.DeleteModel(
            name='DoorUnlockingSystemControlPanel',
        ),
        migrations.DeleteModel(
            name='Elevator',
        ),
        migrations.DeleteModel(
            name='ElevatorOverrideControlPanel',
        ),
        migrations.DeleteModel(
            name='EmergencyPowerOutlet',
        ),
        migrations.DeleteModel(
            name='EmergencyServiceProvider',
        ),
        migrations.DeleteModel(
            name='EmergencyServiceProviderContactAddress',
        ),
        migrations.DeleteModel(
            name='ExteriorDoor',
        ),
        migrations.DeleteModel(
            name='ExteriorWall',
        ),
        migrations.DeleteModel(
            name='ExteriorWindow',
        ),
        migrations.DeleteModel(
            name='ExtremelyValuableMaterial',
        ),
        migrations.DeleteModel(
            name='Facade',
        ),
        migrations.DeleteModel(
            name='FarsControlPanel',
        ),
        migrations.DeleteModel(
            name='FarsFillStation',
        ),
        migrations.DeleteModel(
            name='FireAlarmSystem',
        ),
        migrations.DeleteModel(
            name='FireandSmokeProtectionElement',
        ),
        migrations.DeleteModel(
            name='FireBarrier',
        ),
        migrations.DeleteModel(
            name='FireCommandCenter',
        ),
        migrations.DeleteModel(
            name='FireDepartmentCommunicationSystemPanel',
        ),
        migrations.DeleteModel(
            name='FireDepartmentConnection',
        ),
        migrations.DeleteModel(
            name='FireHoseConnection',
        ),
        migrations.DeleteModel(
            name='FireHydrant',
        ),
        migrations.DeleteModel(
            name='FireLane',
        ),
        migrations.DeleteModel(
            name='FirePartition',
        ),
        migrations.DeleteModel(
            name='FirePump',
        ),
        migrations.DeleteModel(
            name='FireServiceOrganization',
        ),
        migrations.DeleteModel(
            name='Firewall',
        ),
        migrations.DeleteModel(
            name='FloorAssembly',
        ),
        migrations.DeleteModel(
            name='GasDetector',
        ),
        migrations.DeleteModel(
            name='GasSupplySystem',
        ),
        migrations.DeleteModel(
            name='Hallway',
        ),
        migrations.DeleteModel(
            name='HazardousMaterial',
        ),
        migrations.DeleteModel(
            name='HazardousSubstance',
        ),
        migrations.DeleteModel(
            name='Helipad',
        ),
        migrations.DeleteModel(
            name='HoseConnection',
        ),
        migrations.DeleteModel(
            name='Hospital',
        ),
        migrations.DeleteModel(
            name='HvacSystem',
        ),
        migrations.DeleteModel(
            name='IncidentBuilding',
        ),
        migrations.DeleteModel(
            name='IncidentSite',
        ),
        migrations.DeleteModel(
            name='KeyBox',
        ),
        migrations.DeleteModel(
            name='MassNotificationSystem',
        ),
        migrations.DeleteModel(
            name='MassNotificationSystemControlPanel',
        ),
        migrations.DeleteModel(
            name='Material',
        ),
        migrations.DeleteModel(
            name='MunicipalDistributionSystem',
        ),
        migrations.DeleteModel(
            name='NonStructuralElement',
        ),
        migrations.DeleteModel(
            name='Obstruction',
        ),
        migrations.DeleteModel(
            name='OwnerContactAddress',
        ),
        migrations.DeleteModel(
            name='ParkingLot',
        ),
        migrations.DeleteModel(
            name='Pipeline',
        ),
        migrations.DeleteModel(
            name='PoliceDepartment',
        ),
        migrations.DeleteModel(
            name='PortableFireExtinguisher',
        ),
        migrations.DeleteModel(
            name='PowerLine',
        ),
        migrations.DeleteModel(
            name='PrimaryPowerSupplySystem',
        ),
        migrations.DeleteModel(
            name='PublicSafetyAgencyContactAddress',
        ),
        migrations.DeleteModel(
            name='Ramp',
        ),
        migrations.DeleteModel(
            name='Road',
        ),
        migrations.DeleteModel(
            name='RoadToIncident',
        ),
        migrations.DeleteModel(
            name='RoofAssembly',
        ),
        migrations.DeleteModel(
            name='RoofTopElement',
        ),
        migrations.DeleteModel(
            name='SensorDetector',
        ),
        migrations.DeleteModel(
            name='ShaftEnclosure',
        ),
        migrations.DeleteModel(
            name='SmokeandHeatRemovalSystem',
        ),
        migrations.DeleteModel(
            name='SmokeBarrier',
        ),
        migrations.DeleteModel(
            name='SmokeControlSystem',
        ),
        migrations.DeleteModel(
            name='SmokeControlSystemControlPanel',
        ),
        migrations.DeleteModel(
            name='SmokePartition',
        ),
        migrations.DeleteModel(
            name='Stairway',
        ),
        migrations.DeleteModel(
            name='StandpipeSystem',
        ),
        migrations.DeleteModel(
            name='StaticWaterSource',
        ),
        migrations.DeleteModel(
            name='StructuralElement',
        ),
        migrations.DeleteModel(
            name='SurroundingStructure',
        ),
        migrations.DeleteModel(
            name='SurroundingTerrain',
        ),
        migrations.DeleteModel(
            name='UtilityContactAddress',
        ),
        migrations.DeleteModel(
            name='UtilityControlPanel',
        ),
        migrations.DeleteModel(
            name='Vegetation',
        ),
        migrations.DeleteModel(
            name='VerticalOpening',
        ),
        migrations.DeleteModel(
            name='Wall',
        ),
        migrations.DeleteModel(
            name='WaterSource',
        ),
        migrations.DeleteModel(
            name='WaterSupplyandSewerageSystem',
        ),
        migrations.DeleteModel(
            name='WeatherCondition',
        ),
        migrations.DeleteModel(
            name='Window',
        ),
    ]