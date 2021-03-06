 # -*- coding: utf-8 -*-
import webapp2
from models.link import Link
from django.utils import simplejson
from google.appengine.api import users


class LinkService(webapp2.RequestHandler):

    def get(self):
        links = Link.all()
        self.response.out.write(simplejson.dumps([m.to_dict() for m in links]))

    def post(self):
        user = users.get_current_user()
        if not user or user.email() != 'andy.dude@gmail.com':
            return

        recordId = None
        if "id" in self.request.POST:
            recordId = self.request.POST["id"]

        link = None
        if recordId is not None and recordId.isdigit():
            #logging.info(recordId)
            #logging.info(long(recordId))
            link = Link.get_by_id(long(recordId))

        if link is None:
            link = Link()

        link.title = self.request.POST["title"]
        link.description = self.request.POST["description"]
        link.url = self.request.POST["url"]
        newKey = link.put()

        self.response.out.write(newKey.id())