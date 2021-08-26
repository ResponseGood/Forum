import os
from pathlib import Path




BASE_DIR = Path(__file__).resolve().parent.parent.parent



SECRET_KEY = '3=m)w@4b%1x7jbosaek8r7$%-4vj370$)=y7b+nig^g002qqdo'


DEBUG = True

ALLOWED_HOSTS = []


INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'crispy_forms',
    'useroot.core',
    'drf_yasg',
    'djoser'
]

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    )
}

CRISPY_TEMPLATE_PACK = 'bootstrap4'

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'useroot.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR / 'front/build'),
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'useroot.wsgi.application'



DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}



AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


ACCOUNT_ACTIVATION_DAYS = 1

DEFAULT_FROM_EMAIL = 'noreply@yourdomain.com'

LANGUAGE_CODE = 'ru-rus'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = False

USE_TZ = False

DATE_FORMAT = '%H:%M'

EMAIL_HOST ='smtp.server' 

EMAIL_PORT = 25 

EMAIL_HOST_USER = 'username'

EMAIL_HOST_PASSWORD = 'secret'

EMAIL_USE_TLS = True

STATIC_URL = '/static/'

STATIC_ROOT = BASE_DIR / 'static'

ROOT_PATH = os.path.dirname(__file__)

STATICFILES_DIRS = [os.path.join(ROOT_PATH, 'static')]

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

STATICFILES_DIRS = [os.path.join(BASE_DIR, 'front/build/static')]


LOGIN_REDIRECT_URL =  '/'