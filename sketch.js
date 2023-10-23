let mapImg, issImg;

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
}
