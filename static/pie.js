// Get the data with d3.
d3.json('/sector').then(function(data) {
    
    var sector_trace = data[0]
    var data_trace = data[1]
    var config = {responsive: true}

        var data = [{
          values: data_trace,
          labels: sector_trace,
          parents: ['Energy', 'Energy','Energy','Energy','Energy','Energy','Energy','Energy','Energy','Energy','Energy', 'Energy','Energy','Energy','Energy','Energy','Energy','Energy','Industry', 'Industry', 'Land Use', 'Land Use','Land Use','Land Use','Land Use','Land Use','Land Use', 'Waste', 'Waste', "", "", "", ""], 
//           domain: {column: 0},
          type: 'sunburst',
          branchvalues: 'total',
          textposition: 'inside',
          insidetextorientation: 'radial',
          leaf: {opacity: 0.6},
        }];

        var layout = {
          plot_bgcolor:"#f8f9fa",
          paper_bgcolor:"#f8f9fa",
          automargin: true,
          title: 'Global GHG Emissions by Sector 2016 (% of Total)',
          height: 600,
          sunburstcolorway:["#4a934a", "#9fb7c4", "#488A99", "#A5D8DD"]
//           grid: {rows: 1, columns: 2}
//           margin: {"l": 0, "r": 0, "b": 0, "t": 70}
        };

        Plotly.newPlot('pie', data, layout, config);
    
});