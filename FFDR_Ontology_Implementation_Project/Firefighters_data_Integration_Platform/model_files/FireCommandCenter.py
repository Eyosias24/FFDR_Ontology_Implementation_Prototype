from django.db import models
from .ControlPanel import ControlPanel
from .IncidentBuilding import IncidentBuilding
'''
The 'FireCommandCenter' class represents A fire command center, which
is a dedicated room or area where fire protection systems, alarms, and
other emergency systems are monitored and controlled (NFPA 72).
'''
class FireCommandCenter(models.Model):
	hasProjectName = models.ForeignKey(IncidentBuilding, on_delete=models.DO_NOTHING)
	contains = models.ForeignKey(ControlPanel, on_delete=models.DO_NOTHING, blank=True, null=True)
	hasKeyLocated = models.TextField(blank=True)
	hasLocation = models.TextField(blank=True)


	def serialize(self):
		return {
			'hasProjectName': self.hasProjectName,
			'contains': self.contains.serialize() if not self.contains == None else '', 
			'hasKeyLocated': self.hasKeyLocated, 
			'hasLocation': self.hasLocation, 
		} 
