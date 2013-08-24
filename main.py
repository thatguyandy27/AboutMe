#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
import jinja2
#from controllers.bookscontroller import BooksController
from controllers.editController import EditController
from services.bookservice import BookService
from services.linkservice import LinkService
from services.projectservice import ProjectService
from services.aboutservice import AboutService
from models.about import About

jinja_environment = jinja2.Environment(
    loader=jinja2.FileSystemLoader(['web']))


class MainHandler(webapp2.RequestHandler):
    def get(self):
        aboutMe = About.all().get()
        template = jinja_environment.get_template('index.html')
        self.response.out.write(template.render(aboutMe=aboutMe))

app = webapp2.WSGIApplication([
    (r'/services/books', BookService),
    (r'/services/links', LinkService),
    (r'/services/projects', ProjectService),
    (r'/services/about', AboutService),
    (r'/edit', EditController),
    ('/', MainHandler)
], debug=True)
