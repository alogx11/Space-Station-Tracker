let mapImg, issImg;
let lat, long;
let x, y;

function preload() {
  mapImg = loadImage("assets/earth_realcolor.jpg");
  issImg = loadImage("assets/iss.png");
}

function setup() {
  createCanvas(1024, 512);

  loadJSON("http://api.open-notify.org/iss-now.json", gotData);

  setInterval(getData, 5000);
}

function draw() {
  background(220);
}

function getData() {
  loadJSON("http://api.open-notify.org/iss-now.json", gotData);
}
function gotData(data) {
  print(data);
  lat = parseFloat(data.iss_position.latitude);
  long = parseFloat(data.iss_position.longitude);
  print(lat + " " + long);
  x = map(lat, -180, 180, 0, width);
  y = map(long, -90, 90, 0, width);
}
