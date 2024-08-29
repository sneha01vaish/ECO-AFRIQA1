from datetime import timezone
from django.contrib import admin
from .models import *
from .models import IDVerification

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

admin.site.register(Poll)
class PollModelAdmin(admin.ModelAdmin):
    fields = ['id', 'title', 'description', 'votes']



@admin.register(IDVerification)
class IDVerificationAdmin(admin.ModelAdmin):
    list_display = ('user', 'id_document_type', 'id_document_number', 'is_verified', 'submitted_at', 'verified_at')
    actions = ['mark_as_verified']

    def mark_as_verified(self, request, queryset):
        queryset.update(is_verified=True, verified_at=timezone.now())
        self.message_user(request, "Selected verifications have been marked as verified.")
    mark_as_verified.short_description = "Mark selected as verified"
