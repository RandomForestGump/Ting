from django.shortcuts import render
from core_module.search import getTweet

# Create your views here.

def search(request):

    try:
        load_query = request.body.decode('utf-8')
        query = json.loads(load_query)

        status_code, eta_response = getTweet(query)

        return JsonResponse({'status': status_code, 'body': eta_response, 'API_VERSION': 2.0})

    except Exception as e:
#        logger.error(traceback.format_exc())
        response = {"message": "error {}".format(str(e))}
        return JsonResponse({'status': 500, 'body': response, 'API_VERSION': 2.0})
