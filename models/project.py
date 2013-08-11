# -*- coding: utf-8 -*-
from google.appengine.ext import db


class project(db.Model):
    title = db.StringProperty()
    description = db.StringProperty()
    link = db.LinkProperty()

    def __init__(self):
        super(project, self).__init__()
