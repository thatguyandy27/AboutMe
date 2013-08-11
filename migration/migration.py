# -*- coding: utf-8 -*-
from models.book import Book

book1 = Book()
book1.title = "Code Complete"
book1.order = 9
book1.rating = 5
book1.link = 'http://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670'
book1.review = 'Code complete is a good read for anyone in the software industry.  It was a really long read, but some chapters were pretty basic so you will most likey skimming through them unless you are new to development.  It makes some really good points about the entire software life cycle and statistics to back up his viewpoints.'
book1.put()

book2 = Book()
book2.title = 'Effective Programming: More Than Writing Code'
book2.order = 8
book2.rating = 4
book2.link = 'http://www.amazon.com/Effective-Programming-More-Writing-ebook/dp/B008HUMTO0'
book2.review = "This is really a compilation of the blog posts of Jeff Atwood.  I mostly bought it because it wasn't that expensive and it made for easy reading on the train without an internet connection.  It is still a good read, but you can pretty much read his blog archive and get the same gist."
book2.put()

book3 = Book()
book3.title = 'Head First Design Patterns'
book3.order = 6
book3.rating = 4
book3.review = "A good book that talks about disign patterns you should use and how to identify them.  Most of the patterns used are applicable to traditional programming languages such as c++, Java, and .Net.  If you are working in more modern scripting languages then you might not get as much use out of it."
book3.link='http://www.amazon.com/Head-First-Design-Patterns-ebook/dp/B00AA36RZY/'
book3.put()

book4 = Book()
book4.title = "First, Break All the Rules: What the world's Greatest Managers Do Differently"
book4.link = 'http://www.amazon.com/First-Break-All-Rules-Differently/dp/0684852861'
book4.order = 1
book4.review = "Was a really helpful book for myself as a first time manager.  Had a lot of Gallop polling backing up the data ideas that they presented which was nice.  They definately took their time putting this book together."
book4.rating = 5

book4.put()

book5 = Book()
book5.title = "Drive: The Surprising Truth About What Motivates Us"
book5.link = 'http://www.amazon.com/Drive-Surprising-Truth-Motivates-ebook/dp/B004P1JDJO'
book5.order = 5
book5.rating = 5
book5.review = "A very insightful book.  I would suggest everyone read it.  It is a quick an easy read that explains a lot about the mindset of people and how great organizations work.  "
book5.put()

book6 = Book()
book6.title = "The Trusted Advisor"
book6.link = 'http://www.amazon.com/The-Trusted-Advisor-ebook/dp/B000FC0VWA'
book6.order = 0
book6.rating = 4
book6.review = "Most of this book could be summed up as common sense, but most of the points are still valid.  It is mostly useful for those in an advisory position, consultants, and salespeople.  "
book6.put()

book7 = Book()
book7.title = "How to Win Friends and Influence People"
book7.order = 0
book7.rating = 4
book7.link ='http://www.amazon.com/How-Friends-Influence-People-ebook/dp/B003WEAI4E'
book7.put()

book8 = Book()
book8.title = "Don't Make Me Think"
book8.order = 7
book8.rating = 4
book8.link = 'http://www.amazon.com/Dont-Make-Think-Usability-ebook/dp/B000SEGQNS'
book8.put()

book9 = Book()
book9.title = "The Passionate Programmer: Creating a Remarkable Career in Software Development"
book9.link = 'http://www.amazon.com/The-Passionate-Programmer-Development-ebook/dp/B00AYQNR5U'
book9.order = 6
book9.rating = 4
book9.put()
