# -*- coding: utf-8 -*-
import webapp2
from models.project import Project
from django.utils import simplejson
from google.appengine.api import users


class ProjectService(webapp2.RequestHandler):

    def get(self):
        projects = Project.all()
        self.response.out.write(simplejson.dumps([m.to_dict()
            for m in projects]))

    def post(self):
        user = users.get_current_user()
        if not user or user.email() != 'andy.dude@gmail.com':
            return

        recordId = self.request.POST["id"]
        project = None
        if recordId is not None and recordId.isdigit():
            #logging.info(recordId)
            #logging.info(long(recordId))
            project = Project.get_by_id(long(recordId))

        if project is None:
            project = Project()

        project.title = self.request.POST["title"]
        project.description = self.request.POST["description"]
        project.link = self.request.POST["link"]
        newKey = project.put()

        self.response.out.write(newKey.id())
