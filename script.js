var svg = d3.select("body").append("svg")
    .attr("width", 1400)
    .attr("height", 500)

var image = {
    size: 100
}

var defs = svg.append("defs");

var clipPath = defs.append("clipPath")
    .attr("id", "clip")
    .append("circle")
    .attr("cx", image.size / 2)
    .attr("cy", image.size / 2)
    .attr("r", image.size / 2);

var glow = defs.append("filter")
    .attr("id", "glow");
glow.append("feGaussianBlur")
    .attr("class", "blur")
    .attr("stdDeviation", 3.5)
    .attr("result", "coloredBlur");

var feMergeGlow = glow.append("feMerge");
feMergeGlow.append("feMergeNode")
    .attr("in", "coloredBlur");
feMergeGlow.append("feMergeNode")
    .attr("in", "SourceGraphic");

var ma_den_png = "images/ma_den.png",
    ma_do_png = "images/ma_do.png";
var doctorUrl1 = "http://68.media.tumblr.com/avatar_52ce5b752efa_128.png",
    doctorUrl2 = "images/tuong_do.png",
    doctorUrl3 = "https://68.media.tumblr.com/avatar_fde0361fb75d_128.png",
    doctorUrl4 = "https://68.media.tumblr.com/avatar_91eba9afde80_128.png";

appendDraggableImage(ma_den_png, [50, 200]);
appendDraggableImage(ma_den_png, [250, 200]);
appendDraggableImage(doctorUrl2, [500, 175]);
appendDraggableImage(doctorUrl3, [700, 175]);
appendDraggableImage(doctorUrl4, [900, 175]);

function appendDraggableImage(url, position) {
    var imageGroup = svg.append("g")
        .datum({position: position})
        .attr("transform", d => "translate(" + d.position + ")");

    // var circleFill = imageGroup.append("circle")
    // 	.attr("class", "circle-fill")
    //   .attr("cx", image.size / 2)
    //   .attr("cy", image.size / 2 )
    //   .attr("r", image.size / 2)
    //   .attr("filter", "url(#glow");

    var imageElem = imageGroup.append("image")
        .attr("xlink:href", url)
        .attr("height", image.size)
        .attr("width", image.size)
        .attr("clip-path", "url(#clip)");

    var circleOutline = imageGroup.append("circle")
        .attr("class", "circle-outline")
        .attr("cx", image.size / 2)
        .attr("cy", image.size / 2)
        .attr("r", 1 + image.size / 2);

    imageGroup.call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

}

function dragstarted(d) {
//       d3.select(this).raise();

//       d3.select(this).select(".circle-outline")
//       	.transition()
//       	.attr("r", 1 + image.size / 3);

//       d3.select(this).select(".circle-fill")
//       	.transition()
//       	.attr("r", 1 + image.size / 3);

//       d3.select(this).select("image")
//       	.attr("x", image.size / 6)
//       	.attr("y", image.size / 6)
//       	.attr("height", image.size * 2 / 3)
//         .attr("width", image.size * 2 / 3)

//       clipPath.attr("r", image.size / 3)
}

function dragged(d) {
    var newX = d3.event.x - image.size / 2,
        newY = d3.event.y - image.size / 2;

    d3.select(this)
        .attr("transform", "translate(" + (d.position = [newX, newY]) + ")");
}

function dragended(d) {
    d3.select(this).lower();
}