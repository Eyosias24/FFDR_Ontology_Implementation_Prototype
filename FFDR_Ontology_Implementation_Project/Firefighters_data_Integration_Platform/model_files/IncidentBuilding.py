from django.db import models
from .BuildingAddress import BuildingAddress
from .BuildingPlan import BuildingPlan
from .BuildingOccupancy import BuildingOccupancy
from .ConstructionType import ConstructionType
''' 
The 'Incidentbuilding' class represents a building with a fire
emergency.
'''
class IncidentBuilding(models.Model):  
	hasProjectName = models.CharField(max_length=80)
	hasAddress = models.ForeignKey(BuildingAddress, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasBuildingPlan = models.ForeignKey(BuildingPlan, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasOccupancy = models.ForeignKey(BuildingOccupancy, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasConstructionType = models.ForeignKey(ConstructionType, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasBuildingArea = models.FloatField(blank=True)
	hasBuildingAreaUnit = models.CharField(blank=True, max_length=80)
	hasBuildingHeight = models.FloatField(blank=True)
	hasBuildingHeightUnit = models.CharField(blank=True, max_length=80)
	hasCondition = models.TextField(blank=True)
	includeHazardousOperation = models.BooleanField(blank=True)
	hasNumberOfExit = models.IntegerField(blank=True)
	hasNumberOfStory = models.IntegerField(blank=True)
	hasNumberOfSublevel = models.IntegerField(blank=True)
	hasOccupantLoad = models.IntegerField(blank=True)


	def serialize(self):
		return {
			'hasProjectName': self.hasProjectName, 
			'hasAddress': self.hasAddress.serialize() if not self.hasAddress == None else '', 
			'hasBuildingPlan': self.hasBuildingPlan.serialize() if not self.hasBuildingPlan == None else '', 
			'hasOccupancy': self.hasOccupancy.serialize() if not self.hasOccupancy == None else '', 
			'hasConstructionType': self.hasConstructionType.serialize() if not self.hasConstructionType == None else '', 
			'hasBuildingArea': self.hasBuildingArea,
			'hasBuildingAreaUnit': self.hasBuildingAreaUnit,  
			'hasBuildingHeight': self.hasBuildingHeight,  
			'hasBuildingHeightUnit': self.hasBuildingHeightUnit, 
			'hasCondition': self.hasCondition, 
			'includeHazardousOperation': self.includeHazardousOperation, 
			'hasNumberOfExit': self.hasNumberOfExit, 
			'hasNumberOfStory': self.hasNumberOfStory, 
			'hasNumberOfSublevel': self.hasNumberOfSublevel, 
			'hasOccupantLoad': self.hasOccupantLoad, 
		} 

	def __str__(self):
		return  self.hasProjectName
