'''
@author: Souvik Das
Institute: University at Buffalo
'''
import json
from os import remove
import demoji, re, datetime
import preprocessor


# demoji.download_codes()


class TWPreprocessor:
    @classmethod
    def preprocess(cls, tweet):
        processedTweets = {}
        tweet = tweet._json
        tweet_text = tweet['full_text']
        tweet_lang = str(tweet['lang']).lower()
        if tweet_lang == 'en':
            cleaned_text, emojis = _text_cleaner(tweet_text)
        else:
            cleaned_text, emojis = _text_cleaner_notEnglish(tweet_text)

        if tweet['user']['screen_name'] == poi_name:
            processedTweets['poi_name'] = tweet['user']['screen_name']
            processedTweets['poi_id'] = tweet['user']['id']
        processedTweets['verified'] = tweet['user']['verified']
        processedTweets['country'] = get_country(tweet_lang)
        processedTweets['id'] = tweet['id']
        if tweet['in_reply_to_user_id'] is not None:
            processedTweets['replied_to_user_id'] = tweet['in_reply_to_user_id']
        if tweet['in_reply_to_status_id'] is not None:
            processedTweets['replied_to_tweet_id'] = tweet['in_reply_to_status_id']
            processedTweets['reply_text'] = cleaned_text

        processedTweets['tweet_text'] = tweet['full_text']
        processedTweets['tweet_lang'] = tweet_lang

        if tweet_lang == 'en':
            processedTweets['text_en'] = cleaned_text

        elif tweet_lang == 'es':
            processedTweets['text_es'] = cleaned_text

        elif tweet_lang == 'hi':
            processedTweets['text_hi'] = cleaned_text

        if tweet['entities']['hashtags'] is not []:
            processedTweets['hashtags'] = _get_entities(tweet, 'hashtags')

        if tweet['entities']['user_mentions'] is not []:
            processedTweets['mentions'] = _get_entities(tweet, 'mentions')

        if tweet['entities']['urls'] is not []:
            processedTweets['tweet_urls'] = _get_entities(tweet, 'urls')

        processedTweets['tweet_emoticons'] = emojis

        # processedTweets['tweet_date'] = _get_tweet_date(tweet['created_at'])
        processedTweets['tweet_date'] = _get_tweet_date(tweet['created_at']).strftime("%Y-%m-%dT%H:%M:%SZ")

        if tweet['coordinates'] is not None:
            processedTweets['geolocation'] = str(tweet['coordinates'])

        return processedTweets


def _get_entities(tweet, type=None):
    result = []
    if type == 'hashtags':
        hashtags = tweet['entities']['hashtags']

        for hashtag in hashtags:
            result.append(hashtag['text'])
    elif type == 'mentions':
        mentions = tweet['entities']['user_mentions']

        for mention in mentions:
            result.append(mention['screen_name'])
    elif type == 'urls':
        urls = tweet['entities']['urls']

        for url in urls:
            result.append(url['url'])

    return result


def _text_cleaner(text):
    emoticons_happy = list([
        ':-)', ':)', ';)', ':o)', ':]', ':3', ':c)', ':>', '=]', '8)', '=)', ':}',
        ':^)', ':-D', ':D', '8-D', '8D', 'x-D', 'xD', 'X-D', 'XD', '=-D', '=D',
        '=-3', '=3', ':-))', ":'-)", ":')", ':*', ':^*', '>:P', ':-P', ':P', 'X-P',
        'x-p', 'xp', 'XP', ':-p', ':p', '=p', ':-b', ':b', '>:)', '>;)', '>:-)',
        '<3'
    ])
    emoticons_sad = list([
        ':L', ':-/', '>:/', ':S', '>:[', ':@', ':-(', ':[', ':-||', '=L', ':<',
        ':-[', ':-<', '=\\', '=/', '>:(', ':(', '>.<', ":'-(", ":'(", ':\\', ':-c',
        ':c', ':{', '>:\\', ';('
    ])
    all_emoticons = emoticons_happy + emoticons_sad

    emojis = list(demoji.findall(text).keys())
    clean_text = demoji.replace(text, '')

    for emo in all_emoticons:
        if (emo in clean_text):
            clean_text = clean_text.replace(emo, '')
            emojis.append(emo)

    clean_text = preprocessor.clean(text)
    # preprocessor.set_options(preprocessor.OPT.EMOJI, preprocessor.OPT.SMILEY)
    # emojis= preprocessor.parse(text)

    return clean_text, emojis


def _get_tweet_date(tweet_date):
    return _hour_rounder(datetime.datetime.strptime(tweet_date, '%a %b %d %H:%M:%S +0000 %Y'))


def _hour_rounder(t):
    # Rounds to nearest hour by adding a timedelta hour if minute >= 30
    return (t.replace(second=0, microsecond=0, minute=0, hour=t.hour)
            + datetime.timedelta(hours=t.minute // 30))


def get_country(lang):
    country = 'USA'
    if lang == 'hi':
        country = 'India'
    elif lang == 'es':
        country = "Mexico"
    return country


def _text_cleaner_notEnglish(text):
    emoticons_happy = list([
        ':-)', ':)', ';)', ':o)', ':]', ':3', ':c)', ':>', '=]', '8)', '=)', ':}',
        ':^)', ':-D', ':D', '8-D', '8D', 'x-D', 'xD', 'X-D', 'XD', '=-D', '=D',
        '=-3', '=3', ':-))', ":'-)", ":')", ':*', ':^*', '>:P', ':-P', ':P', 'X-P',
        'x-p', 'xp', 'XP', ':-p', ':p', '=p', ':-b', ':b', '>:)', '>;)', '>:-)',
        '<3'
    ])
    emoticons_sad = list([
        ':L', ':-/', '>:/', ':S', '>:[', ':@', ':-(', ':[', ':-||', '=L', ':<',
        ':-[', ':-<', '=\\', '=/', '>:(', ':(', '>.<', ":'-(", ":'(", ':\\', ':-c',
        ':c', ':{', '>:\\', ';('
    ])
    all_emoticons = emoticons_happy + emoticons_sad

    emojis = list(demoji.findall(text).keys())
    clean_text = demoji.replace(text, '')

    for emo in all_emoticons:
        if (emo in clean_text):
            clean_text = clean_text.replace(emo, '')
            emojis.append(emo)

    return clean_text, emojis


