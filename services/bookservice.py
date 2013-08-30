# -*- coding: utf-8 -*-
import webapp2
from models.book import Book
from django.utils import simplejson
from google.appengine.api import users

import logging


class BookService(webapp2.RequestHandler):

    def get(self):
        books = Book.all().order('-order')
        self.response.out.write(simplejson.dumps([m.to_dict() for m in books]))

    def post(self):
        user = users.get_current_user()
        if not user or user.email() != 'andy.dude@gmail.com':
            return

        recordId = None
        if "id" in self.request.POST:
            recordId = self.request.POST["id"]

        book = None
        if recordId is not None and recordId.isdigit():
            #logging.info(recordId)
            #logging.info(long(recordId))
            book = Book.get_by_id(long(recordId))

        if book is None:
            book = Book()

        book.title = self.request.POST["title"]
        book.order = long(self.request.POST["order"])
        book.rating = long(self.request.POST["rating"])
        book.review = self.request.POST["review"]
        book.link = self.request.POST["link"]
        newKey = book.put()

        self.response.out.write(newKey.id())
