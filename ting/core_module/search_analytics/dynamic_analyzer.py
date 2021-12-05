import re
import pandas as pd
import numpy as np

class DynamicAnalyzer:

    def __init__(self, tweets):
        self.tweets = tweets
        self.poi_list = []

    def get_tweet_types(self):

        '''
        Input: Json of tweets
        :return: {'organic':40%, 'reply':30% , 'retweet':30%}
        '''

        count,countReply,countRetweet,countOrganic=0,0,0,0
        for t in self.tweets:
            if t['replied_to_tweet_id'] is not None:
                countReply+=1
            elif re.match(r'RT\s@....+', t['tweet_text']):
                countRetweet+=1
            else:
                countOrganic+=1
            count+=1
        pReply=(countReply/count)*100
        pRetweet = (countRetweet / count) * 100 if count != 0 else 0
        pOrganic = (countOrganic / count) * 100 if count != 0 else 0
        return {"Reply":pReply,"Retweet":pRetweet,"Organic":pOrganic}




    def get_sentiment(self,thresh):
        '''
        Input: Json of Tweets
        :return: {'positive':40%, 'Negative':30% , 'Neutral':30%}
        '''

        count,pos,neg,neu = 0,0,0,0

        for t in self.tweets:
            if t['sentiment']  > 0:
                pos += 1
            elif t['sentiment']  < 0:
                neg += 1
            else:
                neu += 1
            count += 1
        ppos = (pos / count) * 100 if count != 0 else 0
        pneu = (neu / count) * 100 if count != 0 else 0
        pneg = (neg / count) * 100 if count != 0 else 0
        return {"Positive": ppos, "Negative": pneg, "Neutral": pneu}

    def get_poi_distribution(self):
        '''
                Input: Json of Tweets
                :return: {'Narendra Modi':40%, 'Rahul Modi':30% , '':30%}
        '''
        poi = {}
        for tweet in self.tweets:
            if tweet['poi_name'] is not None:
                if tweet['poi_name'] in poi:
                    poi[tweet['poi_name']] +=1
                else:
                    poi[tweet['poi_name']] =1
        poi = {k: v for k,v in sorted(poi.items(), key = lambda x: x[1], reverse = True)}
        return poi[:15]


    def get_hashtag_wc(self):

        '''
        Input: Json
        :return:
        '''
        dict_list = []
        for t in self.tweets:
            x = t['hashtags']
            dict_list+=x

        return dict_list
        # mask is the image used to reshape the cloud
        # mask = np.array(Image.open('./images/syringe44_.jpeg'))
        # word_cloud = WordCloud(collocations=False, background_color='white',
        #                        max_words=200, width=3000,
        #                        height=2000, colormap='viridis',
        #                        mask=mask).generate_from_frequencies(
        #     df.T.sum(axis=1))

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
        neg_ex = xtweets[:-2]

        return pos_ex, neg_ex


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

        antivac = antiVacTweets[:10]
        return antivac




