from django.test import TestCase
from django.test.client import Client

virtual_client = Client()

response = virtual_client.post('/auth/users/', {'email':'admin@gmail.com', 'username': 'admin', 'password': 'admin'})

print(response)
