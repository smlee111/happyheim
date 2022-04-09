from django.urls import path

from happymap import views


app_name = 'happymap'
urlpatterns = [
    path('list/', views.TestLV.as_view(), name='test_list')
]