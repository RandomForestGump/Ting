import pandas as pd
import numpy as np
import nltk
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import spacy
nlp = spacy.load("en_core_web_sm")
from textblob import TextBlob

import collections




class OpinionMiner:
    #Input : array list of tweets

    def __init__(self, sentiment_thresh = None, ):
        self.sentiment_thresh =None
        self.analyser = SentimentIntensityAnalyzer()
        self.pos = set()
        self.neg = set()
        self.h = collections.defaultdict(lambda: [0, 0])

    def get_pos_neg(self,tweets):
        #Covid tweet detector
        pos = set()
        neg = set()
        for tweet in tweets:
            doc = nlp(tweet)
            doc = [x.lemma_ for x in doc]
            doc = nlp(' '.join(doc))
            for token in doc:
                if token.pos_ == 'ADJ' and len(token) >= 2 and not token.is_stop and not token.text[0].isupper():
                    a = self.analyser.polarity_scores(tweet)  ##Add phrase matcher/ bigram/ trigram
                    if a > 0:
                        self.pos.add(token.text)
                    elif a <= 0:
                        self.neg.add(token.text)


    def feature_sentiment(self, sentence, pos, neg):
        '''
        input: dictionary and sentence
        function: appends dictionary with new features if the feature
                  did not exist previously,then updates sentiment to
                  each of the new or existing features
        output: updated dictionary
        '''
        sent_dict = dict()
        sentence = nlp(sentence)
        opinion_words = neg + pos
        debug = 0
        for token in sentence:
            #         print(token.text)
            # check if the word is an opinion word, then assign sentiment
            if token.text in opinion_words:
                sentiment = 1 if token.text in pos else -1
                #             sentiment = TextBlob(token.text).sentiment.polarity
                # if target is an adverb modifier (i.e. pretty, highly, etc.)
                # but happens to be an opinion word, ignore and pass
                #             if token.pos_ not in ['NOUN']:
                #                 continue
                if (token.dep_ == "advmod"):
                    continue
                elif (token.dep_ == "amod"):
                    sent_dict[token.head.text] = sentiment
                # for opinion words that are adjectives, adverbs, verbs...
                else:
                    for child in token.children:
                        # if there's a adj modifier (i.e. very, pretty, etc.) add more weight to sentiment
                        # This could be better updated for modifiers that either positively or negatively emphasize
                        if ((child.dep_ == "amod") or (child.dep_ == "advmod")) and (child.text in opinion_words):
                            sentiment *= 1.5
                        # check for negation words and flip the sign of sentiment
                        if child.dep_ == "neg":
                            sentiment *= -1
                    for child in token.children:
                        # if verb, check if there's a direct object
                        if (token.pos_ == "VERB") & (child.dep_ == "dobj"):
                            sent_dict[child.text] = sentiment
                            # check for conjugates (a AND b), then add both to dictionary
                            subchildren = []
                            conj = 0
                            for subchild in child.children:
                                if subchild.text == "and":
                                    conj = 1
                                if (conj == 1) and (subchild.text != "and"):
                                    subchildren.append(subchild.text)
                                    conj = 0
                            for subchild in subchildren:
                                sent_dict[subchild] = sentiment

                    # check for negation
                    for child in token.head.children:
                        noun = ""
                        if ((child.dep_ == "amod") or (child.dep_ == "advmod")) and (child.text in opinion_words):
                            sentiment *= 1.5
                        # check for negation words and flip the sign of sentiment
                        if (child.dep_ == "neg"):
                            sentiment *= -1

                    # check for nouns
                    for child in token.head.children:
                        noun = ""
                        if (child.pos_ == "NOUN") and (child.text not in sent_dict):
                            noun = child.text
                            # Check for compound nouns
                            for subchild in child.children:
                                if subchild.dep_ == "compound":
                                    noun = subchild.text + " " + noun
                            sent_dict[noun] = sentiment
                        debug += 1
        return sent_dict


    def fetch_popular_opinions(self, tweets):
        self.get_pos_neg(tweets)
        dict_list = []
        for t in tweets:
            x = self.feature_sentiment(t, self.pos, self.neg)
            dict_list.append(x)

        self.helper(dict_list)
        return self.h

    def priority(self, covid_related):

        '''
        Defines priority for the keywords
        :return:
        '''


    def helper(self, l):

        for i in range(len(l)):
            d = l[i]
            for key in d.keys():
                if key in self.h:
                    self.h[key][0] += d[key]
                    self.h[key][1] += 1

                else:
                    self.h[key][0] = d[key]
                    self.h[key][1] = 1

        self.h =  dict(sorted(self.h.items(), key=lambda x: x[1][1], reverse=True))



    def analyze_sentiment(self, tweets):
        '''
        Input : List of tweets
        Process: Return keyword related dictionary with sentiment
        Aspect based opinion mining
        :param tweets:
        :return:
        '''

        d = {}
        for tweet, tw_id in tweets:
            score_dict = self.analyser.polarity_scores(tweet)
            d[tw_id] = score_dict

        return d







