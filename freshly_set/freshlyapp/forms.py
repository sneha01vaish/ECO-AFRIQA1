from django import forms
from .models import Product, Service

class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ['name', 'description', 'price', 'image']

class ServiceRequestForm(forms.ModelForm):
    class Meta:
        model = Service
        fields = ['type', 'description', 'price']
