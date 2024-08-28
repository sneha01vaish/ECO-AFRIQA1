from rest_framework.exceptions import ValidationError
import re
from django.contrib.auth import get_user_model

User = get_user_model()

def validate_email(email):
    if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
        raise ValidationError("Invalid email format.")
    if User.objects.filter(email=email).exists():
        raise ValidationError("Email is already registered.")
    return email

def validate_password(password):
    if len(password) < 8:
        raise ValidationError("Password must be at least 8 characters long.")
    if not any(char.isdigit() for char in password):
        raise ValidationError("Password must contain at least one numeral.")
    if not any(char.isalpha() for char in password):
        raise ValidationError("Password must contain at least one letter.")
    if not any(char in "!@#$%^&*()_+-=[]{};:'\"\\|,.<>/?`~" for char in password):
        raise ValidationError("Password must contain at least one special character.")
    return password

def validate_phone(phone):
    # Check if phone is a digit and has the appropriate length (e.g., 10 digits for a standard phone number)
    if not re.match(r"^\d{10}$", phone):
        raise ValidationError("Phone number must be 10 digits long.")
    if User.objects.filter(phone=phone).exists():
        raise ValidationError("Phone number is already registered.")
    return phone

def custom_validation(data):
    # Ensure required fields are present
    if 'email' not in data or 'password' not in data or 'phone' not in data:
        raise ValidationError("Email, password, and phone are required.")
    
    # Validate email
    validate_email(data['email'])
    
    # Validate password
    validate_password(data['password'])

    # Validate phone
    validate_phone(data['phone'])

    # Confirm password validation (if applicable)
    if 'confirm_password' in data and data['password'] != data['confirm_password']:
        raise ValidationError("Passwords do not match.")
