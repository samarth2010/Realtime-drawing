function setup()
{
  video=createCapture(VIDEO);
  video.size(550,500);

  canvas=createCanvas(550,500);
  canvas.position(560,150);

  posenet= ml5.poseNet(video,modelloaded);
posenet.on("pose",gotPoses);
}

function modelloaded()
{
    console.log("pnisIn");
}

function gotPoses(results)
{
    if(results.lenght >0);
    {
        console.log(results);
     }
}

function draw()
{
    background('#43464B');
}