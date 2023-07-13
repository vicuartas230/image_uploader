from rest_framework import serializers

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
