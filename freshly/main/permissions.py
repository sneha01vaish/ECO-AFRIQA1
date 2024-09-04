from rest_framework import permissions
from rest_framework.permissions import BasePermission





class IsBuyer(BasePermission):
    def has_permission(self, request, view):
        return request.user.user_type in ['buyer']
    


class IsFarmer(BasePermission):
    def has_permission(self, request, view):
        return request.user.user_type in ['farmer']