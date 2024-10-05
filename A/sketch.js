function setup() {
  createCanvas(windowWidth, windowHeight);
  background(33, 34, 36);
  rectMode(CENTER);
  for (let d = 0; d < windowWidth; d+=100) {
    for (let n = 0; n < windowHeight; n+=100) {
      
      for (let y = 80; y > 0; y-=10) {
        
        let x= random(30, 100)
        let q=random(100);
        let w=random(100);
        let e=random(100);
        fill(q,w,e);
        rect(d, n, x, x, 10, 10, 10, 10);
        let r=random(250);
        let g=random(250);
        let b=random(250);

        stroke(r, g, b);
        strokeWeight(8);

        
       
        
      }
    }
  }

  
}

function draw() {
 
}
