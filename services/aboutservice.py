# -*- coding: utf-8 -*-
import webapp2
from models.about import About
from django.utils import simplejson
from google.appengine.api import users
import logging


class AboutService(webapp2.RequestHandler):

    def get(self):
        about = About.all().get()
        if about is None:
            self.response.out.write('{}')
        else:
            self.response.out.write(simplejson.dumps(about.to_dict()))

    def post(self):
        user = users.get_current_user()
        if not user or user.email() != 'andy.dude@gmail.com':
            return

        #jdata = json.loads(cgi.escape(self.request.body))
        logging.info(self.request.POST)
        # logging.info(self.request.POST["id"])
        about = About.all().get()

        if about is None:
            about = About()

        about.aboutSite = self.request.POST["aboutSite"]
        about.description = self.request.POST["description"]
        about.otherInterests = self.request.POST["otherInterests"]
        newKey = about.put()

        self.response.out.write(newKey.id())