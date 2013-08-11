# -*- coding: utf-8 -*-
from google.appengine.ext import db


class ModelBase(db.Model):
    def to_dict(self):
        return dict([(p, unicode(getattr(self, p))) for p in self.properties()])