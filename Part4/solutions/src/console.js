svg.remove();

var svg2 = d3.select("body").append("svg")
    .attr("width", 600)
    .attr("height", 200)
    .style("border", "1px solid");

var circle_1 = svg2.append("circle")
    .attr("id", "circle_1")
    .attr("cx", 100)
    .attr("cy", 120)
    .attr("r", 15)
    .style("fill", "green");

var circle_5 = svg2.append("circle")
    .attr("id", "circle_5")
    .attr("cx", 300)
    .attr("cy", 120)
    .attr("r", 15)
    .style("fill", "orange");


//////////////////////////////////////////
var data = [
    {"id": 1, "x":100, "y":120}, 
    {"id": 2, "x":150, "y":120}, 
    {"id": 3, "x":200, "y":120}, 
    {"id": 4, "x":250, "y":120}];

// we want to automate this
//svg2.append("circle")
//    .attr("id", "circle_" + d.id)
//    .attr("cx", d.x)
//    .attr("cy", d.y)
//    .attr("r", 15);

// now do the join with a key
var data_circle_join = 
    svg2.selectAll("circle")
    .data(data, 
        d => { d ? d.id : undefined }
    );


var enter = data_circle_join.enter()
    .append("circle")
        .attr("id", d => "circle_" + d.id)
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", 15)
        .style("fill", "navy");

var exit = data_circle_join.exit()
        .remove();
    

var merge = enter.merge(data_circle_join)
        .style("fill", "teal");


merge.append("circle")
    .attr("id", d => "circle_" + d.id)
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 0)
    .transition().duration(5000)
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", 15)
        .style("fill", "blue");

d3.selectAll("circle").remove();

data_circle_join.join("circle")
    .attr("id", d => "circle_" + d.id)
    .attr("cx", d => d.x)
    .attr("cy", d => d.y)
    .attr("r", 15)
    .style("fill", "blue");

 
d3.selectAll("circle").remove();

data_circle_join.join("circle")
    .attr("id", d => "circle_" + d.id)
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 0)
    .transition().duration(5000)
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", 15)
        .style("fill", "blue");
