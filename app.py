from flask import Flask
from markupsafe import escape
from flask import render_template


app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.errorhandler(404)
def page_not_found(error):
    return render_template('error.html')



app.run(debug=True, use_reloader=False)