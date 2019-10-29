import stripe

from django.shortcuts import render
from django.http import HttpResponse
from .models import ItemForSale
from django.views.generic.base import TemplateView
from django.conf import settings

stripe.api_key = settings.STRIPE_SECRET_KEY

# Create your views here.

#class HomePageView(TemplateView):
#   template_name = 'home.html'
    #    items = ItemForSale.objects.all()

def get_context_data(self, **kwargs): # new
    context = super().get_context_data(**kwargs)
    context['key'] = settings.STRIPE_PUBLISHABLE_KEY
    return context


def home(request):
    items = ItemForSale.objects.all()
    return render(request, 'home.html', {'items': items})


def charge(request):
    #should also go here and get the token from the previous JS function to send to "charge.html"
    return render(request, 'charge.html')