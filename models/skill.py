# -*- coding: utf-8 -*-
from google.appengine.ext import db


class Skill(db.Model):
    name = db.StringProperty()
    category = db.StringProperty()
