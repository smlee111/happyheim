from django.db import models

class Announcement(models.Model):
    title = models.CharField(verbose_name='TITLE', max_length=50)
    xLoc = models.IntegerField('XLOC', null=True)
    yLoc = models.IntegerField('YLOC', null=True)
    city = models.CharField('CITY', max_length=50)


    def __str__(self):
        return self.title
