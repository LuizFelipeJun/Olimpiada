canvas =
document.getElementById("meuCanvas")
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.stokeStyle = "blue";
ctx.linewidth = 5;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.stokeStyle = "red";
ctx.linewidth = 5;
ctx.arc(300, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.stokeStyle = "green";
ctx.linewidth = 5;
ctx.arc(350, 210, 40, 0, 2 * Math.PI);
ctx.stroke();


