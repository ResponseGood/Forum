import jwt
import random
import requests
from ..core import models
from .models import Code_2auth
from django.http import HttpResponse
from rest_framework import permissions
from datetime import datetime, timedelta
from rest_framework.views import APIView
from useroot.core.models import Post, User
from ..settings import SECRET_KEY, TG_TOKEN
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.exceptions import AuthenticationFailed
from django.core.serializers.json import DjangoJSONEncoder
from .serializers import PostsSerializer, UserPublicDataSerializer, UserSerializer

@action(detail=True, methods=["GET", "POST"])
class PostsView(APIView):
    permission_classes = [
        permissions.AllowAny
    ]
    def get(self, requset):
        queryset = Post.objects.all()
        serializer = PostsSerializer(queryset, many=True)
        return Response(serializer.data)
    def post(self, requset):
        return Response({"message_error":"You can't use a POST request for this method"})


@action(detail=True, methods=["GET"])
class PostView(APIView):
    permission_classes = [
        permissions.AllowAny
    ]
    def get(self, requset, pk):
        queryset = Post.objects.filter(id=pk).first()
        serializer = PostsSerializer(queryset)
        return Response(serializer.data)
    def post(self, requset, pk):
        return Response({"message_error":"You can't use a POST request for this method"})




class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        ip = request.META.get("REMOTE_ADDR")
        user = models.User.objects.filter(email=email).first()
        if user is None:
            raise AuthenticationFailed('User not found')
        if not user.check_password(password):
            raise AuthenticationFailed('Invalide password')

        payload = {'id': user.id, 'exp': datetime.utcnow() + timedelta(minutes=20), 'ait': datetime.utcnow()}
        token = jwt.encode(payload=payload, key=SECRET_KEY, algorithm='HS256', json_encoder=DjangoJSONEncoder).decode('utf-8')
        if user.two_factor_auth:
            message_method = f'https://api.telegram.org/bot{TG_TOKEN}/getUpdates?offset=-1'
            message_data = requests.post(message_method).json()['result']
            for elem in message_data:
                if elem['message']['from']['username'] == user.telegram_username:
                    user_id = elem['message']['chat']['id']
            random_code = random.randint(1000, 8000)
            requests.post(f'https://api.telegram.org/bot{TG_TOKEN}/sendMessage?chat_id={user_id}&text=Кто-то попытался зайти на ваш аккаунт!Код потверждения - {random_code}')
            try:
                code = Code_2auth.objects.get(username_telegram=user.telegram_username)
                code.delete()
            except Exception as e:
                print(e)
            finally:
                code = Code_2auth.objects.create(username_telegram=user.telegram_username,code=random_code)
                code.save()
            valide_token = Code_2auth.objects.get(username_telegram=user.telegram_username).valide_token
            response = HttpResponse(f'User have 2fa auth\nValidate token - {valide_token}')
            response.status_code = 201
            return response
        else:
            response = Response()
            response.set_cookie(key='JWT', value=token, httponly=True)
            response.data = {
                'JWT': token
            }
            return response

class UserView(APIView): 

    def get(self, request):
        token = request.COOKIES.get('JWT')

        if not token:
            raise AuthenticationFailed('Not Authorized!')
        try:
            payload = jwt.decode(jwt=token, key=SECRET_KEY, algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Not Authorized!')

        user = models.User.objects.filter(id=payload['id']).first()

        serializer = UserSerializer(user)

        return Response(serializer.data)


class UserPublicView(APIView): 
    def get(self, request, pk):
        token = request.COOKIES.get('JWT')
        if not token:
            raise AuthenticationFailed('Not Authorized!')
        try:
            payload = jwt.decode(jwt=token, key=SECRET_KEY, algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Not Authorized!')

        user = models.User.objects.filter(id=payload['id']).first()

        queryset = User.objects.filter(id=pk).first()

        serializer = UserPublicDataSerializer(queryset)

        return Response(serializer.data)
        
class LogoutView(APIView):
    def get(self, request):
        token = request.COOKIES.get('JWT')
        if not token:
            raise AuthenticationFailed('Not Authorized!')
        try:
            payload = jwt.decode(jwt=token, key=SECRET_KEY, algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Not Authorized!')
        response = Response()
        response.delete_cookie('JWT')
        response.data = {
            "message": "you've logged out"
        }
        return response

    def post(self, request):
        token = request.COOKIES.get('JWT')
        if not token:
            raise AuthenticationFailed('Not Authorized!')
        try:
            payload = jwt.decode(jwt=token, key=SECRET_KEY, algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Not Authorized!')
        response = Response()
        response.delete_cookie('JWT')
        response.data = {
            "message": "you've logged out"
        }
        return response

