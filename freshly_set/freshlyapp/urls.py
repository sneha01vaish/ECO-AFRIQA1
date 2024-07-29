from django.contrib import admin
from django.urls import path
from django.contrib.auth import views as auth_views
from django.urls import re_path
from .views import CustomPasswordResetView, logout_view
from .forms import  MyPasswordChangeForm, MyPasswordResetForm, MySetPasswordForm
from . import views

from .views import (
    BlogListCreateAPIView, BlogRetrieveUpdateDestroyAPIView, 
    CommentListCreateAPIView, CommentRetrieveUpdateDestroyAPIView, 
    LikeCreateAPIView, ShareCreateAPIView
)

urlpatterns = [
    path('admin/', admin.site.urls),

    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('blogs/', views.blogs, name='blogs'),
    path('signup/', views.UserRegister.as_view(), name='register'),
    path('login/', views.UserLogin.as_view(), name='login'),
    path('logout/', views.UserLogout.as_view(), name='logout'),
    path('user/', views.UserView.as_view(), name='user'),
    path('products/', views.products, name='products'),
    path('services/', views.services, name='services'),
    path('profile/', views.profile, name='profile'),
    path('blogs/', BlogListCreateAPIView.as_view(), name='blog_list_create'),
    path('blogs/<int:pk>/', BlogRetrieveUpdateDestroyAPIView.as_view(), name='blog_detail'),
    path('comments/', CommentListCreateAPIView.as_view(), name='comment_list_create'),
    path('comments/<int:pk>/', CommentRetrieveUpdateDestroyAPIView.as_view(), name='comment_detail'),
    path('likes/', LikeCreateAPIView.as_view(), name='like_create'),
    path('shares/', ShareCreateAPIView.as_view(), name='share_create'),
]
