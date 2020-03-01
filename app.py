import os
from flask import Flask, render_template
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', weather_key=os.getenv('OPENWEATHER_KEY'))



if __name__ == '__main__':
    app.run(host='127.0.0.1',
            port=int('8080'),
            debug=True)