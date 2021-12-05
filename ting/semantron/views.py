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
        result = {}

        query = request.GET['query_term']
        docs = getTweet(query)

        analysis = DynamicAnalyzer(docs)

        tweet_type = analysis.get_tweet_types()

        tweet_sentiment = analysis.get_sentiment()

        poi_distribution = analysis.get_poi_distribution()

        keyword_wc = analysis.get_hashtag_wc()
        extreme = analysis.get_xtreme_tweets()
        antivax = analysis.anti_vaxxer()

        result['documents'] = docs
        result['tweet_type'] = tweet_type
        result['poi_dist'] = poi_distribution
        result['keywords'] = keyword_wc
        result['antivaccine_tweets'] = antivax
        result['extreme'] = extreme
        result['tweet_sentiment']


        return JsonResponse({'status': 200, 'body': result})

    except Exception as e:

        response = {"message": "error {}".format(str(e))}
        return JsonResponse({'status': 500, 'body': response})


