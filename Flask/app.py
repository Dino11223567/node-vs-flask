from flask import Flask, redirect, render_template, request
# Eventually, I'd like to have a bit in here about connecting a db, but for now, it's simple
from flask_sqlalchemy import SQLAlchemy

# Init the application
app = Flask(__name__)
port = 3000

# Routes
@app.route('/', methods=['GET'])
def index():

    # Variables here are passed via **locals() below.
    name = 'your_name'
    return render_template('index.html', **locals())

# Start the server
app.run(port=port)
