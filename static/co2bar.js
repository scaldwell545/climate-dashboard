// Get the data with d3.
d3.json('/co2').then(function(data) {
    
    var country_trace = data[0]
    var c02_trace = data[1]
    
    var config = {responsive: true}
    
    var data = [
      {
        x: country_trace,
        y: c02_trace,
        type: 'bar',
        transforms: [{
            type: 'sort',
            target: 'y',
            order: 'descending'
          }],
          opacity: 0.6,
          marker: {
            color: '#4a934a'
            }
      }
    ];
    
    
    var layout = {
      title: 'CO2 and GHG Emissions by Country 2016 (Metric Tons)',
      yaxis: {
          title: {
              text: 'Emissions (Metric Tons)'
          },
            },
        plot_bgcolor:"#f8f9fa",
        paper_bgcolor:"#f8f9fa",
        autosize: true, 
        height:550,
        bargap:0.05
      }
    
    

    Plotly.newPlot('co2bar', data, layout, config);
    
});