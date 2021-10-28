function addPlot() {
//     var formInfo = document.getElementById("uniqueID").value;
   // Get the data with d3.
    d3.json('/predictdata').then(function(data) {
//         console.log(formInfo);
        console.log(data);
        
        var config = {responsive: true}

        var date_trace = data[0]
        var pm25_trace = data[1]

    var config = {responsive: true}
    
    var data = [
      {
        x: date_trace,
        y: pm25_trace,
        type: 'line',
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
    
    

    Plotly.newPlot('predictions_plot', data, layout, config);
    
    });
};