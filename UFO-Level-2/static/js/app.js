// from data.js
var tableData = data;

// Output Table Body
var tableBody = d3.select("#ufo-table>tbody");

// Input Elements
var dateForm = d3.select("#datetime");
var cityForm = d3.select("#city");
var countryForm = d3.select("#country");
var stateForm = d3.select("#state");
var shapeForm = d3.select("#sphere");

// Filter Table button
var filterButton = d3.select("#filter-btn");

function handleFilter(event) {
    console.log("Filter Button clicked!");

    var dateInput = dateForm.property("value");
    console.log("New Date: " + dateInput);
    var cityInput = cityForm.property("value");
    console.log("New City: " + cityInput);
    var stateInput = stateForm.property("value");
    console.log("New State: " + stateInput);
    var countryInput = countryForm.property("value");
    console.log("New Country: " + countryInput);
    var shapeInput = shapeForm.property("value");
    console.log("New Shape: " + shapeInput);

    var filteredData = tableData.filter(sighting => {
        sighting.datetime == dateInput &&
        sighting.city == cityInput &&
        sighting.state == stateInput &&
        sighting.country == countryInput &&
        sighting.shape == shapeInput}
    );

    filteredData.forEach(sighting => {
        var newrow = tableBody.append("tr");
        newrow.append("td").text(sighting.datetime);
        newrow.append("td").text(sighting.city);
        newrow.append("td").text(sighting.state);
        newrow.append("td").text(sighting.country);
        newrow.append("td").text(sighting.shape);
        //newrow.append("td").text(sighting.durationMinutes);
        newrow.append("td").text(sighting.comments);
    })
}

filterButton.on("click", handleFilter);