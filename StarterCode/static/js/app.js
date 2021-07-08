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