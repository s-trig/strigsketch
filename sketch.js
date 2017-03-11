var song;
var angle = 0;
var amp;
var slider;


function setup() {
  createCanvas(1000, 900); 
  //slider = createSlider(0, TWO_PI, PI / 4, 0.001);
  
  //loads mp3 and sets volume to 50%.  gets amplitude.
  song = loadSound("gus.mp3", loaded);
  song.setVolume(.5);
  amp = new p5.Amplitude();
}

function loaded() {
  //plays mp3 after loaded into memory
  song.play();
}

function draw() {
  var vol = amp.getLevel();
  var diam = map(vol, 0, 1, 10, 255);
  
  background(300);
  angle = diam;
  stroke(0);
  translate(width/2, height/2);
  branch(diam);
  

function branch(len) {
  line(random(0,  PI), random(0,width/PI), diam, random(-len, len/diam));
  translate(0, -len);
  if (len > 3) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    arc(50, 50, 80, random(0, 9), 0, PI+QUARTER_PI, OPEN);
    quad(38, 31, random(0,80), 20, 69, 63, random(0,80), 76);
    branch(len * 0.67);
    
    //cpu intensive amazing
    //branch(diam * 0.67); 
    pop();
  }

  line(0, 0, 0, -len * 0.67);
  }
  
}