import webapp2
import jinja2
#from controllers.bookscontroller import BooksController
from controllers.editController import EditController
from services.bookservice import BookService
from services.linkservice import LinkService
from services.projectservice import ProjectService
from services.aboutservice import AboutService
from models.about import About

jinja_environment = jinja2.Environment(
    loader=jinja2.FileSystemLoader(['web']))


class MainHandler(webapp2.RequestHandler):
    def get(self):
        aboutMe = About.all().get()
        template = jinja_environment.get_template('index.html')
        self.response.out.write(template.render(aboutMe=aboutMe))

app = webapp2.WSGIApplication([
    (r'/services/books', BookService),
    (r'/services/links', LinkService),
    (r'/services/projects', ProjectService),
    (r'/services/about', AboutService),
    (r'/edit', EditController),
    ('/', MainHandler)
], debug=True)
