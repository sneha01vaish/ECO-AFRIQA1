from .models import CartItem
from .serializers import CartSerializer, CartItemSerializer
from rest_framework.pagination import PageNumberPagination
from .serializers import ProductSerializer
from django.shortcuts import render, redirect
from django.middleware.csrf import get_token
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponseNotAllowed, JsonResponse
from .models import Product, Garden, Service, Blog, Banner
from .forms import ProductForm, ServiceRequestForm
from django.contrib import messages
from django.shortcuts import render, get_object_or_404, redirect
from .forms import BlogForm
from django.contrib.auth.views import PasswordResetView
from django.contrib.auth.forms import PasswordResetForm
from django.core.mail import send_mail
from django.urls import reverse_lazy
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework.permissions import AllowAny
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from rest_framework import generics, permissions
from rest_framework import viewsets
from rest_framework.decorators import api_view, permission_classes, action
from rest_framework.views import APIView
from .models import Blog, Comment, Like, Share, Poll, Vote, IDVerification, Cart, Category
from django.db.models import Q
from rest_framework.generics import get_object_or_404
from .serializers import BlogSerializer, ProductSerializer, GardenSerializer, CommentSerializer, LikeSerializer, ShareSerializer, PollSerializer, VoteSerializer, IDVerificationSerializer, CartSerializer, BannerSerializer, CategorySerializer
from django.shortcuts import render
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions, status
from django.contrib.auth import get_user_model, login, logout
from .serializers import UserRegisterSerializer, UserLoginSerializer, UserSerializer
from rest_framework.validators import UniqueValidator
# Import your custom validation here
from .validators import custom_validation, validate_email, validate_password
# csrf_protect_method = method_decorator(csrf_protect)
from django.utils import timezone


# This is for typical django frontend html

from rest_framework import status
import logging

logger = logging.getLogger(__name__)

"""
class UserRegister(APIView):
    permission_classes =(permissions.AllowAny,)
    throttle_classes = []

    def post(self, request):
        clean_data = custom_validation(request.data)
        serializer = UserRegisterSerializer(data=clean_data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.create(clean_data)
            if user:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

class UserLogin(APIView):
     permission_classes =(permissions.AllowAny,)
     authentication_classes=(SessionAuthentication,)
     throttle_classes = []

     def post(self, request):
         data = request.data
         assert validate_email(data)
         assert validate_password(data)
         serializer = UserLoginSerializer(data=data)
         if serializer.is_valid(raise_exception=True):
             user= serializer.check_user(data)
             login(request, user)
             return Response(serializer.data, status= status.HTTP_200_OK)

class UserView(APIView):
    permission_classes = (permissions,IsAuthenticated, )
    authentication_classes = (SessionAuthentication,)
    throttle_classes = []


    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'user':serializer.data}, status=status.HTTP_200_OK)

class UserLogout(APIView):
 throttle_classes = []

    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)
"""


def index(request):
    get_token(request)
    return render(request, 'index.html')


def home(request):
    return render(request, 'index.html')


def about(request):
    return render(request, 'about.html')


@api_view(['GET'])
# class Blogs(APIView):
# permission_classes = (AllowAny,)
# authentication_classes = ()
# @csrf_protect_method
@csrf_exempt
def blogs(request):
    if request.user.is_authenticated:
        # renderer_classes = [JSONRenderer]
        return render(request, 'blogs/BlogForm.jsx')


@login_required
def products(request):
    if request.method == 'POST':
        form = ProductForm(request.POST, request.FILES)
        if form.is_valid():
            product = form.save(commit=False)
            product.user = request.user
            product.save()
            return redirect('products')
    else:
        form = ProductForm()
    products = Product.objects.filter(user=request.user)
    return render(request, 'products.html', {'products': products, 'form': form})


@login_required
def services(request):
    if request.method == 'POST':
        form = ServiceRequestForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('services')
    else:
        form = ServiceRequestForm()
    services = Service.objects.all()
    return render(request, 'services.html', {'services': services, 'form': form})


@login_required
def profile(request):
    return render(request, 'profile.html')


# The blog CRUD
@csrf_exempt
def blog_list(request):
    if request.method == 'GET':
        blogs = Blog.objects.all()
        return render(request, 'blog_list.html', {'blogs': blogs})
    else:
        return HttpResponseNotAllowed(['GET'])


