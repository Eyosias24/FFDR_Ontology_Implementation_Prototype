from django.db import models
from .Address import Address

from .BuildingPlan import BuildingPlan

from .BuildingComponent import BuildingComponent

from .BuildingOccupancy import BuildingOccupancy

from .ConstructionType import ConstructionType

'''
The 'Incidentbuilding' class represents a building with a fire
emergency.
'''
class IncidentBuilding(models.Model):
		hasAddress = models.ForeignKey(Address, on_delete=models.DO_NOTHING)
		hasBuildingPlan = models.ForeignKey(BuildingPlan, on_delete=models.DO_NOTHING)
		hasComponent = models.ForeignKey(BuildingComponent, on_delete=models.DO_NOTHING)
		hasOccupancy = models.ForeignKey(BuildingOccupancy, on_delete=models.DO_NOTHING)
		hasConstructionType = models.ForeignKey(ConstructionType, on_delete=models.DO_NOTHING)
		hasBuildingArea = models.FloatField()
		hasBuildingHeight = models.FloatField()
		hasCondition = models.TextField()
		includeHazardousOperation = models.BooleanField()
		hasNumberOfExit = models.IntegerField()
		hasNumberOfStory = models.IntegerField()
		hasNumberOfSublevel = models.IntegerField()
		hasOccupantLoad = models.IntegerField()


		def serialize(self):
			return {
				'hasAddress': self.hasAddress, 
				'hasBuildingPlan': self.hasBuildingPlan, 
				'hasComponent': self.hasComponent, 
				'hasOccupancy': self.hasOccupancy, 
				'hasConstructionType': self.hasConstructionType, 
				'hasBuildingArea': self.hasBuildingArea, 
				'hasBuildingHeight': self.hasBuildingHeight, 
				'hasCondition': self.hasCondition, 
				'includeHazardousOperation': self.includeHazardousOperation, 
				'hasNumberOfExit': self.hasNumberOfExit, 
				'hasNumberOfStory': self.hasNumberOfStory, 
				'hasNumberOfSublevel': self.hasNumberOfSublevel, 
				'hasOccupantLoad': self.hasOccupantLoad, 
			} 
