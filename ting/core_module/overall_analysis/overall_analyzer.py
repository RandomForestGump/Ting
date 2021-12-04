#https://towardsdatascience.com/data-analysis-on-health-passport-tweets-6732660324f3
#https://towardsdatascience.com/sentiment-analysis-of-covid-19-vaccine-tweets-dc6f41a5e1af
from fuzzywuzzy import fuzz
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from keyword_data import covid_keywords, vaccine_keywords, antivaccine_keywords, vaccine_brands
from translate import Translator
translator = Translator(from_lang="hindi",to_lang="english")
translator1 = Translator(from_lang="spanish",to_lang="english")

class OverallAnalyzer:

    def __init__(self, all_tweets, covid_keywords, vaccine_keywords, antivaccine_keywords, vaccine_brands):

        self.covid_keywords = covid_keywords
        self.vaccine_keywords = vaccine_keywords
        self.antivaccine_keywords = antivaccine_keywords
        self.all_tweets = all_tweets
        self.analyser = SentimentIntensityAnalyzer()
        self.vaccine_brands = vaccine_brands

    def assign_sentiment(self):
        abc = []

        for tweet in self.all_tweets:

            tweet_text = tweet['tweet_text']

            if tweet['tweet_lang'] == 'es':

                translation = translator1.translate(tweet_text)

                tweet['sentiment'] = self.analyser.polarity_scores(translation)['pos']

            elif tweet['tweet_lang'] == 'hi':

                translation = translator.translate(tweet_text)

                tweet['sentiment'] = self.analyser.polarity_scores(translation)['pos']

            else:
                tweet['sentiment'] = self.analyser.polarity_scores(tweet_text)
            abc.append(tweet)

        self.all_tweets = abc

    def assign_class(self, thresh):

        for tweet in self.all_tweets:
            tweet['is_covid'], tweet['is_vaccine'], tweet['is_antivaccine'] = False, False, False
            tweet_text = tweet['tweet_text']

            for word in tweet_text.split(' '):

                if not tweet['is_covid']:

                    for key in self.covid_keywords:
                        if fuzz.ratio(word, key) > thresh:
                            tweet['is_covid'] = True
                            break

                if not tweet['is_vaccine']:
                    for key in self.vaccine_keywords:
                        if fuzz.ratio(word, key) > thresh:
                            tweet['is_vaccine'] = True
                            break
                if not tweet['is_antivaccine']:
                    for key in self.antivaccine_keywords:
                        if fuzz.ratio(word, key) > thresh:
                            tweet['is_antivaccine'] = True
                            break

    def population_sentiment_analysis(self):
        for tweet in self.all_tweets:
            if not tweet['verified']:

                #Link


    def reply_analysis(self):

        '''
        Covid related POI tweets reply sentiment analysis
        :return:
        '''

        for tweet in self.all_tweets:
            if tweet['reply_to_tweet_id']:

                #Poi based sentiment on



    def check_vaccine_brand(self, tweet):

        for word in tweet.split(' '):
            if word in self.vaccine_brands['pfizer']:
                brand = 'pfizer'
            elif word in self.vaccine_brands['JnJ']:
                brand = 'JnJ'

            else:
                brand = None

            return brand


    def vaccine_sentiment(self):
        '''
        Vaccine comparison
        :return: #{'pfizer': {neutral:10%, neg:, pos}, ''}
        '''

        out = {'pfizer':[0, 0], 'covaxin':[0, 0]}

        for tweet in self.all_tweets:

            if tweet.is_vaccine or tweet.is_antivaccine:
                x = self.check_vaccine_brand(tweet.text)
                if x:
                    out[x][0]+= tweet.sentiment
                    out[x][1] += 1
                else:
                    continue

        #Average out variable

        return  out







    def covid_curve(self):

        '''
        Try to do Test control with covid/ non covid tweets
        :return:
        '''

        





    def antivaxxer_analysis(self):



    def language_analysis(self):



    def poi_distribution(self):


    def keyword_sentiment(self):



#Tweet
#Sentiment
#Type
#Topic Modelling