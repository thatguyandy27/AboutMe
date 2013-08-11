# -*- coding: utf-8 -*-
from modelbase import ModelBase
from google.appengine.ext import db


class Book(ModelBase):
    title = db.StringProperty()
    link = db.LinkProperty()
    order = db.IntegerProperty()

