// Get the data with d3.
d3.json('/co2_year').then(function(data) {
    
    var year_trace = data[0]
    var c02_trace = data[1]
    
    var config = {responsive: true}
    
    var data = [
      {
        x: year_trace,
        y: c02_trace,
        type: 'line',
          opacity: 0.6,
          marker: {
            color: '#4a934a'
            },
          line : {
              width: 3
          }
      }
    ];
    
    
    var layout = {
      title: 'Average CO2 Emissions (Metric Tons) By Year',
      yaxis: {
          title: {
              text: 'Emissions'
          },
            },
        plot_bgcolor:"#f8f9fa",
        paper_bgcolor:"#f8f9fa",
        autosize: true, 
        height:350,
        bargap:0.05
      }
    
    

    Plotly.newPlot('co2_year', data, layout, config);
    
});