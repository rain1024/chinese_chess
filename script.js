var svg = d3.select("body").append("svg")
    .attr("width", 1400)
    .attr("height", 800)

var image = {
    size: 40
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

var xe_den_png = "images/xe_den.png",
    ma_den_png = "images/ma_den.png",
    tuong_2_den_png = "images/tuong_2_den.png",
    si_den_png = "images/si_den.png",
    tuong_den_png = "images/tuong_den.png",
    tot_den_png = "images/tot_den.png",
    phao_den_png = "images/phao_den.png",

    xe_do_png = "images/xe_do.png",
    ma_do_png = "images/ma_do.png",
    tuong_2_do_png = "images/tuong_2_do.png",
    si_do_png = "images/si_do.png",
    tuong_do_png = "images/tuong_do.png",
    tot_do_png = "images/tot_do.png",
    phao_do_png = "images/phao_do.png";


drawTable();
var base_X = 20;
appendDraggableImage(xe_den_png, [20, base_X]);
appendDraggableImage(xe_den_png, [20 * 33, base_X]);
appendDraggableImage(ma_den_png, [20 * 5, base_X]);
appendDraggableImage(ma_den_png, [20 * 29, base_X]);
appendDraggableImage(tuong_2_den_png, [20 * 9, base_X]);
appendDraggableImage(tuong_2_den_png, [20 * 25, base_X]);
appendDraggableImage(si_den_png, [20 * 13, base_X]);
appendDraggableImage(si_den_png, [20 * 21, base_X]);
appendDraggableImage(tuong_den_png, [20 * 17, base_X]);
appendDraggableImage(phao_den_png, [20 * 5, 20 * 9]);
appendDraggableImage(phao_den_png, [20 * 29, 20 * 9]);
appendDraggableImage(tot_den_png, [20, 20 * 13]);
appendDraggableImage(tot_den_png, [20 * 9, 20 * 13]);
appendDraggableImage(tot_den_png, [20 * 17, 20 * 13]);
appendDraggableImage(tot_den_png, [20 * 25, 20 * 13]);
appendDraggableImage(tot_den_png, [20 * 33, 20 * 13]);

appendDraggableImage(xe_do_png, [20, base_X * 37]);
appendDraggableImage(xe_do_png, [20 * 33, base_X * 37]);
appendDraggableImage(ma_do_png, [20 * 5, base_X * 37]);
appendDraggableImage(ma_do_png, [20 * 29, base_X * 37]);
appendDraggableImage(tuong_2_do_png, [20 * 9, base_X * 37]);
appendDraggableImage(tuong_2_do_png, [20 * 25, base_X * 37]);
appendDraggableImage(si_do_png, [20 * 13, base_X * 37]);
appendDraggableImage(si_do_png, [20 * 21, base_X * 37]);
appendDraggableImage(tuong_do_png, [20 * 17, base_X * 37]);
appendDraggableImage(phao_do_png, [20 * 5, 20 * 29]);
appendDraggableImage(phao_do_png, [20 * 29, 20 * 29]);
appendDraggableImage(tot_do_png, [20, 20 * 25]);
appendDraggableImage(tot_do_png, [20 * 9, 20 * 25]);
appendDraggableImage(tot_do_png, [20 * 17, 20 * 25]);
appendDraggableImage(tot_do_png, [20 * 25, 20 * 25]);
appendDraggableImage(tot_do_png, [20 * 33, 20 * 25]);
appendDraggableImage(tot_do_png, [20 * 33, 20 * 25]);


function drawTable() {
    var table = svg.append("g");
    // duong doc
    for (var i = 0; i < 9; i++) {
        table.append("line").style("stroke", "black")  // colour the line
            .attr("x1", 40 + 80 * i)     // x position of the first end of the line
            .attr("y1", 40)      // y position of the first end of the line
            .attr("x2", 40 + 80 * i)     // x position of the second end of the line
            .attr("y2", 40 * 9);
    }

    for (var i = 0; i < 9; i++) {
        table.append("line").style("stroke", "black")  // colour the line
            .attr("x1", 40 + 80 * i)     // x position of the first end of the line
            .attr("y1", 40 * 11)      // y position of the first end of the line
            .attr("x2", 40 + 80 * i)     // x position of the second end of the line
            .attr("y2", 40 * 19);
    }

    table.append("line").style("stroke", "black")
         .attr("x1", 40)
         .attr("y1", 40 * 9)
         .attr("x2", 40)
         .attr("y2", 40 * 11);

    table.append("line").style("stroke", "black")
         .attr("x1", 40 * 17)
         .attr("y1", 40 * 9)
         .attr("x2", 40 * 17)
         .attr("y2", 40 * 11);
    var offset = 5;
    table.append("line").style("stroke", "black")
         .attr("x1", 40 * 15 + offset)
         .attr("y1", 40 * 15 + offset * 3)
         .attr("x2", 40 * 15 + offset)
         .attr("y2", 40 * 15 + offset);

    table.append("line").style("stroke", "black")
         .attr("x1", 40 * 15 + offset)
         .attr("y1", 40 * 15 + offset)
         .attr("x2", 40 * 15 + offset * 3)
         .attr("y2", 40 * 15 + offset);

    table.append("line").style("stroke", "black")
         .attr("x1", 40 * 15 + offset * -1)
         .attr("y1", 40 * 15 + offset * 3)
         .attr("x2", 40 * 15 + offset * -1)
         .attr("y2", 40 * 15 + offset);

    table.append("line").style("stroke", "black")
         .attr("x1", 40 * 15 + offset * -1)
         .attr("y1", 40 * 15 + offset * -1)
         .attr("x2", 40 * 15 + offset * -1)
         .attr("y2", 40 * 15 + offset * -3);


    // duong ngang
    for (var i = 0; i < 11; i++) {
        table.append("line").style("stroke", "black")  // colour the line
            .attr("x1", 40)     // x position of the first end of the line
            .attr("y1", 40 + 80 * i)      // y position of the first end of the line
            .attr("x2", 40 * 17)     // x position of the second end of the line
            .attr("y2", 40 + 80 * i);
    }

    table.append("line").style("stroke", "black")
        .attr("x1", 20 * 14)
        .attr("y1", 20 * 2)
        .attr("x2", 20 * 22)
        .attr("y2", 20 * 10);

    table.append("line").style("stroke", "black")
        .attr("x1", 20 * 22)
        .attr("y1", 20 * 2)
        .attr("x2", 20 * 14)
        .attr("y2", 20 * 10);

    table.append("line").style("stroke", "black")
        .attr("x1", 20 * 14)
        .attr("y1", 20 * 38)
        .attr("x2", 20 * 22)
        .attr("y2", 20 * 30);

    table.append("line").style("stroke", "black")
        .attr("x1", 20 * 14)
        .attr("y1", 20 * 30)
        .attr("x2", 20 * 22)
        .attr("y2", 20 * 38);
}

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

    // var circleOutline = imageGroup.append("circle")
    //     .attr("class", "circle-outline")
    //     .attr("cx", image.size / 2)
    //     .attr("cy", image.size / 2)
    //     .attr("r", 1 + image.size / 2);

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
        .attr("transform", "translate(" + (d.position = [newX, newY]) + ")").raise();
}

function dragended(d) {
    console.log(d);
    d3.select(this);
}