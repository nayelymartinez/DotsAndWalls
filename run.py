#!flask/bin/python

"""
Script to start up dev web server
Imports the app var from __init___.py and calls run method to start server (app holds Flask instance)
To start app, run this script (chmod a+x on OS X and Linux first) -> ./run.py
Server will initialize and listen on port 5000 waiting for conn.
Go to http://localhost:5000[/index] to establish conn.
"""
from dotsandwalls import app
app.run(debug=True)