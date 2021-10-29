from flask import Flask, jsonify, render_template, request
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.orm import Session
import os
import pandas as pd
import csv
import geojson
import numpy as np
# from HiddenConfig import password ## hide when deploying


app=Flask(__name__)
morerecords = os.path.join(os.getcwd(), "Resources", "newcountry.geojson")


#####################################local server-comment out on deployment###################
# connection_url=f'postgresql://postgres:{password}@localhost:5432/climate_db'
# # connection_url = os.environ.get('DATABASE_URL').replace('postgres', 'postgresql')
# engine = create_engine(connection_url)

##################################Deployment######################################

connection_url = os.environ.get('DATABASE_URL').replace('postgres', 'postgresql')
engine = create_engine(connection_url)


#################################### get data for region bar graphs ###########################


bar_df = pd.read_sql_table('region_temp_table', connection_url)  

temp_var = 1961
year_array = []
while temp_var <= 2019:
    year_array.append(temp_var)
    temp_var = temp_var + 1  
        
        
antartica_array = []
europe_array = []
oceania_array = []
asia_array = []
americas_array = []
africa_array = []

for i, row in bar_df.iteritems():
    antartica_array.append(row[0])
    europe_array.append(row[1])
    oceania_array.append(row[2])
    asia_array.append(row[3])
    americas_array.append(row[4])
    africa_array.append(row[5])

region_features = [year_array, antartica_array, europe_array, oceania_array, asia_array, americas_array, africa_array]




#################################### get data for poll line graphs ###########################
air_pollution_df = pd.read_sql_table('air_pollution_table', connection_url) 

year_array_2 = [2010,2011,2012,2013,2014,2015,2016,2017]

world_df = air_pollution_df[air_pollution_df['Country Name'] == 'World'].reset_index().drop(columns=['Country Name', 'Country Code', 'index'])
euro_df = air_pollution_df[air_pollution_df['Country Name'] == 'Europe & Central Asia'].reset_index().drop(columns=['Country Name', 'Country Code', 'index'])
us_df = air_pollution_df[air_pollution_df['Country Name'] == 'United States'].reset_index().drop(columns=['Country Name', 'Country Code', 'index'])
china_df = air_pollution_df[air_pollution_df['Country Name'] == 'China'].reset_index().drop(columns=['Country Name', 'Country Code', 'index'])
india_df = air_pollution_df[air_pollution_df['Country Name'] == 'India'].reset_index().drop(columns=['Country Name', 'Country Code', 'index'])
nepal_df = air_pollution_df[air_pollution_df['Country Name'] == 'Nepal'].reset_index().drop(columns=['Country Name', 'Country Code', 'index'])
chad_df = air_pollution_df[air_pollution_df['Country Name'] == 'Chad'].reset_index().drop(columns=['Country Name', 'Country Code', 'index'])
nigeria_df = air_pollution_df[air_pollution_df['Country Name'] == 'Nigeria'].reset_index().drop(columns=['Country Name', 'Country Code', 'index'])

world_array = []
euro_array = []
us_array = []
china_array = []
india_array = []
nepal_array = []
chad_array = []
nigeria_array = []
for i, row in world_df.iteritems():
    world_array.append(row[0])
for i, row in euro_df.iteritems():
    euro_array.append(row[0])
for i, row in us_df.iteritems():
    us_array.append(row[0])
for i, row in china_df.iteritems():
    china_array.append(row[0])
for i, row in india_df.iteritems():
    india_array.append(row[0])
for i, row in nepal_df.iteritems():
    nepal_array.append(row[0])
for i, row in chad_df.iteritems():
    chad_array.append(row[0])
for i, row in nigeria_df.iteritems():
    nigeria_array.append(row[0])
    
line_features = [year_array_2, world_array, euro_array, us_array, china_array, india_array, nepal_array, chad_array, nigeria_array]


#################################### get data for co2 bar graph ###########################
co2_df = pd.read_sql_table('co2_table', connection_url) 

