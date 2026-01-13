let pg1,pg2;
let img;

function setup() {
  var c = createCanvas(600,600);
  c.parent("canvasWrapper");
  img = loadImage("img/15.jpg");
  pg1 = createGraphics(600,600);
  pg2 = createGraphics(600,600);
}

function draw() {
  var c;
  var dis= dist(mouseX,mouseY,pmouseX,pmouseY);
  var mdis = map(dis,0,190,5,80);
  print (dis);
  pg2.background(img);
  //pg2.image(img,0,0);
  pg1.noStroke ();
  //pg1.fill(c);
 // if (mouseIsPressed === true){
   // pg1.ellipse(mouseX,mouseY,mdis,mdis);
  
  //}
  //pg1.ellipse(mouseX,mouseY,30,30);
  for(var x=0; x<width; x=x+10){
for(var y=0; y<height; y=y+10){
  c= pg2.get(x,y);
    pg1.fill(c); 
pg1.ellipse(x , y,20,20);
}
   
  }
  //image(pg2,0,0);
  image(pg1,0,0);
}
function saveIMG(){
  clear();
image(pg1,0,0);
save("cercle.png");
}
function keyPressed(){
  if(key === "s"|| key === "s" ){
   saveIMG(); 
  }
}