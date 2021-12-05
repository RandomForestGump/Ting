import re
import pandas as pd
import numpy as np
from collections import Counter
class DynamicAnalyzer:

    def __init__(self, tweets):
        self.tweets = tweets
        self.poi_list = []
        self.thresh = 0.05

    def get_tweet_types(self):

        '''
        Input: Json of tweets
        :return: {'organic':40%, 'reply':30% , 'retweet':30%}
        '''

        count,countReply,countRetweet,countOrganic=0,0,0,0
        for t in self.tweets:
            if t.get('replied_to_tweet_id', None) is not None:
                countReply+=1
            elif re.match(r'RT\s@....+', t['tweet_text']):
                countRetweet+=1
            else:
                countOrganic+=1
            count+=1
        pReply=(countReply/count)*100
        pRetweet = (countRetweet / count) * 100 if count != 0 else 0
        pOrganic = (countOrganic / count) * 100 if count != 0 else 0
        result = [{'type':'Reply', 'percent':np.round(pReply, 2)}, {'type':'Organic', 'percent':np.round(pOrganic, 2)}, {'type':'Retweets', 'percent':np.round(pRetweet, 2)}]
        return result




    def get_sentiment(self,thresh):
        '''
        Input: Json of Tweets
        :return: {'positive':40%, 'Negative':30% , 'Neutral':30%}
        '''

        count,pos,neg,neu = 0,0,0,0

        for t in self.tweets:
            if t['sentiment']  > self.thresh:
                pos += 1
            elif t['sentiment']  < -self.thresh:
                neg += 1
            else:
                neu += 1
            count += 1
        ppos = (pos / count) * 100 if count != 0 else 0
        pneu = (neu / count) * 100 if count != 0 else 0
        pneg = (neg / count) * 100 if count != 0 else 0
        result = [{'type':'Positive', 'percent':np.round(ppos, 2)}, {'type':'Negative', 'percent':np.round(pneg, 2)}, {'type':'Neutral', 'percent':np.round(pneu, 2)}]

        return result

    def get_poi_distribution(self):
        '''
                Input: Json of Tweets
                :return: {'Narendra Modi':40%, 'Rahul Modi':30% , '':30%}
        '''
        poi = {}
        n = 0

        for tweet in self.tweets:
            m = tweet.get('poi_name',None)
            if m is not None:
                n+=1
                if m in poi:
                    poi[tweet['poi_name']] += 1
                else:
                    poi[tweet['poi_name']] = 1

        poi = {k: v for k,v in sorted(poi.items(), key = lambda x: x[1], reverse = True)[:10]}
        result = []
        for key in poi.keys():
            d = {'poi_name': key, 'percent': np.round((poi[key]/n)*100, 2)}
            result.append(d)

        return result


    def get_hashtag_wc(self):

        '''
        Input: Json
        :return:
        '''
        dict_list = []
        for t in self.tweets:
            x = t.get('hashtags', None)
            if x:
                dict_list+=x

        result = Counter(dict_list)

        return result


    def get_xtreme_tweets(self):
        '''
        Retrieve most likely and then get extreme tweets
        :return:
        '''
        d = {}
        for tweet in self.tweets:
            tweet_text = tweet['tweet_text']
            d[tweet_text] = tweet['sentiment']

        xtweets = {k: v for k, v in sorted(d.items(), key=lambda item: item[1], reverse = True)}

        pos_ex = xtweets[:2]
        neg_ex = xtweets[-2:]
        result = [{'positive_tweets': pos_ex},{'negati_tweets': neg_ex}]
        return result


    def anti_vaxxer(self):
        '''
        #Top antivaccine worst sentiment tweets
        :return: Top antivax tweet with negative sentiment
        '''
        d = {}
        for tweet in self.tweets:
            if tweet['is_antivaccine']:
                tweet_text = tweet['tweet_text']
                d[tweet_text] = tweet['sentiment']

        antiVacTweets = {k: v for k, v in sorted(d.items(), key=lambda item: item[1])}

        result = [{'antivaccine_tweets':antiVacTweets[:5]}]
        return result
