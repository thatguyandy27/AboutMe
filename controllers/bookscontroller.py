# -*- coding: utf-8 -*-
import webapp2
from models.book import Book
from django.utils import simplejson


class BooksController(webapp2.RequestHandler):

    def get(self):
        books = Book.all().order('-order')
        self.response.out.write(simplejson.dumps([m.to_dict() for m in books]))



