from django.urls import path
from . import views as my_views
from Products.views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'farmers', FarmerViewSet)

urlpatterns = [
    path("", my_views.products, name="products-url"),
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', RegisterUser.as_view(), name='register'),
    path('products/', ProductListView.as_view(), name='list-products'),
    path('products/create/', CreateProduct.as_view(), name='create-product'),
    path('products/<int:pk>/', RetrieveProduct.as_view(), name='retrieve-product'),
    path('products/<int:pk>/update/', UpdateProduct.as_view(), name='update-product'),
    path('products/<int:pk>/delete/', DeleteProduct.as_view(), name='delete-product'),
]
