///////////// Initialization function 
function init() {
    d3.json('/pollution').then(function(data){
        const unique = [...new Set(data.map(item => item.year))];
        // Select the dropdown menu
        var dropdownMenu = d3.select("#selDataset");

        // Assign the value of the dropdown menu option to a variable
        var dataset = dropdownMenu.property("value");

        // append into dropdown
        unique.forEach(function(name) {
            dropdownMenu.append("option").text(name).property("value");
        });

        // initialize the first value on startup
        let tempid = data[0].year;
        plots(tempid);
    });
};
    
///////////// This function is called when a dropdown menu item is selected (given in index)
function optionChanged(selectedID) {
    plots(selectedID);
};

///////////// This function creates our plots
function plots(id){
        
    d3.json('/pollution').then(function(data){        

        ///////////// Create the stacked bar chart
        var config = {responsive: true}

        //get data for one individual according to selected ID
        var data_by_ID = data.filter(obj => {
            if (obj.year == id) {
                return obj
            }
        });
//         console.log(data_by_ID);
            
        // get total values-- repeat this step with a diff variable if another value is wanted
        var sortable = [];
        for (var i = 0; i < data_by_ID.length; i++) {
            sortable.push([data_by_ID[i].country, data_by_ID[i].total, data_by_ID[i].indoor, data_by_ID[i].outdoor, data_by_ID[i].ozone]);
        }
        
        // sort the data
        var sortedtotals = sortable.sort(function(a, b) { return b[1] - a[1]; });
//         console.log(sortedtotals);
        
        // now slice and reverse to get top 20 or so
        let slicedtotals = sortedtotals.slice(0,20);
        console.log(slicedtotals);
        
        
        /// We now have the data we need! Hooray!
        // create our trace arrays
        var country_trace = []
        var total_trace = []
        var indoor_trace = []
        var outdoor_trace = []
        var ozone_trace = []
        //now iterate over the array and populate our traces
        for (var i = 0; i < slicedtotals.length; i++) {
            country_trace.push(slicedtotals[i][0])
            total_trace.push(slicedtotals[i][1])
            indoor_trace.push(slicedtotals[i][2])
            outdoor_trace.push(slicedtotals[i][3])
            ozone_trace.push(slicedtotals[i][4])
        }
//         console.log(ozone_trace)
        
        
        var trace_1 = {
            x: country_trace,
            y: indoor_trace,
            name: 'Indoor',
            type: 'bar',
            opacity: 0.6,
              marker: {
                color: '#4a934a'
            }
        }
        
        var trace_2 = {
            x: country_trace,
            y: outdoor_trace,
            name: 'Outdoor (Particulate)',
            type: 'bar',
            opacity: 0.6,
              marker: {
                color: '#A5D8DD',
              }
        }
        
        var trace_3 = {
            x: country_trace,
            y: ozone_trace,
            name: 'Outdoor (Ozone)',
            type: 'bar',
            opacity: 0.6,
              marker: {
                color: '#9fb7c4'
              }
        }
        
        var data = [trace_1, trace_2, trace_3];

        var layout = {barmode: 'stack', 
                      plot_bgcolor:"#f8f9fa",
                      paper_bgcolor:"#f8f9fa",
//                       title: `Top 10 Countries/Regions by Total Pollution-Related Deaths (per 100,000) - ${id}`,
                      height: 500,
                      margin: {
                        l: 80,
                        r: 50,
                        b: 130,
                        t: 10,
                        pad: 4
                      },
                        yaxis: {
                            title: {
                                text : 'Deaths (per 100,000)'
                            },
                            tickmode: "linear", //  If "linear", the placement of the ticks is determined by a starting position `tick0` and a tick step `dtick`
                            tick0: 0,
                            dtick: 50,
                            range: [0, 357]
                        },
                     };

        Plotly.newPlot('stackedbar', data, layout, config);
        

    })
};


init();