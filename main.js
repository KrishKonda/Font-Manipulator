nosex=0;
nosey=0;
difference=0;
leftWristx=0;
rightWristx=0;
function preload(){

}
function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,500);
canvas.position(560,150);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotPoses);
}
function draw(){
    background("#C2B2B2");
    document.getElementById("text_size").innerHTML="the font size="+difference+"px.";
    textSize(difference);
    fill("#0099ff");
    text("Krish",nosex,nosey);
}
function modelLoaded(){
    console.log("poseNet model is initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex="+nosex+",nosey="+nosey);
        leftWristx=results[0].pose.leftWrist.x;
        rightWristx=results[0].pose.rightWrist.x;
        difference=floor(leftWristx-rightWristx);
        console.log("leftWristx="+leftWristx+",rightWristx="+rightWristx+"and difference="+difference);
    }
}