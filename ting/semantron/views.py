from django.shortcuts import render
from core_module.search.search import getTweet, poiFilter
from core_module.search_analytics.dynamic_analyzer import DynamicAnalyzer
from django.shortcuts import render
from django.http import JsonResponse
import json
import urllib.request

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
        print('Docs Fetched')
        result['tweet_type'] = tweet_type
        result['poi_dist'] = poi_distribution
        print('Tweet types and poi distribution Fetched')
        result['keywords'] = keyword_wc
        print('Keywords Fetched')
        result['antivaccine_tweets'] = antivax
        print('Antivacc Fetched')
        result['extreme'] = extreme
        print('Extreme Fetched')
        result['tweet_sentiment'] = tweet_sentiment
        print('Main sentiment Fetched')

        return JsonResponse({'status': 200, 'body': result})

    except Exception as e:

        response = {"message": "error {}".format(str(e))}
        return JsonResponse({'status': 500, 'body': response})


def poi_filter(request):
    body = request.body.decode('utf-8')
    request = json.loads(body)
    print(request)
    poi_name = request['poi_name']
    query = request['query']
    query = query.replace(":", "\:")
    query = urllib.parse.quote(query, safe='')
    print(query)
    docs = poiFilter(query, poi_name)

    return JsonResponse({'status': 200, 'body': docs})
