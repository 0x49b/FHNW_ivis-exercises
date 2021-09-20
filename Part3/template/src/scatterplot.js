// create svg canvas
const canvHeight = 600, canvWidth = 800;
const svg = d3.select("body").append("svg")
    .attr("width", canvWidth)
    .attr("height", canvHeight)
    .style("border", "1px solid");

// calc the width and height depending on margins.
const margin = { top: 50, right: 80, bottom: 50, left: 60 };
const width = canvWidth - margin.left - margin.right;
const height = canvHeight - margin.top - margin.bottom;

// chart title
svg.append("text")
    .attr("y", 0)
    .attr("x", margin.left)
    .attr("dy", "1.5em")
    .attr("font-family", "sans-serif")
    .attr("font-size", "24px")
    .style("text-anchor", "left")
    .text("Height vs Weight");

// create parent group and add left and top margin
const g = svg.append("g")
    .attr("id", "chart-area")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// text label for the x axis
g.append("text")
    .attr("y", height + margin.bottom / 2)
    .attr("x", width / 2)
    .attr("dy", "1em")
    .attr("font-family", "sans-serif")
    .style("text-anchor", "middle")
    .text("Height");

// text label for the y axis
g.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x", 0 - (height / 2))
    .attr("dy", "1em")
    .attr("font-family", "sans-serif")
    .style("text-anchor", "middle")
    .text("Weight");

function createLegend(legendDomain, colorScale) {
    // 1. create a group to hold the legend

    // 2. create the legend boxes and the text label
    //   a. use .data(legendDomain) on an empty DOM selection
    //      store enter()-loop in variable legend_entry
    //   b. add coloured rect to legend_entry
    //   c. add text label to legend_entry

    // 3. create the main border of the legend
}

// load the data from the cleaned csv file. 
// note: the call is done asynchronous. 
// That is why you have to load the data inside of a
// callback function.
d3.csv("./data/persons.csv").then(function (data) {
    const heightDomain = d3.extent(data, d => Number(d.Height));
    const weightDomain = d3.extent(data, d => Number(d.Weight));

    // 1. create scales for x and y direction and for the color coding
    const xScale = d3.scaleLinear()
        .domain(heightDomain)
        .rangeRound([0, width])
        .nice(5);
    const yScale = d3.scaleLinear()
        .domain(weightDomain)
        .rangeRound([height, 0])
        .nice(5);
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    // 2. create and append
    //    a. x-axis
    // create xAxis
    const xAxis = d3.axisBottom(xScale);
    g.append("g") // create a group and add axis
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    //    b. y-axis
    const yAxis = d3.axisLeft(yScale);
    g.append("g") // create a group and add axis
        .call(yAxis);



    // 3. add data-points (circle)
    // add circle
    g.selectAll("circle") // this results in an empty selection
        .data(data) // which is joined with the data
        .enter() // and a selection of new elements is created
        .append("circle")
        .attr("cx", d => xScale(d.Height))
        .attr("cy", d => yScale(d.Weight))
        .attr("r", 4)
        .style("fill", d => colorScale(d["Shirt Size"]));


    // 4. create legend
    legendDomain = ["S", "M", "L"];
    createLegend(legendDomain, colorScale);

    // 5. Create tooltip
    //var tooltip = d3.select("body").append("div").classed("tooltip", true);
});

