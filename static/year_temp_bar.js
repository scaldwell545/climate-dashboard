// Get the data with d3.
d3.json('/region').then(function(data) {
    
    var year_trace = data[0]
    var antartica_trace = data[1]
    var europe_trace = data[2]
    var oceania_trace = data[3]
    var asia_trace = data[4]
    var americas_trace = data[5]
    var africa_trace = data[6]
    
    
    //Plot for Antarctica
    var config = {responsive: true}
    
    
    var layout_1 = {
        title: 'Antarctica',
        height: 100,
        margin: {
            l: 50,
            r: 50,
            b: 20,
            t: 40,
            pad: 5
          },
        yaxis: {
            tickmode: "linear", //  If "linear", the placement of the ticks is determined by a starting position `tick0` and a tick step `dtick`
            tick0: 0,
            dtick: 0.5,
            range: [0, 1.5]
            },
        plot_bgcolor:"#f8f9fa",
        paper_bgcolor:"#f8f9fa",
        bargap:0.1
        }
    
    var data1 = [
        {
            x: year_trace,
            y: antartica_trace,
            type: 'bar',
            marker: {
            color: '#8cba8c'
            }
          }
    ];

    Plotly.newPlot('antarctica_bar', data1, layout_1, config);
    
    
    
    
    //Plot for europe
    
    var layout_2 = {
        title: 'Europe',
        height: 100,
        margin: {
            l: 50,
            r: 50,
            b: 20,
            t: 40,
            pad: 5
          },
        yaxis: {
            tickmode: "linear", //  If "linear", the placement of the ticks is determined by a starting position `tick0` and a tick step `dtick`
            tick0: 0,
            dtick: 0.5,
            range: [0, 1.5]
            },
        plot_bgcolor:"#f8f9fa",
        paper_bgcolor:"#f8f9fa",
        bargap:0.1
    }
    
    var data2 = [
        {
            x: year_trace,
            y: europe_trace,
            type: 'bar',
            marker: {
                color: '#8cba8c'
            }
          }
    ];

    Plotly.newPlot('europe_bar', data2, layout_2, config);
    
    
    
    //Plot for oceania
    
    var layout_3 = {
        title: 'Oceania',
        height: 100,
        margin: {
            l: 50,
            r: 50,
            b: 20,
            t: 40,
            pad: 5
          },
        yaxis: {
            tickmode: "linear", //  If "linear", the placement of the ticks is determined by a starting position `tick0` and a tick step `dtick`
            tick0: 0,
            dtick: 0.5,
            range: [0, 1.5]
            },
        plot_bgcolor:"#f8f9fa",
        paper_bgcolor:"#f8f9fa",
        bargap:0.1
        }
    
    var data3 = [
        {
            x: year_trace,
            y: oceania_trace,
            type: 'bar',
            marker: {
            color: '#8cba8c'
            }
          }
    ];

    Plotly.newPlot('oceania_bar', data3, layout_3, config);
    
    
    
    //Plot for asia
    
    var layout_4 = {
        title: 'Asia',
        height: 100,
        margin: {
            l: 50,
            r: 50,
            b: 20,
            t: 40,
            pad: 5
          },
        yaxis: {
            tickmode: "linear", //  If "linear", the placement of the ticks is determined by a starting position `tick0` and a tick step `dtick`
            tick0: 0,
            dtick: 0.5,
            range: [0, 1.5]
            },
        plot_bgcolor:"#f8f9fa",
        paper_bgcolor:"#f8f9fa",
        bargap:0.1
        }
    
    var data4 = [
        {
            x: year_trace,
            y: asia_trace,
            type: 'bar',
            marker: {
            color: '#8cba8c'
            }
          }
    ];

    Plotly.newPlot('asia_bar', data4, layout_4, config);
    
    
    
    
    
    
        //Plot for africa
    
    var layout_6 = {
        title: 'Africa',
        height: 100,
        margin: {
            l: 50,
            r: 50,
            b: 20,
            t: 40,
            pad: 5
          },
        yaxis: {
            tickmode: "linear", //  If "linear", the placement of the ticks is determined by a starting position `tick0` and a tick step `dtick`
            tick0: 0,
            dtick: 0.5,
            range: [0, 1.5]
            },
        plot_bgcolor:"#f8f9fa",
        paper_bgcolor:"#f8f9fa",
        bargap:0.1
        }
    
    var data6 = [
        {
            x: year_trace,
            y: africa_trace,
            type: 'bar',
            marker: {
            color: '#8cba8c'
            }
          }
    ];

    Plotly.newPlot('africa_bar', data6, layout_6, config);
    
    
    
    
    
    
    //Plot for americas
    
    var layout_5 = {
        title: 'Americas',
        height: 100,
        margin: {
            l: 50,
            r: 50,
            b: 20,
            t: 40,
            pad: 5
          },
        yaxis: {
            tickmode: "linear", //  If "linear", the placement of the ticks is determined by a starting position `tick0` and a tick step `dtick`
            tick0: 0,
            dtick: 0.5,
            range: [0, 1.5]
            },
        plot_bgcolor:"#f8f9fa",
        paper_bgcolor:"#f8f9fa",
        bargap:0.1
        }
    
    var data5 = [
        {
            x: year_trace,
            y: americas_trace,
            type: 'bar',
            marker: {
            color: '#8cba8c'
            }
          }
    ];

    Plotly.newPlot('americas_bar', data5, layout_5, config);
    
});