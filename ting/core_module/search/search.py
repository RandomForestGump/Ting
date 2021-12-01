import json
import urllib.request


def getTweet(query):
    #Covid tweet detector
    query = query.replace(":", "\:")
    query = urllib.parse.quote(query, safe='')
    # inurl =f'http://3.144.198.12:8983/solr/{CORE_NAME}/select?bq=text_en%3A({query})%5E2%20text_ru%3A({query})%5E2%20text_de%3A({query})%5E2&defType=dismax&fl=id%2Cscore&indent=true&q.op=OR&q={query}&qf=text_de%20text_en%20text_ru&rows=20'
    inurl = f'http://3.144.198.122:8983/solr/IRF21P2/select?defType=edismax&q.op=OR&q={query}&qf=tweet_text&rows=1000'
    data = urllib.request.urlopen(inurl)
    docs = json.load(data)['response']['docs']
    return docs

