from django.db import models
from PIL import Image

    
from django.db import models
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.urls import reverse
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import AbstractUser, BaseUserManager, Permission
from django.conf import settings
# Create your models here.
from django.utils import timezone



class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)





class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    objects = CustomUserManager()
    user_permissions = models.ManyToManyField(Permission, verbose_name='user permissions', blank=True)

    class Meta(AbstractUser.Meta):
        swappable = 'AUTH_USER_MODEL'

    def __str__(self):
        return self.email
    
    def tokens(self):    
        refresh = RefreshToken.for_user(self)
        return {
            "refresh": str(refresh),
            "access": str(refresh.access_token)
        }


class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()


    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=255)
    desc = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    qtty = models.IntegerField(default=0)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products', blank=True, null=True)
    image = models.ImageField(upload_to='static/images/Products', null=True, blank=True)  # Image field added here
    created_at = models.DateTimeField(auto_now_add=True,  blank=True, null=True)

    def __str__(self):
        return self.name

class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='reviews')
    rating = models.IntegerField()
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Review for {self.product.name} by {self.id}'

class Farmer(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='farmer', blank=True, null=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15)

    def __str__(self):
        return self.name
