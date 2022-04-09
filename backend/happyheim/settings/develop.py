from .base import *


SECRET_KEY = 'p&wj$lo*wjqkw(%9b*2-=x*r6xp8cc_d=h6ck(ox_xnpatv*g5'

DEBUG = True

ALLOWED_HOSTS = []

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}