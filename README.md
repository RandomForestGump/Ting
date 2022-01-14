# Ting

![image](https://user-images.githubusercontent.com/20444857/149429096-c03073bf-e691-49aa-9096-efbcd9b28dd2.png)

# Introduction

 
The unfolding of the COVID-19 pandemic has demonstrated how the spread of misinformation, amplified on social media and other digital platforms, is proving to be as much a threat to global public health as the virus itself. Technology advancements and social media create opportunities to keep people safe, informed and connected. However, the same tools also enable and amplify the current infodemic that continues to undermine the global response and jeopardizes measures to control the pandemic. The case of the COVID-19 epidemic shows the critical impact of this new information environment. The spreading of information can strongly influence people’s behavior and alter the effectiveness of the countermeasures deployed by governments.We address the diffusion of such information about the COVID-19 and vaccines with a massive data analysis on Twitter. We analyze engagement, interest and the sentiments of the masses on covid 19 pandemic and the vaccines. Our project aims to provide a differential assessment on the evolution of discourse on a global scale in three languages (English, Hindi and Spanish) spanning over three countries (USA, India and Mexico). 

In this work we provide an in-depth analysis of the social dynamics in a time window where narratives and moods in social media related to the COVID-19 have emerged and spread. We have scraped more than 1.5 hundred thousand tweets related to covid and covid vaccines to be able to give the user an insight on the mindset of the masses and their sentiments towards the vaccines, lockdowns and related topics.

# Demo

https://user-images.githubusercontent.com/20444857/149429016-f7883802-3218-44df-8413-b8f10660a637.mp4

# METHODOLOGY:

## Scraping the data

We scraped the data from twitter using the  Tweepy python library for accessing the Twitter API. We scraped the data for almost 300 crowdsourced covid related keywords and 46 POIs (Person of Interest) tweets. We also scraped the data related to anti vax tweets from the specific tweet ids obtained from avax tweet dataset from (https://arxiv.org/abs/2105.05134). This enabled us to accumulate over ~177000 tweets to carry our analysis on.




## Preprocessing

We implemented the preprocessing of data similar to the implementation we used for project 1 by using a python script. We gathered information for the fields such as user information fields- name, id, country, language, screen name, location and necessary fields such as date, text emoticons, hashtags etc.

## Indexing

We then carried out additional processing on the scraped data and added additional fields to our data such as- sentiment of the tweets, is related to covid, is pro or anti vaccine and topics as per the LDA (Latent Dirichlet Allocation) topic modelling. 



# Backend

The API’s were hosted using a Django Framework in Python. We particularly used NLTK and SpaCy, majorly it’s “web_en_core_sm’ model for English language, while the “es_core_news_sm” for Spanish as the language models. No language model was found for Hindi, so we instead took the translation path.

We implemented multiple analysis tasks in the project and we describe each in detail below:

## Sentiment retrieval technique

	We used a simple pre-trained Vader Sentiment classifier from NLTK. We converted Hindi and Spanish tweets to their English form and calculated the sentiment for each tweet. We get a positive, negative and neutral sentiment, but we use compound scores to get the actual score.

 
## Aspect based Opinion mining
	
	To mine specific opinions or stance on some important keywords like Masks, vaccines, Lockdowns etc, we used Aspect based opinion mining Techniques. We built a simple algorithm that parses noun chunks of some important keywords in sentences. Then it extracts the adjectives and adverb mappings from the text that are semantically relevant to these nouns. Sentiment on an overall level is collated for these keywords.



# Frontend

![image](https://user-images.githubusercontent.com/20444857/149429310-4a8add55-c657-4c82-8be0-ab1671c85f25.png)


For the frontend we used ReactJS and Typescript. Along with that, we used MUi library for parsing tweets and popular charting libraries for building visualizations. Finally, deployed through Heroku.


# Credits:

- Palek Naithani
- Priyank Chopde
- Gaurav





