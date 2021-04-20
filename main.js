canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseEvent="empty";
var last_x,last_y;
color="black";
line_width=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("colour").value;
    line_width=document.getElementById("line_width").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=line_width;
        ctx.moveTo(last_x,last_y)
        ctx.lineTo(current_x,current_y);
        ctx.stroke();
        canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth=2;
ctx.arc(300,200,40,0,2*Math.PI);
ctx.stroke();
color=document.getElementById("colour").value;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("colour").value;
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    circle(mouse_x,mouse_y);
}

    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();  
}
    }
    last_x=current_x;
    last_y=current_y;

function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}