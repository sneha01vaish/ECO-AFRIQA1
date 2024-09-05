from django.shortcuts import render, redirect
from django.middleware.csrf import get_token
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponseNotAllowed, JsonResponse
from .models import Product, Garden, Service, Blog,Cart
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

from .forms import SignUpForm
from django.contrib.auth.forms import AuthenticationForm
from rest_framework import generics, permissions
from rest_framework import viewsets
from rest_framework.decorators import api_view, permission_classes, action
from rest_framework.views import APIView
from .models import Blog, Comment, Like, Share, Poll, VoteNode
from django.db.models import Q
from rest_framework.generics import get_object_or_404
from .serializers import BlogSerializer, ProductSerializer, GardenSerializer, CommentSerializer, LikeSerializer, ShareSerializer,PollSerializer, VoteNodeSerializer,CartSerializer
from django.shortcuts import render
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions, status
from django.contrib.auth import get_user_model, login, logout
from .serializers import UserRegisterSerializer, UserLoginSerializer, UserSerializer
from rest_framework.validators import UniqueValidator
from .validators import custom_validation , validate_email, validate_password # Import your custom validation here
#csrf_protect_method = method_decorator(csrf_protect)


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
#class Blogs(APIView):
    #permission_classes = (AllowAny,)
    #authentication_classes = ()
    #@csrf_protect_method
@csrf_exempt
def blogs(request):
    if request.user.is_authenticated:
    #renderer_classes = [JSONRenderer]
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
            messages.error(self.request, 'No user is associated with this email address.')
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
def search_blog(request):
    query = request.query_params.get('q', '')
    if query:
        blogs = Blog.objects.filter(Q(title__icontains=query) | Q(content__icontains=query))
    else:
        blogs = Blog.objects.all()
    
    serializer = BlogSerializer(blogs, many=True)
    return Response(serializer.data)

# Polls 
class PollListView(generics.ListCreateAPIView):
    queryset = Poll.objects.all()
    serializer_class = PollSerializer

class PollDetailView(generics.RetrieveAPIView):
    queryset = Poll.objects.all()
    serializer_class = PollSerializer

class PollCreateView(generics.CreateAPIView):
    queryset = Poll.objects.all()
    serializer_class = PollSerializer

class PollUpdateView(generics.UpdateAPIView):
    queryset = Poll.objects.all()
    serializer_class = PollSerializer

class PollDeleteView(generics.DestroyAPIView):
    queryset = Poll.objects.all()
    serializer_class = PollSerializer

# VoteNode Views
class VoteNodeListView(generics.ListAPIView):
    queryset = VoteNode.objects.all()
    serializer_class = VoteNodeSerializer

class VoteNodeDetailView(generics.RetrieveAPIView):
    queryset = VoteNode.objects.all()
    serializer_class = VoteNodeSerializer

# Custom vote adding view (function-based)
def add_vote(request, pk):
    poll = get_object_or_404(Poll, pk=pk)
    choice = request.data.get('choice')
    if choice:
        new_vote = VoteNode.objects.create(poll=poll, choice=choice)
        
        # If poll has no votes, set the new vote as the head
        if poll.head is None:
            poll.head = new_vote
            poll.save()
        else:
            # Traverse to the end of the list and add the new vote
            node = poll.head
            while node.next_vote is not None:
                node = node.next_vote
            node.next_vote = new_vote
            node.save()

        return JsonResponse({'status': 'vote added'}, status=status.HTTP_201_CREATED)
    return JsonResponse({'error': 'Invalid vote data'}, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET']) #we are seeing the cart state
def get_cart_instance(request):
    if request.user.is_authenticated:
        cart, created = Cart.objects.get_or_create(user=request.user)
    else:
        session_id = request.session.session_key
        if not session_id:
            request.session.create()
            session_id = request.session.session_key
        cart, created = Cart.objects.get_or_create(session_id=session_id)
    return cart

@api_view(['POST'])
def add_to_cart(request):
    cart = get_cart_instance(request)
    product_id = request.data.get("product_id")
    quantity = request.data.get("quantity", 1)
    price = request.data.get("price")

    if product_id and price and quantity:
        cart.product_ids.append(product_id)
        cart.quantities.append(quantity)
        cart.prices.append(price)
        cart.save()
        return Response(CartSerializer(cart).data)
    else:
        return Response({"error": "Product ID, quantity, and price are required"}, status=400)
 

@api_view(['POST'])
def update_quantity(request):
    cart=get_cart_instance(request)
    product_id=request.data.get("product_id")
    quantity=request.data.get("quantity",1)

    if product_id in cart.product_ids:
        index=cart.product_ids.index(product_id)

        cart.quantities[index] += quantity 

        cart.save()


        return Response(CartSerializer(cart).data)
    

    return Response({"error": "Product not found in cart"}, status=400)


@api_view(['POST'])
def remove_from_cart(request):
    cart=get_cart_instance(request)
    product_id=request.data.get("product_id")

    if product_id in cart.product_ids:
        index = cart.product_ids.index(product_id)
        
        cart.product_ids.pop(index)
        cart.quantities.pop(index)
        cart.prices.pop(index)
        cart.save()
        return Response({"message" : "Product removed successfully"}, status=200)
    
    return Response({"error": "Product not found"},status=400)
