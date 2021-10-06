// Get the data with d3.
d3.json('/line').then(function(data) {
    
    var config = {responsive: true}
    
    var year_trace = data[0]
    var world_trace = data[1]
    var euro_array = data[2]
    var us_array = data[3]
    var china_array = data[4]
    var india_array = data[5]
    var nepal_array = data[6]
    var chad_array = data[7]
    var nigeria_array = data[8]
    
    
    var traces =  [{
      x: year_trace,
      y: world_trace,
      mode: 'lines+markers',
        name: 'World',
        fill: 'toself'
    }, {
      x: year_trace,
      y: euro_array,
      mode: 'lines+markers',
        name: 'Europe',
        fill: 'toself'
    }, {
      x: year_trace,
      y: us_array,
      mode: 'lines+markers',
        name: 'U.S.',
        fill: 'toself'
    }, {
      x: year_trace,
      y: china_array,
      mode: 'lines+markers',
        name: 'China',
        fill: 'toself'
    }, {
      x: year_trace,
      y: india_array,
      mode: 'lines+markers',
        name: 'India',
        fill: 'toself'
    }, {
      x: year_trace,
      y: nepal_array,
      mode: 'lines+markers',
        name: 'Nepal',
        fill: 'toself'
    }, {
      x: year_trace,
      y: chad_array,
      mode: 'lines+markers',
        name: 'Chad',
        fill: 'toself'
    }, {
      x: year_trace,
      y: nigeria_array,
      mode: 'lines+markers',
        name: 'Nigeria',
        fill: 'toself'
    }];


    var layout = {
        xaxis:{
            title : {
                text: 'Year'
            }
        },
      yaxis: {
          title: {
              text: 'µg/m3'
          },
            tickmode: "linear", //  If "linear", the placement of the ticks is determined by a starting position `tick0` and a tick step `dtick`
            tick0: 0,
            dtick: 20,
            range: [-3, 110]
            },
        plot_bgcolor:"#f8f9fa",
        paper_bgcolor:"#f8f9fa",
        autosize: true, 
        height:550,
        colorway : ['#4a934a', '#488A99', '#1F3F49', '#4CB5F5', '#23282D', '#9fe2bf', '#7E909A', '#A5D8DD']
      }

    Plotly.newPlot('lineDiv', traces, layout, config);
    
    
});