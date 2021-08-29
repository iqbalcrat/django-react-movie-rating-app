from django.contrib import admin
from .models import Movie, Rating
# Register your models here.

class RatingAdmin(admin.ModelAdmin):
    list_display = ['movie', 'user', 'stars']


admin.site.register(Movie)
admin.site.register(Rating, RatingAdmin)