# from argon2 import hash_password
from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify
from django.utils.translation import gettext_lazy as _
from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.conf import settings
from django.contrib.auth.models import User

"""
class AppUserManager(BaseUserManager):

    use_in_migrations = True

    def _create_user(self, email, name, phone, password, **extra_fields):

        values = [email, name, phone]
        field_value_map = dict(zip(self.model.REQUIRED_FIELDS, values))

        for field_name, value in field_value_map.items():
            if not value:
                raise ValueError('The {} value must be set'.format(field_name))

        email = self.normalize_email(email)

        user = self.model(
            email=email,
            name=name,
            phone=phone,
            **extra_fields
        )

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_user(self, email, name, phone, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, name, phone, password, **extra_fields)

    def create_superuser(self, email, name, phone, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        
        return self._create_user(email, name, phone, password, **extra_fields)

class AppUser(AbstractBaseUser, PermissionsMixin):
    user_id = models.AutoField(primary_key=True)
    email = models.EmailField(max_length=255, unique=True)
    username = models.CharField(max_length=32, blank=False, null=False)
    name = models.CharField(max_length=50, blank=True)
    phone = models.CharField(max_length=30, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=True)

    objects = AppUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [
        'username', 
        'name',  
        'phone'
    ]

    def __str__(self):
        return self.email
"""

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=15, blank=True, null=True)
    location = models.CharField(max_length=100, blank=True, null=True)
    remember_me = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username
class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='products/')

    def __str__(self):
        return self.name


class Garden(models.Model):
    name = models.CharField(max_length=100, default='DEFAULT VALUE')
    location = models.CharField(max_length=255)
    size = models.CharField(max_length=100)
    features = models.TextField()
    description = models.CharField(max_length=140, default='DEFAULT VALUE')

    def __str__(self):
        return self.location


class Service(models.Model):
    SERVICE_TYPES = (
        ('installation', 'Installation'),
        ('consultation', 'Consultation'),
        ('rental', 'Renting Equipment'),
        ('selling', 'Selling Equipment'),
    )
    type = models.CharField(max_length=50, choices=SERVICE_TYPES)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f'{self.get_type_display()} - {self.price}'


class Blog(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True,  # Allow null temporarily
                             blank=True)  # Allow blank temporarily
    title = models.CharField(max_length=200)
    content = models.TextField()
    comments = models.IntegerField(default=0)
    likes = models.IntegerField(default=0)
    shares = models.IntegerField(default=0)
    slug = models.SlugField(max_length=200, unique=True, blank=True)
    image = models.ImageField(upload_to='blog_images/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = _("Blog")
        verbose_name_plural = _("Blogs")

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

# Added models for Comment, Like, and Share.


class Comment(models.Model):
    blog = models.ForeignKey(
        Blog, related_name='blog_comments', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.content


class Like(models.Model):
    blog = models.ForeignKey(
        Blog, related_name='blog_likes', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('blog', 'user')


class Share(models.Model):
    blog = models.ForeignKey(
        Blog, on_delete=models.CASCADE, related_name='blog_shares')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    shared_at = models.DateTimeField(auto_now_add=True)


# Poll for voting best products
class Poll(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    head = models.ForeignKey('VoteNode', null=True, blank=True,
                             on_delete=models.SET_NULL, related_name='head_of_poll')

    def __str__(self):
        return self.title

    def count_votes(self):
        count = 0
        node = self.head
        while node is not None:
            count += 1
            node = node.next_vote
        return count


class VoteNode(models.Model):
    poll = models.ForeignKey(Poll, related_name='votes',
                             on_delete=models.CASCADE)
    choice = models.CharField(max_length=200)
    next_vote = models.OneToOneField(
        'self', null=True, blank=True, on_delete=models.SET_NULL)

    def __str__(self):
        return f"Vote for {self.choice} in poll {self.poll.title}"
