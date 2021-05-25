canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover="rover.png";
background_image = "mars.jpg";

rover_x=10;
rover_y=10;
rover_w=100;
rover_h=100;

function add(){
    b_img=new Image();
    b_img.onload=UploadBackground;
    b_img.src=background_image;

    r_img=new Image();
    r_img.onload=UploadRover;
    r_img.src=rover;
}

function UploadBackground(){
    ctx.drawImage(b_img,0,0,canvas.width,canvas.height);
}

function UploadRover(){
    ctx.drawImage(r_img,rover_x,rover_y,rover_w,rover_h);
}

window.addEventListener("keydown",myKey);
function myKey(e){
    var Kp=e.keyCode;
    if (Kp=="38"){
        Up();
    }
    if (Kp=="40"){
        Down();
    } 
    if (Kp=="37"){
        Left();
    }
    if (Kp=="39"){
        Right();
    }
}
function Up(){
    if (rover_y>=0){
        rover_y=rover_y-10;
        UploadBackground();
        UploadRover();
    }
}
function Down(){
    if (rover_y<=500){
        rover_y=rover_y+10;
        UploadBackground();
        UploadRover();
    }
}
function Left(){
    if (rover_x>=0){
        rover_x=rover_x-10;
        UploadBackground();
        UploadRover();
    }
}
function Right(){
    if (rover_x<=700){
        rover_x=rover_x+10;
        UploadBackground();
        UploadRover();
    }
}
