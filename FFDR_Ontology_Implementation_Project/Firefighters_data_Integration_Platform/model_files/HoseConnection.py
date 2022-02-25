from django.db import models

'''
The 'HoseConnection' class represents different hose connections used
by firefighters during building fire emergencies.

Type could be threaded or quick- connect.
'''
class HoseConnection(models.Model):
		hasSize = models.FloatField()
		hasType = models.TextField()
