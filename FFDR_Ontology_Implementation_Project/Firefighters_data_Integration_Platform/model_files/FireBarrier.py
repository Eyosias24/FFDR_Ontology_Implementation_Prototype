from django.db import models
from .FireandSmokeProtectionElement import FireandSmokeProtectionElement

'''
The 'FireBarrier' class represents a fire barrier, which is a fire-
resistance-rated wall assembly of materials designed to restrict the
spread of fire in which continuity of the wall is maintained (IFC,
2018).
'''
class FireBarrier(FireandSmokeProtectionElement):
		hasEnclosedArea = models.TextField()
