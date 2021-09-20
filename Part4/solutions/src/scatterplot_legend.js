function createLegend(legendDomain, colorScale) {
    // 1. create a group to hold the legend
    const legend = svg.append("g")
        .attr("id", "legend")
        .attr("transform", "translate(" + (canvWidth - margin.right + 10) + "," + margin.top + ")")

    // 2. create the legend boxes and the text label
    //    use .data(legendDomain) on an empty DOM selection
    const legend_entry = legend.selectAll("rect")
        .data(legendDomain)
        .enter();

    legend_entry.append("rect")
        .attr("x", 10)
        .attr("y", (d,i) => 30 * i + 10)
        .attr("width", 20)
        .attr("height", 20)
        .attr("fill", d => colorScale(d))
        .attr("stroke", "black")
        .attr("stroke-width", "1");

    legend_entry.append("text")
        .attr("x", 40)
        .attr("y", (d,i) => 30 * i + 25)
        .text(d => d);

    // 3. create the main border of the legend
    legend.append("rect")
        .attr("x", 1)
        .attr("y", 1)
        .attr("width", margin.right - 15)
        .attr("height", legendDomain.length * 30 + 10)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", "1");
}