country_array = []
co2_vals_array = []
for index, row in co2_df.iterrows():
    country_array.append(row[1])
    co2_vals_array.append(row[3])
    
del country_array[19]
del co2_vals_array[19]
co2_features = [country_array, co2_vals_array]





#################################### get data for co2 sector pie chart ###########################
sectorco2_df = pd.read_sql_table('sector_co2_table', connection_url) 

sector_array = []
sector_vals_array = []
for index, row in sectorco2_df.iterrows():
    sector_array.append(row[0])
    sector_vals_array.append(row[1])
sector_array.append('Energy')
sector_array.append('Industry')
sector_array.append('Land Use')
sector_array.append('Waste')
sector_vals_array.append(73.20000000000003)
sector_vals_array.append(5.2)
sector_vals_array.append(18.4)
sector_vals_array.append(3.2)

sector_features = [sector_array, sector_vals_array]



#################################### get data for pollution charts ###########################
pollution_df = pd.read_sql_table('pollution_deaths_table', connection_url)
big_array = []
country_names = []
for index, row in pollution_df.iterrows():
    country_arr=row[0]
    country_names.append(row[0])
    year_arr=(row[2])
    tot_arr=(row[3])
    indoor_arr=(row[4])
    outdoor_arr=(row[5])
    ozone_arr=(row[6])
    info_dict = {'country' : country_arr, 
                    'year' : year_arr, 
                    'total' : tot_arr, 
                    'indoor' : indoor_arr, 
                    'outdoor' : outdoor_arr, 
                    'ozone' : ozone_arr
                    }
    big_array.append(info_dict)
# the_dict = {'countries' : country_names,
#             'info' : big_array}
the_dict = big_array




#################################### get data for co2 yearly average charts ###########################
co2_year_df = pd.read_sql_table('co2_year_table', connection_url)
year_array = []
co2_avg_array = []

for index, row in co2_year_df.iterrows():
    year_array.append(row[1])
    co2_avg_array.append(row[2])

co2_year_avg_features = [year_array, co2_avg_array]



############### Get prediction data ####################

predictions_path = os.path.join(os.getcwd(), 'Resources', 'predictions.csv')
df_2016_path = os.path.join(os.getcwd(), 'Resources', 'df_2016.csv')
predictions_df = pd.read_csv(predictions_path)
df_2016 = pd.read_csv(df_2016_path)

datetime_array = []
pm25_array = []

time2016array = []
pm25_2016_array = []

for index, row in predictions_df.iterrows():
    datetime_array.append(row[1])
    pm25_array.append(row[2])
    
for index, row in df_2016.iterrows():
    time2016array.append(row[1])
    pm25_2016_array.append(row[2])

prediction_graph_features = [datetime_array, pm25_array, time2016array, pm25_2016_array]



############################The Endpoints####################################


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

@app.route('/predict', methods=['POST', 'GET'])
def predict(): 
    return render_template("predict.html")
# #     if request.method == 'POST':
#         try:
#             input_year = request.form.get('Time')
#         except:
#             input_year = 12
#         output = int(input_year)
#         return render_template("predict.html", pred=output)
# #             return render_template("predict.html", pred="Invalid Value")
# #     return render_template('predict.html')

# # @app.route('/predictdata')
# # def predictdata():
    
# #     return()




@app.route('/choropleth')
def choro():
    with open(morerecords) as f:
        gj = geojson.load(f)
    features = gj['features']
    return(jsonify(features))

@app.route('/region')
def reg_bar():
    
    return(jsonify(region_features))

@app.route('/line')
def country_line():
    
    return(jsonify(line_features))

@app.route('/co2')
def co2_bar():
    
    return(jsonify(co2_features))

@app.route('/sector')
def sector_pie():
    
    return(jsonify(sector_features))

@app.route('/pollution')
def pollution():
    
    return(jsonify(the_dict))

@app.route('/co2_year')
def year_avg():

    return(jsonify(co2_year_avg_features))

@app.route('/predictdata')
def predictdata():
    
    return(jsonify(prediction_graph_features))




    
if __name__=='__main__': 
    app.run()