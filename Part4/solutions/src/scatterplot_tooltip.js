var tooltip = d3.select("body").append("div").classed("tooltip", true);

var tooltip = d3.select("body").append("div").classed("tooltip", true);
g.selectAll("circle").on("mouseover", (event, d) => {
    var pos = d3.pointer(event, d);
    tooltip
        .style("left", pos[0] + "px")
        .style("top", pos[1] - 28 + "px")
        .style("visibility", "visible")
        .html(`${d["First Name"]} ${d["Last Name"]}<br/>`
        + `Height: ${d.Height}<br/>` 
        + `Weigth: ${d.Weight}<br/>` 
        + `Hair Color: ${d["Hair Color"]}`);
})
.on("mouseout", (event, d) => {
    tooltip.style("visibility", "hidden");
});
