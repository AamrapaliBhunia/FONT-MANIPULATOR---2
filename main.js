function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,480);
    canvas.position(600,80);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#ADA8BE');
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length >0)
    {
        console.log(results);
    }
}