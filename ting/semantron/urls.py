# from django.urls import path
from django.conf.urls import url
from django.views.decorators.csrf import csrf_exempt

from .views import *

urlpatterns = [
    url(r'^$', csrf_exempt(index), name='index'),
    url(r'^search/vision/$', csrf_exempt(search), name='Search plus Dynamic Search Analysis'),
    url(r'^filter/poi/', csrf_exempt(poi_filter), name='Filter for POI')
    # url(r'^eta/product_page_eta', csrf_exempt(eta_product_page), name='Product page ETA'),
    # url(r'^eta/order_stuck_time', csrf_exempt(predict_digitization_priority), name='Predicting Order Time in PQ'),
    # url(r'^healthCheck', csrf_exempt(health_check), name='Health Check API'),
    # url(r'^models/SupportLensfaq', csrf_exempt(get_cat_subcat), name='supportlens_cat_prediction'),
    # url(r'^rx/info', csrf_exempt(rx_info_v2), name='Fetch Information from Rx'),
    # url(r'^rx/suggestions', csrf_exempt(rx_suggestions), name='Fetch Suggestions from Rx'),
    # url(r'^rx/feedback', csrf_exempt(rx_feedback), name='Save Feedback and fetch Suggestions for Rx'),
    # url(r'^fraud_detection/init', csrf_exempt(initialize_data), name='Initialize_data'),
    # url(r'^fraud_detection/is_fraud', csrf_exempt(get_probability), name='Whether order is fraud or not'),
    # url(r'^fraud_detection/linked_order_ids', csrf_exempt(get_linkage), name='Get linked orders'),
    # url(r'^get_sku_ranking', csrf_exempt(sku_ranking), name='SKU ranking')


]
