from django.shortcuts import render
from core_module.search.search import getTweet
from core_module.search_analytics.dynamic_analyzer import DynamicAnalyzer
from django.shortcuts import render
from django.http import JsonResponse
import json

def index(request):
    return render(request, 'DsApp/index.html', {})

def search(request):
    print(request)
    try:
        load_query = request.body.decode('utf-8')
        query = json.loads(load_query)
        docs = getTweet(query['query_term'])

        # analysis = DynamicAnalyzer(docs)
        #
        # tweet_type = analysis.get_tweet_type()
        #
        # tweet_sentiment = analysis.get_sentiment()
        #
        # poi_distribution = analysis.get_poi_distribution()
        #
        # keyword_wc = analysis.get_hashtag_wc()
        #
        # extreme = analysis.get_xtreme_tweets()
        #
        # antivax = analysis.anti_vaxxer()
        return JsonResponse({'status': 200, 'body': docs})




    except Exception as e:

        response = {"message": "error {}".format(str(e))}
        return JsonResponse({'status': 500, 'body': response})


