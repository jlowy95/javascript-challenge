// from data.js
var tableData = data;

// Output Table Body
var tableBody = d3.select("#ufo-table>tbody");

var dateForm = d3.select("#datetime");

var filterButton = d3.select("#filter-btn");

function handleFilter(event) {
    console.log("Filter Button clicked!");
    var dateInput = dateForm.property("value");
    console.log("New Input: " + dateInput);

    var filteredData = tableData.filter(sighting => sighting.datetime == dateInput);

    filteredData.forEach(sighting => {
        var newrow = tableBody.append("tr");
        newrow.append("td").text(sighting.datetime);
        newrow.append("td").text(sighting.city);
        newrow.append("td").text(sighting.state);
        newrow.append("td").text(sighting.country);
        newrow.append("td").text(sighting.shape);
        newrow.append("td").text(sighting.comments);
    })
}

filterButton.on("click", handleFilter);