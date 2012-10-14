// (c) 2012 Ben Bederson @ University of Maryland
// Human-Computer Interaction Lab
// http://www.cs.umd.edu/~bederson
// See BSD License: LICENSE.txt

function createSampleTimeline() {
	var formatDate = d3.time.format("%b %Y");
	var chart = facetedTimeline()
	    .x(function(d) { return formatDate.parse(d.date); })
	    .y(function(d) { return +d.price; });

	d3.csv("sp500.csv", function(data) {
		d3.select("#chart")
			.datum(data)
			.call(chart);
	});
}

createSampleTimeline();

// d3.csv("pubs.csv", function(csv) {
// 	var node = vis.selectAll("g.node")
// 		.data(bubble.nodes(classes(json))
// 		.filter(function(d) { return !d.children; }))
// 		.enter().append("g")
// 		.attr("class", "node")
// 		.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
// 
// 	node.append("title")
// 		.text(function(d) { return d.className + ": " + format(d.value); });
// 
// 	node.append("circle")
// 		.attr("r", function(d) { return d.r; })
// 		.style("fill", function(d) { return fill(d.packageName); });
// 
// 	node.append("text")
// 		.attr("text-anchor", "middle")
// 		.attr("dy", ".3em")
// 		.text(function(d) { return d.className.substring(0, d.r / 3); });
// });