# -*- coding: utf-8 -*-
from modelbase import ModelBase
from google.appengine.ext import db


class About(ModelBase):
    description = db.TextProperty()
    aboutSite = db.TextProperty()
    otherInterests = db.TextProperty()


