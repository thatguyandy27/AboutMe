# -*- coding: utf-8 -*-
from google.appengine.ext import db
from modelbase import ModelBase


class Link(ModelBase):
    title = db.StringProperty()
    url = db.LinkProperty()
    description = db.StringProperty()