@csrf_exempt
def blog_detail(request, slug):
    blog = get_object_or_404(Blog, slug=slug)
    return render(request, 'blog_detail.html', {'blog': blog})


@api_view(['GET', 'POST'])
@csrf_exempt
@permission_classes([AllowAny])
def blog_create(request):
    if request.method == 'POST':
        form = BlogForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('blogs/BlogForm.jsx')
    else:
        form = BlogForm()
    return render(request, 'blogs/BlogForm.jsx', {'form': form})


@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def blog_create(request):
    serializer = BlogSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@csrf_exempt
def blog_update(request, slug):
    blog = get_object_or_404(Blog, slug=slug)
    if request.method == 'POST':
        form = BlogForm(request.POST, request.FILES, instance=blog)
        if form.is_valid():
            form.save()
            return redirect('blog_detail', slug=blog.slug)
    else:
        form = BlogForm(instance=blog)
    return render(request, 'blogs/BlogForm.jsx', {'form': form})


def blog_delete(request, slug):
    blog = get_object_or_404(Blog, slug=slug)
    if request.method == 'POST':
        blog.delete()
        return redirect('blog_list')
    return render(request, 'blog_confirm_delete.html', {'blog': blog})

# Implemented views for CRUD operations and like/share actions


class BlogListView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

    def list(self, request, *args, **kwargs):
        logger.info(f"Request method: {request.method}")
        logger.info(f"Request data: {request.data}")
        return super().list(request, *args, **kwargs)


class BlogListCreateView(generics.ListCreateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    permission_classes = [AllowAny]  # This allows unauthenticated access

    def perform_create(self, serializer):
        serializer.save()

    def get_queryset(self):
        queryset = super().get_queryset()
        search_query = self.request.query_params.get('search', None)
        if search_query:
            queryset = queryset.filter(
                Q(title__icontains=search_query) |
                Q(content__icontains=search_query)
            )
        return queryset


"""
    def blog_create(request):
        if request.method == 'POST':
            form = BlogForm(request.POST, request.FILES)
            if form.is_valid():
                form.save()
                return redirect('blogs/BlogForm.jsx')
        else:
            form = BlogForm()
        return render(request, 'blogs/BlogForm.jsx', {'form': form})
"""


@csrf_exempt
@api_view(['POST', 'GET'])
@permission_classes([AllowAny])
def Register(request):
    # Validate the input data
    serializer = UserRegisterSerializer(data=request.data)

    if serializer.is_valid():
        # Check if the user already exists
        username = serializer.validated_data.get('username')
        email = serializer.validated_data.get('email')
        if User.objects.filter(username=username).exists():
            return Response({"error": "This username already exists."}, status=status.HTTP_400_BAD_REQUEST)
        if User.objects.filter(email=email).exists():
            return Response({"error": "An account with this email already exists."}, status=status.HTTP_400_BAD_REQUEST)

        # Save the user if validation passes
        user = serializer.save()
        refresh = RefreshToken.for_user(user)
        return Response({
            "message": "Signup successful!",
            "refresh": str(refresh),
            "access": str(refresh.access_token),
        }, status=status.HTTP_201_CREATED)

    # Return errors if validation fails
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@csrf_exempt
@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    # Authenticate the user
    user = authenticate(request, username=email, password=password)

    if user is not None:
        # If authentication is successful, generate a token
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'user_id': user.id,
            'email': user.email,
        }, status=status.HTTP_200_OK)
    else:
        # If authentication fails
        return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class BlogRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer


