from django.db import models
from .ControlPanel import ControlPanel

'''
The 'FireCommandCenter' class represents A fire command center, which
is a dedicated room or area where fire protection systems, alarms, and
other emergency systems are monitored and controlled (NFPA 72).
'''
class FireCommandCenter(models.Model):
		contains = models.ForeignKey(ControlPanel, on_delete=models.DO_NOTHING)
		hasKeyLocated = models.TextField()
		hasLocation = models.TextField()


		def serialize(self):
			return {
				'contains': self.contains, 
				'hasKeyLocated': self.hasKeyLocated, 
				'hasLocation': self.hasLocation, 
			} 
