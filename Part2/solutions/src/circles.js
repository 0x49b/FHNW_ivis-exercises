var shirt_data = [ 
    {"size": "S", "count" : 170},
    {"size": "M", "count" : 720},
    {"size": "L", "count" : 110}
];

// define svn size and margin.
const canvHeight = 600, canvWidth = 800;
const margin = {top: 50, right: 20, bottom: 30, left: 60};

// 1. get reference to <body>-Tag
// 2. create a new tag <svg width="800" height="600"> and append as child to <body>-Tag.
// 3. store reference to new tag in variable 'svg'
const svg = d3.select("body").append("svg")
            .attr("width", canvWidth)
            .attr("height", canvHeight)
            .style("border", "1px solid");

// 1. create parent group and append as child to <svg>-Tag.
// 2. move parent group by left and top margin.
// this will be the container that holds the histogram.
const g = svg.append("g")
             .attr("id", "chart-area")
             .attr("transform", `translate(${margin.left},${margin.top})`);

// compute the width and height of the actual chart area.
const width = canvWidth - margin.left - margin.right;
const height = canvHeight - margin.top - margin.bottom;

// we now have created the folling structure in our index.html
// <body>
//   ...
//   <svg width="800" height="600" style="border: 1px solid;">
//      <g id="chart-area" transform="translate(60,50)">
//      </g>
//   </svg>
// </body>

// 1. append new <circle>-Tag to svg and manually set cx to margin.left and cy to margin.top.
// upper left corner
svg.append("circle")
    .attr("cx", margin.left)
    .attr("cy", margin.top)
    .attr("r", 10)
    .style("fill", "lightblue");

// 2. append new <circle>-Tag to svg and manually set cx to margin.left + width and cy to margin.top + width.
// lower right corner
svg.append("circle")
    .attr("cx", margin.left + width)
    .attr("cy", margin.top + height)
    .attr("r", 10)
    .style("fill", "blue");

// Alternative. Append circles to parent group <g>.
// 1. append new <circle>-Tag to g and set cx to 0 and cy to 0.
// upper left corner
g.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 15)
    .style("fill", "fuchsia");

// 2. append new <circle>-Tag to svg and manually set cx to margin.left + width and cy to margin.top + width.
// lower right corner
g.append("circle")
    .attr("cx", width)
    .attr("cy", height)
    .attr("r", 15)
    .style("fill", "red");

// note that the red-ish circles are drawn behind the blue-ish circles although they have been painted later.
// The reason is that they are attached to the <g>-Tag which has been created *before* tbe blue-ish circles. 


// create chart area box (to be removed later)
g.append("rect")
    .attr("fill", "none")
    .attr("stroke", "#000")
    .attr("x", "0")
    .attr("y", "0")
    .attr("width", `${width}`)
    .attr("height", `${height}`);


// the final svg looks like this:
// <svg width="800" height="600" style="border: 1px solid;">
//   <g id="chart-area" transform="translate(60,50)">
//     <circle cx="0" cy="0" r="15" style="fill: fuchsia;"></circle>
//     <circle cx="720" cy="520" r="15" style="fill: red;"></circle>
//     <rect fill="none" stroke="#000" x="0" y="0" width="720" height="520"></rect>
//   </g>
//   <circle cx="60" cy="50" r="10" style="fill: lightblue;"></circle>
//   <circle cx="780" cy="570" r="10" style="fill: blue;"></circle>
// </svg>