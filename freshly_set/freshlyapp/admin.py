from django.contrib import admin
from .models import *

# Register your models here.

from .models import Product, Garden, Service, Blog
#admin.site.register(AppUser)
admin.site.register(Product)
class ProductModelAdmin(admin.ModelAdmin):
    fields = ['name', 'description', 'price', 'image']

admin.site.register(Garden)
class GardenModelAdmin(admin.ModelAdmin):
    fields = ['name', 'location', 'size', 'description']

admin.site.register(Service)
class ServiceModelAdmin(admin.ModelAdmin):
    fields = ['type', 'description', 'price']

admin.site.register(Blog)
class BlogModelAdmin(admin.ModelAdmin):
    fields = ['id', 'title', 'content', 'slug', 'image', 'created_at', 'updated_at']

