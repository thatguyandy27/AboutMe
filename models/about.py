# -*- coding: utf-8 -*-
from modelbase import ModelBase
from google.appengine.ext import db


class About(ModelBase):
    description = db.StringProperty()
    aboutSite = db.StringProperty()
    otherInterests = db.StringProperty()


