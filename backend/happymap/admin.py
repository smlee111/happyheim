from django.contrib import admin

from happymap.models import Announcement

@admin.register(Announcement)
class AnnAdmin(admin.ModelAdmin):
    list_display = ('title', 'xLoc', 'yLoc', 'city')
