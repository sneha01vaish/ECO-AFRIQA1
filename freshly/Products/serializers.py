from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)


    




    class Meta:
        model = CustomUser
        fields = '__all__'


    def get__id(self, obj):
        return obj.id
    
    def get_isAdmin(self, obj):
        return obj.is_staff

        
    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email

        return name
    






class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = CustomUser
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
    


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'description']

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"



class ReviewSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)  # Nested serializer to display product details
    product_id = serializers.PrimaryKeyRelatedField(
        queryset=Product.objects.all(), source='product', write_only=True
    )  # To allow assignment of product by ID

    class Meta:
        model = Review
        fields = ['id', 'product', 'product_id', 'rating', 'comment', 'created_at']

class FarmerSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)  # Nested serializer to display product details
    product_id = serializers.PrimaryKeyRelatedField(
        queryset=Product.objects.all(), source='product', write_only=True
    )  # To allow assignment of product by ID

    class Meta:
        model = Farmer
        fields = ['id', 'product', 'product_id', 'name', 'email', 'phone']
