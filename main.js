mustacheX= 0;
mustacheY= 0;
function Preload()
{
   mustache = loadImage("https://i.postimg.cc/zXgVX1HK/m.png");
}
 function setup()
 {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose',gotPoses);
 }
 function gotPoses(results)
 {
    if(results.length > 0 )
    {
      console.log("results");
      mustacheX = results[0].pose.nose.x-15;
      mustacheY = results[0].pose.nose.y+15;
      console.log("nose x = " + mustacheX);
      console.log("nose y = " + mustacheY);
    }
 }

function modelLoaded()
{
  console.log("poseNet is Initialized");
}

 function draw()
 {
  image(video, 0 , 0 ,300,300);
  image(mustache, mustacheX, mustacheY, 40, 20);
 }
  function take_snapshot()
{
    save('filter_pic.png');
}