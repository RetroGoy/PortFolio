function setup() {
    createCanvas(800, 600); 
  
    osc = new p5.Oscillator();
    osc.setType('sine'); 
    osc.freq(440); 
    osc.amp(0); 
    osc.start(); 
  }
  
  function draw() {
    background(120); 
  }
  