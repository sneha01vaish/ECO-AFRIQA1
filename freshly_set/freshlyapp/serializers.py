from rest_framework import serializers
from .models import Blog, Product, Garden


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class GardenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Garden
        fields = ['id', 'name', 'location', 'size', 'description']

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id', 'title', 'content', 'slug', 'image', 'created_at', 'updated_at']
