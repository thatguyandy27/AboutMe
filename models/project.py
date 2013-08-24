# -*- coding: utf-8 -*-
from google.appengine.ext import db


class Project(db.Model):
    title = db.StringProperty()
    description = db.StringProperty()
    link = db.LinkProperty()