class CommentListCreateAPIView(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class CommentRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class LikeCreateAPIView(generics.CreateAPIView):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ShareCreateAPIView(generics.CreateAPIView):
    queryset = Share.objects.all()
    serializer_class = ShareSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class CustomPasswordResetView(PasswordResetView):
    email_template_name = 'password_reset_email.html'
    success_url = reverse_lazy('password_reset_done')
    template_name = 'password_reset.html'
    form_class = PasswordResetForm

    def form_valid(self, form):
        email = form.cleaned_data['email']
        if User.objects.filter(email=email).exists():
            return super().form_valid(form)
        else:
            messages.error(
                self.request, 'No user is associated with this email address.')
            return self.form_invalid(form)


# serialiser
class GardenListCreateAPIView(generics.ListCreateAPIView):
    queryset = Garden.objects.all()
    serializer_class = GardenSerializer


class GardenRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Garden.objects.all()
    serializer_class = GardenSerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class BlogViewSet(viewsets.ModelViewSet):
    permission_classes = (AllowAny,)
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    lookup_field = 'slug'

    def retrieve(self, request, slug=None):
        queryset = self.get_queryset()
        blog = get_object_or_404(queryset, slug=slug)
        serializer = BlogSerializer(blog)
        return Response(serializer.data)


# query for blog articles
"""
- The search_blog function handles HTTP GET requests to search for blog posts by title or content.
- If a query parameter q is provided, it filters the blog posts to include those where the title or
 content contains the query string.
- If no query is provided, it returns all blog posts.
- The result is returned as a JSON response with only the id, title, and content fields.
"""


@api_view(['GET'])
@permission_classes([AllowAny])
def search_blog(request):
    query = request.query_params.get('q', '')
    if query:
        blogs = Blog.objects.filter(
            Q(title__icontains=query) | Q(content__icontains=query))
    else:
        blogs = Blog.objects.all()

    serializer = BlogSerializer(blogs, many=True)
    return Response(serializer.data)

# Polls


class PollListCreateView(generics.ListCreateAPIView):
    queryset = Poll.objects.all()
    serializer_class = PollSerializer
    permission_classes = (AllowAny,)

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


class PollDetailView(generics.RetrieveAPIView):
    queryset = Poll.objects.all()
    serializer_class = PollSerializer


class VoteCreateView(generics.CreateAPIView):
    serializer_class = VoteSerializer
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        poll = get_object_or_404(Poll, pk=kwargs['pk'])
        choice = request.data.get('choice')

        if choice not in dict(Vote.CHOICES).keys():
            return Response({'error': 'Invalid choice'}, status=status.HTTP_400_BAD_REQUEST)

        vote, created = Vote.objects.update_or_create(
            poll=poll, user=request.user,
            defaults={'choice': choice}
        )

        if created:
            return Response({'status': 'Vote added'}, status=status.HTTP_201_CREATED)
        else:
            return Response({'status': 'Vote updated'}, status=status.HTTP_200_OK)


# Verification photo and Id views
# install bot03
# to configure aws cli for face recogniotn.
class VerifyIDView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            verification = request.user.id_verification
            if verification.verify_user():
                return Response({"message": "User successfully verified."}, status=status.HTTP_200_OK)
            else:
                return Response({"message": "Verification failed. ID or photo did not match."}, status=status.HTTP_400_BAD_REQUEST)
        except IDVerification.DoesNotExist:
            return Response({"error": "ID verification record not found."}, status=status.HTTP_404_NOT_FOUND)


class IDVerificationUpdateView(generics.UpdateAPIView):
    queryset = IDVerification.objects.all()
    serializer_class = IDVerificationSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user.id_verification

    def put(self, request, *args, **kwargs):
        verification_instance = self.get_object()
        serializer = self.get_serializer(
            verification_instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"message": "User successfully verified."}, status=status.HTTP_200_OK)


class IDVerificationDetailView(generics.RetrieveAPIView):
    queryset = IDVerification.objects.all()
    serializer_class = IDVerificationSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user.id_verification


# PRODUCT ENDPOINTS


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
        serializer = ProductSerializer(
            product, data=request.data, partial=True)
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


@permission_classes([AllowAny])
class ProductListView(APIView):
    def get(self, request, *args, **kwargs):
        # Filter products based on the search query parameter
        search_query = request.query_params.get('name')
        if search_query is not None:
            filtered_products = Product.objects.filter(
                name__icontains=search_query)
        else:
            filtered_products = Product.objects.all()

        paginator = PageNumberPagination()
        paginator.page_size = 10  # Set the number of items per page
        result_page = paginator.paginate_queryset(filtered_products, request)

        serializer = ProductSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)


# # Banner for Marketplace Page
@permission_classes([AllowAny])
class BannerListView(generics.ListAPIView):
    queryset = Banner.objects.filter(active=True).order_by('-created_at')
    serializer_class = BannerSerializer


# Category Views

@permission_classes([AllowAny])
class CategoryListCreateView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


