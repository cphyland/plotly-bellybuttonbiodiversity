//define variable
var data;

//function to fill in the select option

function init() {
    d3.json("JS/data/samples.json").then(dataInitial => {
      data = dataInitial;
      var selectValues = dataInitial.names;