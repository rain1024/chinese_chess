var svg = d3.select(".board").append("svg")
  .attr("width", 1400)
  .attr("height", 800);

var image = {
  size: 40
};

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
appendDraggableImage(xe_den_png, "BR1", [20, base_X]);
appendDraggableImage(xe_den_png, "BR2", [20 * 33, base_X]);
appendDraggableImage(ma_den_png, "BH1", [20 * 5, base_X]);
appendDraggableImage(ma_den_png, "BH2", [20 * 29, base_X]);
appendDraggableImage(tuong_2_den_png, "BE1", [20 * 9, base_X]);
appendDraggableImage(tuong_2_den_png, "BE2", [20 * 25, base_X]);
appendDraggableImage(si_den_png, "BA1", [20 * 13, base_X]);
appendDraggableImage(si_den_png, "BA2", [20 * 21, base_X]);
appendDraggableImage(tuong_den_png, "BK", [20 * 17, base_X]);
appendDraggableImage(phao_den_png, "BC1", [20 * 5, 20 * 9]);
appendDraggableImage(phao_den_png, "BC2", [20 * 29, 20 * 9]);
appendDraggableImage(tot_den_png, "BP1", [20, 20 * 13]);
appendDraggableImage(tot_den_png, "BP2", [20 * 9, 20 * 13]);
appendDraggableImage(tot_den_png, "BP3", [20 * 17, 20 * 13]);
appendDraggableImage(tot_den_png, "BP4", [20 * 25, 20 * 13]);
appendDraggableImage(tot_den_png, "BP5", [20 * 33, 20 * 13]);

appendDraggableImage(xe_do_png, "RR1", [20, base_X * 37]);
appendDraggableImage(xe_do_png, "RR2", [20 * 33, base_X * 37]);
appendDraggableImage(ma_do_png, "RH1", [20 * 5, base_X * 37]);
appendDraggableImage(ma_do_png, "RH2", [20 * 29, base_X * 37]);
appendDraggableImage(tuong_2_do_png, "RE1", [20 * 9, base_X * 37]);
appendDraggableImage(tuong_2_do_png, "RE2", [20 * 25, base_X * 37]);
appendDraggableImage(si_do_png, "RA1", [20 * 13, base_X * 37]);
appendDraggableImage(si_do_png, "RA2", [20 * 21, base_X * 37]);
appendDraggableImage(tuong_do_png, "RK", [20 * 17, base_X * 37]);
appendDraggableImage(phao_do_png, "RC1", [20 * 5, 20 * 29]);
appendDraggableImage(phao_do_png, "RC2", [20 * 29, 20 * 29]);
appendDraggableImage(tot_do_png, "RP1", [20, 20 * 25]);
appendDraggableImage(tot_do_png, "RP2", [20 * 9, 20 * 25]);
appendDraggableImage(tot_do_png, "RP3", [20 * 17, 20 * 25]);
appendDraggableImage(tot_do_png, "RP4", [20 * 25, 20 * 25]);
appendDraggableImage(tot_do_png, "RP5", [20 * 33, 20 * 25]);

function Piece(id) {
  this.id = id;
  this.move = function (move) {
    console.log(move);
    let next_position = this.get_next_position(move);
    this.move_image(this.id, next_position)
  };

  this.get_next_position = function (move) {
    // current position
    let cx = this.position["x"];
    let cy = this.position["y"];
    let direction = move[0];
    let next_position = parseInt(move[1]);
    console.log("direction:" + direction);
    let x = this.position["x"];
    let y = this.position["y"];
    if (direction == ".") {
      x = next_position;
    } else if (direction == "+") {
      if (this.type == "H") {
        x = next_position;
        y = cy + 2;
        console.log("H move", cy)
      }
    }

    return {"x": x, "y": y}
  };

  this.move_image = function (id, position) {

  };
}

function Board(moves) {
  this.moves = moves.match(/.{1,4}/g);
  this.move_index = 0;
  this.move_side = 0;
  this.pieces = {
    "03": new Piece("RP1"),
    "23": new Piece("RP2"),
    "43": new Piece("RP3"),
    "63": new Piece("RP4"),
    "83": new Piece("RP5"),
    "12": new Piece("RC1"),
    "72": new Piece("RC2"),
    "00": new Piece("RR1"),
    "10": new Piece("RH1"),
    "20": new Piece("RE1"),
    "30": new Piece("RA1"),
    "40": new Piece("RK"),
    "50": new Piece("RA2"),
    "60": new Piece("RE2"),
    "70": new Piece("RH2"),
    "80": new Piece("RR2"),
    "06": new Piece("BP1"),
    "26": new Piece("BP2"),
    "46": new Piece("BP3"),
    "66": new Piece("BP4"),
    "86": new Piece("BP5"),
    "17": new Piece("BC1"),
    "77": new Piece("BC2"),
    "09": new Piece("BR1"),
    "19": new Piece("BH1"),
    "29": new Piece("BE1"),
    "39": new Piece("BA1"),
    "49": new Piece("BK"),
    "59": new Piece("BA2"),
    "69": new Piece("BE2"),
    "79": new Piece("BH2"),
    "89": new Piece("BR2")
  };
  this.start = function () {
    console.log("hihi");
  };

  this.move = function (move) {
    // parse move
    let current_position = move.substring(0, 2);
    let next_position = move.substring(2);
    if(next_position in this.pieces){
      let previous_piece = this.pieces[next_position];
      let previous_image_id = "#" + previous_piece.id;
      this.hide_image(previous_image_id)
    }
    let piece = this.pieces[current_position];
    let image_id = "#" + piece.id;
    this.move_image(image_id, next_position);
    console.log(move);
    delete this.pieces[current_position];
    this.pieces[next_position] = piece;
    if (this.is_end()) {
      this.end_game();
    }
  };

  this.move_image = function (image_id, next_position) {
    console.log("move image");
    console.log(image_id);
    console.log(next_position);
    let x, y;
    if (next_position == "aa") {
      x = -100;
      y = -100;
    } else {
      let x_offset = 20;
      let y_offset = 20;
      let size = 80;
      let dx = parseInt(next_position.substr(0, 1));
      let dy = parseInt(next_position.substr(1));
      x = x_offset + dx * size;
      y = (9 - dy) * size + 20;
    }
    let image_translate = "translate(" + x + "," + y + ")";
    d3.select(image_id).attr("transform", image_translate);
  };

  this.hide_image = function (image_id) {
    d3.select(image_id).attr("visibility", "hidden");
  };

  this.end_game = function () {
    console.log("End Game");
    $("#next").attr("disabled", true);
  };
  this.is_end = function () {
    console.log(this.move_index);
    console.log(this.move_side);
    return (this.move_side == 1) && (this.move_index == this.moves.length - 1);
  };

  this.next = function () {
    let move = this.moves[this.move_index];
    console.log("holy next", move);
    this.move(move);

    this.move_index += 1;
  };
}

