function addPlot() {
    var formInfo = document.getElementById("uniqueID").value;
   // Get the data with d3.
    d3.json('/predictdata').then(function(data) {
        console.log(formInfo);
        console.log(data);
        
        var config = {responsive: true}

        var date_trace = data[0]
        var pm25_trace = data[1]


        var traces =  [{
          x: date_trace,
          y: pm25_trace,
          mode: 'lines+markers',
            name: 'World',
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

        Plotly.newPlot('predictions_plot', traces, layout, config);
        }
                                 );
};