from django.shortcuts import render
from core_module.search.search import getTweet, poiFilter, topicFilter, langFilter, countryFilter
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


def filtering(request):

    body = request.body.decode('utf-8')
    request = json.loads(body)
    print(request)
    arg = request['type']
    query = request['query']
    query = query.replace(":", "\:")
    query = urllib.parse.quote(query, safe='')

    if arg == 'poi_name':
        entity = request['poi_name']
        docs = poiFilter(query, entity)
        return JsonResponse({'status': 200, 'body': docs})

    elif arg == 'lang_type':
        entity = request['lang_type']
        docs = langFilter(query, entity)
        return JsonResponse({'status': 200, 'body': docs})

    elif arg == 'topic_name':
        entity = request['topic']
        docs = topicFilter(query, entity)
        return JsonResponse({'status': 200, 'body': docs})

    elif arg == 'country_name':
        entity = request['country']
        docs = countryFilter(query, entity)
        return JsonResponse({'status': 200, 'body': docs})

    else:
        response = {"message": "Wrong argument presented"}
        return JsonResponse({'status': 500, 'body': response})


def poi_filter(request):
    print()
    body = request.body.decode('utf-8')
    request = json.loads(body)

    poi_name = request['poi_name']
    query = request['query']
    query = query.replace(":", "\:")
    query = urllib.parse.quote(query, safe='')
    docs = poiFilter(query, poi_name)

    return JsonResponse({'status': 200, 'body': docs})

def lang_filter(request):
    body = request.body.decode('utf-8')
    request = json.loads(body)
    print(request)
    lang = request['lang'] #en, hi ,es
    query = request['query']
    query = query.replace(":", "\:")
    query = urllib.parse.quote(query, safe='')

    docs = langFilter(query, lang)

    return JsonResponse({'status': 200, 'body': docs})

def topic_filter(request):
    body = request.body.decode('utf-8')
    request = json.loads(body)
    print(request)
    topic = request['topic']
    query = request['query']
    query = query.replace(":", "\:")
    query = urllib.parse.quote(query, safe='')

    docs = topicFilter(query, topic)

    return JsonResponse({'status': 200, 'body': docs})



def country_filter(request):
    body = request.body.decode('utf-8')
    request = json.loads(body)
    print(request)
    country = request['country']
    query = request['query']
    query = query.replace(":", "\:")
    query = urllib.parse.quote(query, safe='')

    docs = countryFilter(query, country)

    return JsonResponse({'status': 200, 'body': docs})


