from django.contrib import admin
from .models import Homepage

class HomepageAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description', 'enabled')
    search_fields = ('title',)
    list_filter = ('enabled',)

# Register your models here.
admin.site.register(Homepage, HomepageAdmin)