// let moves = [
//   ["C2.5", "H8+7"],
//   ["H2+3", "R9.8"]
// ];
let moves = "7242192770621707100279878070897900102947636426251222394830410605625409395446273570737757736307031013050443447975635387686465666544457576223239095354354354446856455557554625472544432547434656684645555445447674440409391303544404094729321274731219733319396947393868560929483929273948030948392747594809063353"
let board = new Board(moves);
for (let i = 0; i < 50; i++) {
  board.next();
}


function drawTable() {
  var table = svg.append("g");
  // duong doc
  for (let i = 0; i < 9; i++) {
    table.append("line").style("stroke", "black")  // colour the line
      .attr("x1", 40 + 80 * i)     // x position of the first end of the line
      .attr("y1", 40)      // y position of the first end of the line
      .attr("x2", 40 + 80 * i)     // x position of the second end of the line
      .attr("y2", 40 * 9);
  }

  for (let i = 0; i < 9; i++) {
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

  add_mark(table, 40 * 15, 40 * 15);
  add_mark(table, 40 * 3, 40 * 15);

  add_mark(table, 40 * 3, 40 * 5);
  add_mark(table, 40 * 15, 40 * 5);


  add_mark(table, 40 * 5, 40 * 13);
  add_mark(table, 40 * 9, 40 * 13);
  add_mark(table, 40 * 13, 40 * 13);

  add_mark(table, 40 * 5, 40 * 7);
  add_mark(table, 40 * 9, 40 * 7);
  add_mark(table, 40 * 13, 40 * 7);

  add_mark_2(table, 40, 40 * 7);
  add_mark_2(table, 40, 40 * 13);

  add_mark_3(table, 40 * 17, 40 * 7);
  add_mark_3(table, 40 * 17, 40 * 13);

  function add_line_mark(element, X, Y, XO1, YO1, XO2, YO2) {
    element.append("line").style("stroke", "black")
      .attr("x1", X + XO1 * offset)
      .attr("y1", Y + YO1 * offset)
      .attr("x2", X + XO2 * offset)
      .attr("y2", Y + YO2 * offset);
  }

  function add_mark(element, X, Y) {
    add_line_mark(element, X, Y, 1, 1, 3, 1);
    add_line_mark(element, X, Y, 1, 1, 1, 3);
    add_line_mark(element, X, Y, 1, -1, 3, -1);
    add_line_mark(element, X, Y, 1, -3, 1, -1);
    add_line_mark(element, X, Y, -1, -1, -1, -3);
    add_line_mark(element, X, Y, -1, -1, -3, -1);
    add_line_mark(element, X, Y, -1, 3, -1, 1);
    add_line_mark(element, X, Y, -1, 1, -3, 1);
  }

  function add_mark_2(element, X, Y) {
    add_line_mark(element, X, Y, 1, 1, 3, 1);
    add_line_mark(element, X, Y, 1, 1, 1, 3);
    add_line_mark(element, X, Y, 1, -1, 3, -1);
    add_line_mark(element, X, Y, 1, -3, 1, -1);
  }

  function add_mark_3(element, X, Y) {
    add_line_mark(element, X, Y, -1, -1, -1, -3);
    add_line_mark(element, X, Y, -1, -1, -3, -1);
    add_line_mark(element, X, Y, -1, 3, -1, 1);
    add_line_mark(element, X, Y, -1, 1, -3, 1);
  }


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

function appendDraggableImage(url, id, position) {
  var imageGroup = svg.append("g")
    .datum({position: position})
    .attr("id", id)
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
  // var newX = d3.event.x - image.size / 2,
  //     newY = d3.event.y - image.size / 2;
  //
  // d3.select(this)
  //     .attr("transform", "translate(" + (d.position = [newX, newY]) + ")").raise();
}

function dragended(d) {

  var newX = d3.event.x - image.size / 2,
    newY = d3.event.y - image.size / 2;

  d3.select(this)
    .attr("transform", "translate(" + (d.position = [newX, newY]) + ")").raise();
  console.log(d);
  d3.select(this);
}

$("#next").click(function () {
  board.next();
});
