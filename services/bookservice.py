# -*- coding: utf-8 -*-
import webapp2
from models.book import Book
from django.utils import simplejson
import logging


class BookService(webapp2.RequestHandler):

    def get(self):
        books = Book.all().order('-order')
        self.response.out.write(simplejson.dumps([m.to_dict() for m in books]))

    def post(self):
        #jdata = json.loads(cgi.escape(self.request.body))
        # logging.info(self.request.POST)
        # logging.info(self.request.POST["id"])
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
