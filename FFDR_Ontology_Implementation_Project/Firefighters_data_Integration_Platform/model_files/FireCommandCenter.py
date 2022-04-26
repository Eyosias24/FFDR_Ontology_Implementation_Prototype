from django.db import models
from .ControlPanel import ControlPanel
from .IncidentBuilding import IncidentBuilding
'''
The 'FireCommandCenter' class represents A fire command center, which
is a dedicated room or area where fire protection systems, alarms, and
other emergency systems are monitored and controlled (NFPA 72).
'''
class FireCommandCenter(models.Model):
	hasProjectName = models.ForeignKey(IncidentBuilding,null=True, on_delete=models.DO_NOTHING)
	contains = models.ManyToManyField(ControlPanel, blank=True, null=True)
	hasKeyLocated = models.CharField(blank=True, max_length=65)
	hasLocation = models.CharField(blank=True, max_length=65)


	def serialize(self):
		return {
			'hasProjectName': self.hasProjectName.serialize() if not self.hasProjectName == None else '', 			
			'hasKeyLocated': self.hasKeyLocated, 
			'hasLocation': self.hasLocation, 
		}

	def __str__(self):
		return f"Fire Command Center"   
