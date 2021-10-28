function addPlot() {
    var formInfo = document.getElementById("uniqueID").value;
   // Get the data with d3.
    d3.json('/predictdata').then(function(data) {
        console.log(formInfo);
        console.log(data);
    };)
};