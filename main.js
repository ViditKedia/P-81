canvas=document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(325,230,40,0,2 * Math.PI);
ctx.stroke();

color = "yellow";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(375,275,40,0,2 * Math.PI);
ctx.stroke();

color = "black";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(420,230,40,0,2 * Math.PI);
ctx.stroke();

color = "green";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(470,275,40,0,2 * Math.PI);
ctx.stroke();

color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(520,230,40,0,2 * Math.PI);
ctx.stroke();