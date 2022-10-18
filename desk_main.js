img = "";

function preload() 
{
    img = loadImage("table.jpg");
}

function setup() 
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() 
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Table", 60, 75);
    noFill();
    stroke("#FF0000");
    rect(60, 60, 500, 350);
}