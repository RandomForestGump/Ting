import re
import pandas as pd
import numpy as np
from collections import Counter
class DynamicAnalyzer:

    def __init__(self, tweets):
        self.tweets = tweets
        self.poi_list = []
        self.thresh = 0.05
        self.k = 2

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




    def get_sentiment(self):
        '''
        Input: Json of Tweets
        :return: {'positive':40%, 'Negative':30% , 'Neutral':30%}
        '''

        count,pos,neg,neu = 0,0,0,0

        for t in self.tweets:
            # print(t['id'])
            if t.get('sentiment', 0) > self.thresh:
                pos += 1
            elif t.get('sentiment', 0) < -self.thresh:
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

        count = Counter(dict_list)
        count = {k: v for k, v in sorted(count.items(), key=lambda x: x[1], reverse=True)[:50]}
        result = []
        for key in count.keys():
            d = {'text': key, 'value': count[key]}
            result.append(d)

        return result



    def get_xtreme_tweets(self):
        '''
        Retrieve most likely and then get extreme tweets
        :return:
        '''
        d = {}
        for tweet in self.tweets:
            tweet_text = tweet['tweet_text']
            d[tweet_text] = tweet.get('sentiment', 0)

        pos_ex = {k: v for k, v in sorted(d.items(), key=lambda item: item[1], reverse = True)[:self.k]}
        neg_ex = {k: v for k, v in sorted(d.items(), key=lambda item: item[1])[:self.k]}
        # res = list(pos_ex.keys()) + list(neg_ex.keys())
        result = {'positive_tweets': list(pos_ex.keys()), 'negative_tweets': list(neg_ex.keys())}

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
                d[tweet_text] = tweet.get('sentiment', 0)

        antiVacTweets = {k: v for k, v in sorted(d.items(), key=lambda item: item[1])[:5]}

        result = [{'antivaccine_tweets':list(antiVacTweets.keys())}]
        print(result)
        return result
