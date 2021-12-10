# from django.urls import path
from django.conf.urls import url
from django.views.decorators.csrf import csrf_exempt

from .views import *

urlpatterns = [
    url(r'^$', csrf_exempt(index), name='index'),
    url(r'^search/vision/$', csrf_exempt(search), name='Search plus Dynamic Search Analysis'),
    url(r'^filter/filter/', csrf_exempt(filtering), name='Combined filters'),
    url(r'^filter/poi/', csrf_exempt(poi_filter), name='Filter for POI'),
    url(r'^filter/lang/', csrf_exempt(lang_filter), name='Filter for Language'),
    url(r'^filter/topic/', csrf_exempt(topic_filter), name='Filter for Topic'),
    url(r'^filter/country/', csrf_exempt(country_filter), name='Filter for Topic')
]
