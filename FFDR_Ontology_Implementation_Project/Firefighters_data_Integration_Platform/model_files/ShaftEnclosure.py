from django.db import models
from .FireandSmokeProtectionElement import FireandSmokeProtectionElement
'''
The 'ShaftEnclosure' class represents a shaft enclosure that protects
vertical openings.
'''
class ShaftEnclosure(FireandSmokeProtectionElement):
	def serialize(self):
		return super().serialize()  
