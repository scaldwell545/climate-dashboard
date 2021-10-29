function addDataPointsAndRender() {
    xValue = Number(document.getElementById('xValue').value);

    // Get the data with d3.
    d3.json('/predictdata').then(function(data) {

        var config = {responsive: true};
        
        var date_2016_trace = [];
        var pm25_2016_trace = [];
        
        var date_trace = [];
        var pm25_trace = [];
        
        for (var i = 0; i <= xValue; i++) { 
            date_trace.push(data[0][i])
            pm25_trace.push(data[1][i])
        };
        
        for (var i = 0; i <= data[2].length; i++) { 
            date_2016_trace.push(data[2][i])
            pm25_2016_trace.push(data[3][i])
        };

    var config = {responsive: true}
    
    var data = [
      {
        x: date_trace,
        y: pm25_trace,
        name: 'Predicted',
        type: 'lines+markers',
        opacity: 1,
        marker: {
            color: '#4a934a'
        },
        line: {
            width: 3,
            dash: 'dashdot'
        }
      }, 
        {
        x: date_2016_trace,
        y: pm25_2016_trace,
        name: 'Observed',
        type: 'line',
        opacity: 0.3,
        marker: {
            color: '#1F3F49'
        },
        line: {
              width: 3
          }
        }
    ];
    
    
    var layout = {
      title: 'Predicted Mean PM2.5 Concentrations',
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