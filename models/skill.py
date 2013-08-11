# -*- coding: utf-8 -*-
from google.appengine.ext import db


class skill(db.Model):
    name = db.StringProperty()
    category = db.StringProperty()

    def __init__(self):
        super(skill, self).__init__()
