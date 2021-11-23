import pandas as pd
import numpy as np
import nltk
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer



class TextModelling:
    #Input : array list of tweets

    def __init__(self):
        self.sentiment_thresh =
        self.analyser = SentimentIntensityAnalyzer()

    def analyze_sentiment(self, tweets):
        d = {}
        for tweet, tw_id in tweets:
            score_dict = self.analyser.polarity_scores(tweet)
            d[tw_id] = score_dict

        return d

    def get_opinion():









