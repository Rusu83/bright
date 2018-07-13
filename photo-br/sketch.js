var cam,slider,butt;

function setup() {
  cam=createCapture(VIDEO);
  createCanvas(901,676);
  background(0);
  slider=createSlider(17,238,50);
  butt=createButton('snap');
  butt.mousePressed(SNAP);
  cam.size(200,150);
}
  

function SNAP() {
  cam.size(180,135);
  cam.loadPixels();
  for(var y=0;y<135;y++){
    for(var x=0;x<180;x++){
      var index=(x+y*180)*4;
      var br=(cam.pixels[index]+cam.pixels[index+1]+cam.pixels[index+2])/3;
      sl=slider.value();
      if(br<(sl-17))
        rect(x*5,y*5,5,5,255);
      else if (br>(sl+17))
            rect(x*5,y*5,5,5);
            else 
              rect(x*5,y*5,5,5,135);
      }
    updatePixels();
  }
}