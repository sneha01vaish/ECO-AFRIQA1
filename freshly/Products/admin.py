from django.contrib import admin
from django.apps import apps
from .models import *
from django.contrib.auth.admin import UserAdmin




class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('email', 'username',)
    list_filter = ('email', 'username', 'is_staff', 'is_active')
    fieldsets = (
        (None, {'fields': ('email', 'username', 'password')}),
        ('Personal Info', {'fields': ()}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'user_permissions',)}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'password1', 'password2', 'is_active', 'is_staff', 'is_superuser','user_permissions', ),
        }),
    )
    search_fields = ('email',)
    ordering = ('email',)



admin.site.register(CustomUser, CustomUserAdmin)
# Get all models from the current app
admin.site.register(Product)
admin.site.register(Farmer)
admin.site.register(Review)
admin.site.register(Category)




