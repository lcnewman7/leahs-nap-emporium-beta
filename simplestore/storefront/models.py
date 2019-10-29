from django.db import models


class ItemForSale(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=255)
    price = models.DecimalField(decimal_places=2, max_digits=8)
    price_for_stripe = models.DecimalField(decimal_places=2, max_digits=8)
    itemsku = models.CharField(max_length=32)

    def __str__(self):
        return self.name