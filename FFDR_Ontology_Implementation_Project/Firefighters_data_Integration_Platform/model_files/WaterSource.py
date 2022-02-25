from django.db import models

'''
The 'WaterSource' class represents different water sources that can be
used for fire suppression.
'''
class WaterSource(models.Model):
		hasFireFlow = models.FloatField()
		isFunctional = models.BooleanField()
