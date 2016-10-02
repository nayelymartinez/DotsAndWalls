"""
Views.py: 
views are the handlers that respond to requests from web browsers.
Handlers are written as Python fns. 
Each view fn is mapped to one or more request URLs.
"""

from dotsandwalls import app

"""
Two decorators map from the URLs '/' and '/index' to this fn
"""
@app.route('/')
@app.route('/index')
def index():
	return "Hello world!"