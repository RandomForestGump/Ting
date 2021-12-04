import re


class DynamicAnalyzer:

    def __init(self, tweets):
        self.tweets = tweets



    def get_tweet_types(self):

        '''
        Input: Json of tweets
        :return: {'organic':40%, 'reply':30% , 'retweet':30%}
        '''
        count,countReply,countRetweet,countOrganic=0,0,0,0
        for t in self.tweets:
            if t['replied_to_tweet_id'] not None:
                countReply+=1
                count+=1
            elif re.match(r'RT\s@....+', t['tweet_text']):
                countRetweet+=1
                count+=1
            else:
                countOrganic+=1
                count+=1
        pReply=(countReply/count)*100
        pRetweet = (countRetweet / count) * 100
        pOrganic = (countOrganic / count) * 100
        return {"Reply":pReply,"Retweet":pRetweet,"Organic":pOrganic}







    def get_sentiment(self,thresh):
        '''
        Input: Json of Tweets
        :return: {'positive':40%, 'Negative':30% , 'Neutral':30%}
        '''
        count,pos,neg,neu = 0,0,0,0
        {}
        for t in self.tweets:
            if t['replied_to_tweet_id'] not None:
                pos += 1
                count += 1
            elif re.match(r'RT\s@....+', t['tweet_text']):
                neu += 1
                count += 1
            else
                neg += 1
                count += 1
        ppos = (pos / count) * 100
        pneu = (neu / count) * 100
        pneg = (neg / count) * 100
        return {"Positive": ppos, "Negative": pneg, "Neutral": pneu}



    def get_poi_distribution(self):
        '''
                Input: Json of Tweets
                :return: {'Narendra Modi':40%, 'Rahul Modi':30% , '':30%}
        '''





    def get_hashtag_wc(self):

        '''
        Input: Json
        :return:
        '''
        dict_list = []
        for t in self.tweets:
            x = t['hashtags']
            dict_list.append(x)
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
        self.tweet.sort(key=lambda x: self.tweet['sentiment'], reverse=True)
        #to turn into df??
        self.tweet.head(2)



    def anti_vaxxer(self):
        '''
        #Top antivaccine worst sentiment tweets
        :return: Top antivax tweet with negative sentiment
        '''




