from django.views.generic import ListView

from happymap.models import Announcement


class TestLV(ListView):
    model = Announcement
    template_name = 'test/test_list.html'