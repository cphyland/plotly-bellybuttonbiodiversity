//define variable
var data;

//function to fill in the select option

function init() {
    d3.json("JS/data/samples.json").then(dataInitial => {
      data = dataInitial;
      var selectValues = dataInitial.names;

      var selectOpt = d3.select("#selDataset");

    selectValues.forEach(value => {
      selectOpt
        .append("option")
        .text(value)
        .attr("value", function() {
          return value;
        });
    });
  });
}
//start filling the data inside the select option
init();

//

d3.selectAll("#selDataset").on("change", plotFunctions);

function plotFunctions() {
  var valueSelect = d3.select("#selDataset").node().value;
  demographicFunc(valueSelect);
  panelPlot(valueSelect);
  demographicFunc(valueSelect);
  bubbleChart(valueSelect);
  gaugeChart(valueSelect);
}

function demographicFunc(valueSelect) {
    var filterValue2 = data.samples.filter(value => value.id == valueSelect);
    var ouid = filterValue2.map(v => v.otu_ids);
    ouid = treatOuid(ouid[0].slice(0, 10));
    var valueX = filterValue2.map(v => v.sample_values);
    valueX = valueX[0].slice(0, 10);