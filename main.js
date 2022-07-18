status="";
dog_cat="";
objects= [];

function preload(){
    dog_cat=loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded(){
    console.log("COCOSSD loaded...");
    status=true;
    objectDetector.detect(dog_cat,gotResults);
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log("Objects Detected!!")
    console.log(results);
    objects= results;
}

function draw(){
    image(dog_cat, 0, 0, 640, 420);
    if(status !=""){
        for(i=0;i<objects.lenght;i++){
        document.getElementById("status").innerHTML="Status: Object Is Detected";
        noFill();
        stroke("#ff0000");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + percent + "%",objects[i].x+15,objects[i].y+15);
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}