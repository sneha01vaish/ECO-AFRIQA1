from rest_framework import serializers
from .models import Blog, Product, Garden, Comment, Like, Share


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class GardenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Garden
        fields = ['id', 'name', 'location', 'size', 'description']

class BlogSerializer(serializers.ModelSerializer):
    comments = serializers.StringRelatedField(many=True)
    likes = serializers.StringRelatedField(many=True)
    shares = serializers.StringRelatedField(many=True)

    class Meta:
        model = Blog
        fields = ['id', 'title', 'content', 'created_at', 'updated_at', 'image', 'comments', 'likes', 'shares']

# Created serializers for Blog, Comment, Like, and Share.
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'blog', 'user', 'content', 'created_at', 'updated_at']

class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = ['id', 'blog', 'user']

class ShareSerializer(serializers.ModelSerializer):
    class Meta:
        model = Share
        fields = ['id', 'blog', 'user', 'shared_at']