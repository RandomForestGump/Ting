import json
import urllib.request


def getTweet(query):
    #Covid tweet detector
    ip = '18.118.247.209'
    query = query.replace(":", "\:")
    query = urllib.parse.quote(query, safe='')
    # inurl =f'http://3.144.198.12:8983/solr/{CORE_NAME}/select?bq=text_en%3A({query})%5E2%20text_ru%3A({query})%5E2%20text_de%3A({query})%5E2&defType=dismax&fl=id%2Cscore&indent=true&q.op=OR&q={query}&qf=text_de%20text_en%20text_ru&rows=20'
    inurl = f'http://{ip}:8983/solr/IRF21P3/select?defType=edismax&q.op=OR&q={query}&qf=tweet_text&rows=100'
    data = urllib.request.urlopen(inurl)
    docs = json.load(data)['response']['docs']
    return docs


def poiFilter(query, poi_name):
    ip = '18.118.247.209'
    poi_name = poi_name.replace(' ', '%20')
    query = query.replace(":", "\:")
    query = urllib.parse.quote(query, safe='')
    # inurl =f'http://3.144.198.12:8983/solr/{CORE_NAME}/select?bq=text_en%3A({query})%5E2%20text_ru%3A({query})%5E2%20text_de%3A({query})%5E2&defType=dismax&fl=id%2Cscore&indent=true&q.op=OR&q={query}&qf=text_de%20text_en%20text_ru&rows=20'
    inurl = f'http://{ip}:8983/solr/IRF21P3/select?defType=edismax&q.op=OR&q={query}&qf=tweet_text&rows=100&fq=poi_name%3A%22{poi_name}%22'
    data = urllib.request.urlopen(inurl)
    docs = json.load(data)['response']['docs']
    return docs






