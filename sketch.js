let mapImg, issImg;
let lat, long;
let x, y;
let numbPpl = "getting number of people";

function preload() {
  mapImg = loadImage("assets/earth_realcolor.jpg");
  issImg = loadImage("assets/iss.png");
}

function setup() {
  createCanvas(1024, 512);
  getData();
  // repeatedly calls get data every 5 seconds.
  setInterval(getData, 5000);
  setInterval(getNumbPpl, 5000);
}

function draw() {
  imageMode(CORNER);
  // draw earth background
  image(mapImg, 0, 0, 1024, 512);
  imageMode(CENTER);
  //draw iss
  image(issImg, x, y, issImg.width / 6, issImg.height / 6);
  textSize(25);
  textAlign(CENTER);
  stroke(255);
  fill(0);
  textFont("Helvetica");
  text(numbPpl + " people on ISS", width / 2, 50);
}

function getData() {
  // gets data from api call. then calls got data as call back function
  loadJSON("http://api.open-notify.org/iss-now.json", gotData);
}

function getNumbPpl() {
  loadJSON("http://api.open-notify.org/astros.json", gotNumb);
}

// takes data from api call and converts it into values we use
function gotData(data) {
  print(data);
  // converts string from JSON data in to float
  lat = parseFloat(data.iss_position.latitude);
  long = parseFloat(data.iss_position.longitude);
  print(lat + " " + long);
  // map long and latitude values to x and y coordinates on image
  x = map(long, -180, 180, 0, width);
  y = map(lat, -90, 90, 0, height);
  print(x + " " + y);
}

function gotNumb(data) {
  print(data);
  // take string of number of ppl and set it to numbPpl
  numbPpl = data.number;
  print(numbPpl);
}
