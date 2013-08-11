# -*- coding: utf-8 -*-
from google.appengine.ext import db


class link(db.Model):
    title = db.StringProperty()
    url = db.LinkProperty()

    def __init__(self):
        super(link, self).__init__()

