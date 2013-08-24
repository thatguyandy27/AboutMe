# -*- coding: utf-8 -*-
import webapp2
import jinja2
jinja_environment = jinja2.Environment(
    loader=jinja2.FileSystemLoader(['web']))


class EditController(webapp2.RequestHandler):

    def get(self):
        template = jinja_environment.get_template('Edit.html')
        self.response.out.write(template.render())