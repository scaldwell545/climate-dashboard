function addDataPointsAndRender() {
    xValue = Number(document.getElementById('xValue').value);

    // Get the data with d3.
    d3.json('/predictdata').then(function(data) {

        var config = {responsive: true};
        
        var date_2016_trace = [data[2]];
        var pm25_2016_trace = [data[3]];
        
        var date_trace = [];
        var pm25_trace = [];
        
        for (var i = 0; i <= xValue; i++) { 
            date_trace.push(data[0][i])
            pm25_trace.push(data[1][i])
        };

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
      }, {
      x: date_2016_trace,
      y: pm25_2016_trace,
      type: 'line',
          opacity: 0.6,
          marker: {
            color: '#1F3F49'
            }
      }
    ];
    
    
    var layout = {
      title: 'Predicted PM2.5 Concentrations',
      yaxis: {
          title: {
              text: 'PM2.5 (µg/m3)'
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

var renderButton = document.getElementById('renderButton');
renderButton.addEventListener('click', addDataPointsAndRender);