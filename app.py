from flask import Flask, jsonify, render_template
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.orm import Session
import os
import geojson
#from hiddenConfig import password ## hide when deploying

app=Flask(__name__)

#connection_url=f'postgresql://postgres:{password}@localhost:5432/esports_db'
# connection_url = os.environ.get('DATABASE_URL_KL').replace('postgres', 'postgresql')
#engine = create_engine(connection_url)
morerecords = os.path.join(os.getcwd(), "Resources", "newcountry.geojson")


@app.route('/')
def home(): 
    return render_template('index.html')

@app.route('/data')
def data(): 
    return render_template('data.html')

@app.route('/resources')
def res(): 
    return render_template('resources.html')

@app.route('/about')
def about(): 
    return render_template('about.html')




@app.route('/choropleth')
def choro():
    with open(morerecords) as f:
        gj = geojson.load(f)
    features = gj['features']
    return(jsonify(features))


    
if __name__=='__main__': 
    app.run()