@permission_classes([AllowAny])
class CategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


# Cart Endpoints
@api_view(['GET'])
def get_cart_instance(request):
    # Check if user is authenticated
    if request.user.is_authenticated:
        cart, created = Cart.objects.get_or_create(user=request.user)
    else:
        # Use session for non-authenticated users
        session_id = request.session.session_key
        if not session_id:
            request.session.create()
            session_id = request.session.session_key
        cart, created = Cart.objects.get_or_create(session_id=session_id)

    # Serialize the cart data
    cart_data = CartSerializer(cart).data

    # Return the cart along with its items in the response
    return Response(cart_data, status=status.HTTP_200_OK)


def get_cart_instance2(request):
    # Assuming the user is logged in, get or create the user's cart.
    user = request.user
    cart, created = Cart.objects.get_or_create(user=user)
    return cart


@api_view(['POST'])
def add_to_cart(request):
    cart = get_cart_instance2(request)
    product_id = request.data.get("product_id")
    quantity = request.data.get("quantity", 1)

    if not product_id:
        return Response({"error": "Product ID is required"}, status=status.HTTP_400_BAD_REQUEST)

    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist:
        return Response({"error": "Invalid product ID"}, status=status.HTTP_404_NOT_FOUND)

    # Check if the product already exists in the cart
    if CartItem.objects.filter(cart=cart, product_id=product_id).exists():
        return Response({"error": "This item already exists in the cart. Use the update quantity option instead."}, status=status.HTTP_400_BAD_REQUEST)

    cart_item_data = {
        'cart': cart.id,
        'product': product.id,
        'quantity': quantity
    }

    serializer = CartItemSerializer(
        data=cart_item_data, context={'cart_id': cart.id})
    if serializer.is_valid():
        cart_item, created = CartItem.objects.get_or_create(
            cart=cart, product=product)
        cart_item.quantity += int(quantity)
        cart_item.save()
        return Response(CartSerializer(cart).data, status=status.HTTP_200_OK)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def update_quantity(request):
    # Ensure this returns the cart object, not serialized data
    cart = get_cart_instance2(request)
    product_id = request.data.get("product_id")
    new_quantity = request.data.get("quantity")

    if not product_id:
        return Response({"error": "Product ID is required"}, status=status.HTTP_400_BAD_REQUEST)

    if new_quantity is None or int(new_quantity) <= 0:
        return Response({"error": "A valid quantity is required"}, status=status.HTTP_400_BAD_REQUEST)

    # Check if the product exists in the cart
    try:
        cart_item = CartItem.objects.get(cart=cart, product_id=product_id)
    except CartItem.DoesNotExist:
        return Response({"error": "Product not found in cart"}, status=status.HTTP_404_NOT_FOUND)

    cart_item_data = {
        'cart': cart.id,
        'product': product_id,
        'quantity': new_quantity
    }

    serializer = CartItemSerializer(cart_item, data=cart_item_data)
    if serializer.is_valid():
        serializer.save()
        return Response(CartSerializer(cart).data, status=status.HTTP_200_OK)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def remove_from_cart(request):
 cart = get_cart_instance2(request)  # Ensure this returns the cart object, not serialized data
 product_id = request.data.get("product_id")
 quantity= request.data.get("quantity")

 if not product_id:
        return Response({"error": "Product ID is required"}, status=status.HTTP_400_BAD_REQUEST)
 try:
        cart_item = CartItem.objects.get(cart=cart, product_id=product_id)
 except CartItem.DoesNotExist:
        return Response({"error": "Product not found in cart"}, status=status.HTTP_404_NOT_FOUND)

 if quantity is None:
        quantity = cart_item.quantity

 if quantity < 1:
        return Response({"error": "Quantity must be at least 1"}, status=status.HTTP_400_BAD_REQUEST)

 if quantity >= cart_item.quantity:
        # Remove item from cart if quantity to remove is greater than or equal to the existing quantity
        cart_item.delete()
        return Response({"success": "Item removed from cart"}, status=status.HTTP_200_OK)
 else:
        # Adjust the quantity of the cart item
        cart_item.quantity -= int(quantity)
        cart_item.save()
        return Response({"success": "Item quantity updated in cart"}, status=status.HTTP_200_OK)