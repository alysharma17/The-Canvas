//variables go here
var canvas=document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");
var color="black";
var line_width=5;
var mouseEvent="";
//stop declaring variables
//from line 9, mousedown window listner is declared and function is created
window.addEventListener("mousedown", my_mousedown)
function my_mousedown(e) {
   ctx.beginPath();
  var color=document.getElementById("color_get").value;
  var line_width=document.getElementById("width_get").value;
  mouseEvent="mouseDown";
}
//function stops here
//new function
window.addEventListener("mouseup", my_mouseup)
function my_mouseup(e) {
   var color=document.getElementById("color_get").value;
   var line_width=document.getElementById("width_get").value;
   mouseEvent="mouseup";
}
//stops here
//mouseleave function
window.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e) {
   mouseEvent="mouseleave";
}
//stops here
//for mousemove
window.addEventListener("mousemove", my_mousemove)
function my_mousemove(e) {
   current_position_of_x=e.clientX-canvas.offsetLeft;
   current_position_of_y=e.clientY-canvas.offsetTop;
   
   if (mouseEvent=="mouseDown") {
      ctx.beginPath();
      ctx.strokeStyle=document.getElementById("color_get").value;
      ctx.lineWidth=document.getElementById("width_get").value;
      ctx.moveTo(last_x_position, last_y_position);
      ctx.lineTo(current_position_of_x, current_position_of_y);
      ctx.stroke();
   }
   last_x_position=current_position_of_x;
   last_y_position=current_position_of_y;
}
window.addEventListener("touchstart", my_touchstart)
function my_touchstart() {
   ctx.strokeStyle=document.getElementById("color_get").value;
   ctx.lineWidth=document.getElementById("width_get");
   last_position_of_touch_x= current_position_of_touch_x;
    last_position_of_touch_y= current_position_of_touch_y;
}
window.addEventListener("touchmove", my_touchmove)
function my_touchmove(e) {
   current_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
   current_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;
   ctx.beginPath();
  color=document.getElementById("color_get").value;
  line_width=document.getElementById("width_get").value;
   ctx.strokeStyle=color;
   ctx.lineWidth=line_width;
   ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
   ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
   ctx.stroke();
   last_position_of_touch_x= current_position_of_touch_x;
    last_position_of_touch_y= current_position_of_touch_y;
}
function clear_canvas() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}