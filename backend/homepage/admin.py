from django.contrib import admin

# Register your models here.
from .models import Homepage

class HomepageAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description', 'enabled')

# Register your models here.

admin.site.register(Homepage, HomepageAdmin)