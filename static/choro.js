// Adding the tile layer
var sliderControl = null;

// https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png

streetmap = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL'
})



function getColor(d) {
    return d > 2 ? '#ff2525' :
           d > 1.5  ? '#df2940' :
           d > 1  ? '#bf2d5c' :
           d > 0.5  ? '#9f3177' :
           d > 0   ? '#803592' :
           d > -0.5   ? '#6039ad' :
           d > -1   ? '#403dc9' :
           d > -1.5       ? '#2041e4' :
                        '#0045ff';
    
}

function style(feature) {
    return {
        fillColor: getColor(feature),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}



// Get the data with d3.
d3.json('/choropleth').then(function(data) {

    let first_year = 1961;
    for (var i = first_year; i < 2020; i++) {
        year_layer = []
        for (var j = 0; j < data.length; j++) {
            try { 
                
                temp_var = L.geoJson(data[j], {style: style(data[j]['properties']["temp"][`${i}`]), onEachFeature: function (feature, layer) { layer.bindPopup('<p>Year: '+i+'<br>Country: '+feature.properties['ADMIN']+'<br>Change in Mean Surface Temp: '+feature['properties']["temp"][`${i}`]+' °C</p>');
                                              }, time:i})
                year_layer.push(temp_var)
            } 
            catch (error) { 
                null; /* any default can be used */
            };
        }
        window[`y${i}`] = L.layerGroup(year_layer)
    }
    
    var baseLayers = {
    "Streets": streetmap
};

var overlayLayers = {
    "1970": y1970,
    "1971" : y1971, 
    "1972" : y1972, 
    "1973" : y1973, 
    "1974" : y1974, 
    "1975" : y1975, 
    "1976" : y1976, 
    "1977" : y1977, 
    "1978" : y1978,
    "1979" : y1979,
    "1980" : y1980,
    "1981" : y1981,
    "1982" : y1982,
    "1983" : y1983,
    "1984" : y1984,
    "1985" : y1985,
    "1986" : y1986,
    "1987" : y1987,
    "1988" : y1988,
    "1989" : y1989,
    "1990" : y1990,
    "1991" : y1991,
    "1992" : y1992,
    "1993" : y1993,
    "1994" : y1994,
    "1995" : y1995,
    "1996" : y1996,
    "1997" : y1997,
    "1998" : y1998,
    "1999" : y1999,
    "2000" : y2000,
    "2001" : y2001,
    "2002" : y2002,
    "2003" : y2003,
    "2004" : y2004,
    "2005" : y2005,
    "2006" : y2006,
    "2007" : y2007,
    "2008" : y2008,
    "2009" : y2009,
    "2010" : y2010,
    "2011" : y2011,
    "2012" : y2012,
    "2013" : y2013,
    "2014" : y2014,
    "2015" : y2015,
    "2016" : y2016,
    "2017" : y2017,
    "2018" : y2018,
    "2019" : y2019,
};
    
// Creating the map object
var myMap = L.map("map", {
    center: [39.3999, -8.2245],
    zoom: 2,
    layers : [streetmap, y1970]
});

    
    var years = [y1970, y1971, y1972, y1973, y1974, y1975, y1976, y1977, y1978, y1979, 
                 y1980, y1981, y1982, y1983, y1984, y1985, y1986, y1987, y1988, y1989, 
                 y1990, y1990, y1990, y1990, y1990, y1990, y1990, y1990, y1990, y1990,
                 y2000, y2001, y2002, y2003, y2004, y2005, y2006, y2007, y2008, y2009,
                 y2010, y2011, y2012, y2013, y2014, y2015, y2016, y2017, y2018, y2019];
    layerGroup = L.layerGroup(years);
    var sliderControl = L.control.sliderControl({
        layer: layerGroup,
        follow: true
    });
    myMap.addControl(sliderControl);
    sliderControl.startSlider();
           

//     L.control.layers(baseMaps).addTo(myMap);
    L.control.layers(overlayLayers).addTo(myMap);
    
    
    var legend = L.control({position: 'bottomleft'});

    legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [-1, -0.5, 0, 0.5, 1, 1.5],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + '<br>';
    }

    return div;
    }
        
    legend.addTo(myMap);
    
    
//     L.Control.Layers.include({
//   getOverlays: function() {
//     // create hash to hold all layers
//     var control, layers;
//     layers = {};
//     control = this;

//     // loop thru all layers in control
//     control._layers.forEach(function(obj) {
//       var layerName;

//       // check if layer is an overlay
//       if (obj.overlay) {
//         // get name of overlay
//         layerName = obj.name;
//         // store whether it's present on the map or not
//         return layers[layerName] = control._map.hasLayer(obj.layer);
//       }
//     });

//         return layers;
//       }
//     });
    
//     var control = new L.Control.Layers(overlayLayers);

//     console.log(control.getOverlays()) // { Truck 1: true, Truck 2: false, Truck 3: false }
    
});