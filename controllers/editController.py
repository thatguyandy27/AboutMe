# -*- coding: utf-8 -*-
import webapp2
import jinja2
from google.appengine.api import users
jinja_environment = jinja2.Environment(
    loader=jinja2.FileSystemLoader(['web']))


class EditController(webapp2.RequestHandler):

    def get(self):
        user = users.get_current_user()
        if user and user.email() == 'andy.dude@gmail.com':
            template = jinja_environment.get_template('Edit.html')
            self.response.out.write(template.render())
        else:
            template = jinja_environment.get_template('Unauthorized.html')
            self.response.out.write(template.render({
                'loginurl': users.create_login_url(self.request.uri)}))