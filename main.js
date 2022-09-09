canvas =
document.getElementById("meuCanvas")
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.linewidth = 5;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.linewidth = 5;
ctx.arc(300, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.linewidth = 5;
ctx.arc(350, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.linewidth = 5;
ctx.arc(330, 260, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.linewidth = 5;
ctx.arc(270, 260, 40, 0, 2 * Math.PI);
ctx.stroke();


