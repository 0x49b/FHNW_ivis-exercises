var shirt_data = [ 
    {"size": "S", "count" : 170},
    {"size": "M", "count" : 720},
    {"size": "L", "count" : 110}
];

// define svn size and margin.
const canvHeight = 600, canvWidth = 800;
const margin = {top: 50, right: 20, bottom: 30, left: 60};

// compute the width and height of the actual chart area.
const width = canvWidth - margin.left - margin.right;
const height = canvHeight - margin.top - margin.bottom;

// 1. get reference to <body>-Tag
// 2. Create a new tag <svg width="800" height="600"> and append as child to <body>-Tag.
// 3. store reference to new tag in variable 'svg'
const svg = d3.select("body").append("svg")
            .attr("width", canvWidth)
            .attr("height", canvHeight)
            .style("border", "1px solid");

