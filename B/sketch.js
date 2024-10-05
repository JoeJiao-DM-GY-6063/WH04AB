let r1=40;
let r2=40;
let r3=40;
let r4=40;
let r5=40;

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
  background(17, 17, 31);
  stroke(242, 224, 85);
  strokeWeight(10);
  noFill();

  for (let x = 0; x < windowWidth; x+=100) {
   let q=random(-r1, +r1);
   let w=random(-r2,+r2);
   let e=random(-r3, +r3);
   let r=random(-r4,+r4);
   let t=random(-r5, +r5);
   

    beginShape();
  curveVertex(x+q, 10);   
  curveVertex(x+w, 10);   
  curveVertex(x+e+100, 300); 
  curveVertex(x+r+100, 800); 
  curveVertex(x+t+100, 800); 
  endShape();  
}

function draw() {

    
  }
  

}
  


  
 

