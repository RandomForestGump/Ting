#https://towardsdatascience.com/data-analysis-on-health-passport-tweets-6732660324f3
#https://towardsdatascience.com/sentiment-analysis-of-covid-19-vaccine-tweets-dc6f41a5e1af
from fuzzywuzzy import fuzz
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from keyword_data import covid_keywords, vaccine_keywords, antivaccine_keywords, vaccine_brands
from translate import Translator
import numpy as np
import pandas as pd
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
        self.poi_user_ids = {9.987976055042007e+17: 'National Health Authority (NHA)',
 132225222.0: 'SALUD México',
 1251083774.0: 'Shivraj Singh Chouhan',
 432697203.0: 'Dr Mansukh Mandaviya',
 144376833.0: 'Felipe Calderón',
 18839785.0: 'Narendra Modi',
 471741741.0: 'PMO India',
 24705126.0: 'Shashi Tharoor',
 146569971.0: 'CDC',
 1.3491490969096684e+18: 'President Biden',
 1.3520648434324726e+18: 'White House COVID-19 Response Team',
 224896427.0: 'Trevor Bedford',
 813286.0: 'Barack Obama',
 9.593479118122394e+17: 'Office of Shivraj',
 77732185.0: 'Dr Harsh Vardhan',
 1.2432279217260667e+18: 'Covid India Seva',
 2596143056.0: 'Ministry of Health',
 86124722.0: 'SFP México',
 39860797.0: 'Alfredo Del Mazo',
 7.89152957124055e+17: 'José Narro Robles',
 2897441.0: 'Enrique Peña Nieto',
 19238400.0: 'D Keating',
 1.2445205342446019e+18: 'CMO KERALA #COVID19 CENTRE',
 30354991.0: 'Kamala Harris',
 43115590.0: 'Fernández Noroña',
 939091.0: 'Joe Biden',
 82119937.0: 'Andrés Manuel',
 1447949844.0: 'Amit Shah',
 1.3725819761174815e+18: 'Secretary Xavier Becerra',
 295026890.0: 'sonu sood',
 9.1118242778291e+17: 'Adar Poonawalla',
 28285534.0: 'Drew Woodcock',
 50393960.0: 'Bill Gates',
 591361197.0: 'Claudia Sheinbaum',
 97017966.0: 'Margarita Zavala',
 8.036941790794588e+17: 'Vice President Kamala Harris',
 1339835893.0: 'Hillary Clinton',
 22203756.0: 'Mike Pence',
 405427035.0: 'Arvind Kejriwal',
 3437532637.0: 'Yogi Adityanath',
 3171712086.0: 'Rahul Gandhi',
 194641267.0: 'COFEPRIS',
 1.154180084078502e+18: 'Hugo López-Gatell Ramírez',
 838354118.0: 'Jaime Bonilla Valdez',
 14499829.0: 'World Health Organization (WHO)'}

        self.countries = ['India', 'Mexico', 'US']
        self.covid_data = pd.read_csv('..covid/covid_data.csv')


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
        res = {}
        for tweet in self.all_tweets:
            sent = tweet['sentiment']
            if tweet['reply_to_tweet_id'] and not tweet['verified'] and  tweet['reply_to_user_id'] in self.poi_user_ids.keys():
                poi = self.poi_user_ids[tweet['reply_to_user_id']]
                if poi in res:
                    res[poi].append(sent)
                else:
                    res[poi] = [sent]

        d = {}
        for key in res.keys():
            d[key] = np.mean(res[key])

        return d


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

        return  out

    def covid_curve(self):

        '''
        Try to do Test control with covid/ non covid tweets
        :return:
        '''

        data = pd.DataFrame(self.all_tweets)

        for country in self.countries:
            tweet_daily = data[data['Country'] == country]
            y = self.covid_data[self.covid_data['Country_Region'] == country]



    def antivaxxer_analysis(self):
        ##



    def language_analysis(self):

        self.all_tweets =



    def poi_distribution(self):


    def keyword_sentiment(self):



#Tweet
#Sentiment
#Type
#Topic Modelling