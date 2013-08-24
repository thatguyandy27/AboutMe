# -*- coding: utf-8 -*-
from google.appengine.ext import db


class ModelBase(db.Model):
    def to_dict(self):
        return db.to_dict(self, {'id': self.key().id()})
        #dict([(p, unicode(getattr(self, p))) for p in self.properties()])