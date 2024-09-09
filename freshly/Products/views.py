




from rest_framework import viewsets
from django.shortcuts import render, redirect
from .forms import ProductForm
from .models import Farmer
from django.contrib import messages
from .serializers import FarmerSerializer


def products(request):
    return render(request, "Products/products.html")


class FarmerViewSet(viewsets.ModelViewSet):
    queryset = Farmer.objects.all()
    serializer_class = FarmerSerializer




from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404

from .models import Product
from .serializers import ProductSerializer

class CreateProduct(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RetrieveProduct(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        product = get_object_or_404(Product, id=pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data)

class UpdateProduct(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        product = get_object_or_404(Product, id=pk)
        serializer = ProductSerializer(product, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DeleteProduct(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, pk):
        product = get_object_or_404(Product, id=pk)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)




from rest_framework.views import APIView
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer

class ProductListView(APIView):
    def get(self, request, *args, **kwargs):
        # Filter products based on the search query parameter
        search_query = request.query_params.get('name')
        if search_query is not None:
            filtered_products = Product.objects.filter(name__icontains=search_query)
        else:
            filtered_products = Product.objects.all()

        paginator = PageNumberPagination()
        paginator.page_size = 10  # Set the number of items per page
        result_page = paginator.paginate_queryset(filtered_products, request)

        serializer = ProductSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)




from .models import *
from .serializers import *
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.validators import UnicodeUsernameValidator
import os
from django.db import IntegrityError


class RegisterUser(APIView):

    def post(self, request):
        data = request.data

        # Check password length
        if len(data['password']) < 8:
            content = {'detail': 'Password must be at least 8 characters long.'}
            return Response(content, status=status.HTTP_400_BAD_REQUEST)

        # Check password for username and email
        username_validator = UnicodeUsernameValidator()
        if username_validator(data['password']):
            content = {'detail': 'Password cannot contain username or email.'}
            return Response(content, status=status.HTTP_400_BAD_REQUEST)

        # Check for minimum number of upper and lowercase characters
        uppercase_count = sum(1 for c in data['password'] if c.isupper())
        lowercase_count = sum(1 for c in data['password'] if c.islower())
        if uppercase_count < 1 or lowercase_count < 1:
            content = {'detail': 'Password must contain at least one uppercase and lowercase character.'}
            return Response(content, status=status.HTTP_400_BAD_REQUEST)

        # Check for minimum number of digits and special characters
        digit_count = sum(1 for c in data['password'] if c.isdigit())
        special_count = sum(1 for c in data['password'] if not c.isalnum())
        if digit_count < 1 or special_count < 1:
            content = {'detail': 'Password must contain at least one digit and one special character.'}
            return Response(content, status=status.HTTP_400_BAD_REQUEST)

        # Create user
        try:
            user = CustomUser.objects.create_user(
                first_name=data['name'],
                username=data['email'],
                email=data['email'],
                password=data['password'],
            )




        except IntegrityError:
            message = {'detail': 'User with this email already exists.'}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)

        serializer = UserSerializer(user, many=False)
        return Response(serializer.data)





class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
       def validate(self, attrs: dict[str, any]) -> dict[str, str]:
        data = super().validate(attrs)
        serializer = UserSerializerWithToken(self.user).data

        for k, v in serializer.items():
            data[k] = v



        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

