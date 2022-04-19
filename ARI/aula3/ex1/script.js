let video = document.getElementById("myVideo");
let meter = document.getElementById("meter");
let audio = document.getElementById("myAudio");
let button = document.getElementById("audioButton");
video.onloadedmetadata = function(){
    console.log('video.duration', video.duration);
    meter.max = video.duration;
}

function tempo(){
    meter.value = video.currentTime;
}

function playVideo(){
    document.getElementById('myVideo').play();
}
function pauseVideo(){
    document.getElementById('myVideo').pause();
}

function playAudio(){
   document.getElementById('myAudio').play();
   console.log(button);
    button.src = "pause.png";
}
function pauseAudio(){
   document.getElementById('myAudio').pause();
   button.src="play.png";
}

function audioFunctions(){
    console.log(button.getAttribute("data-state"));
    if(button.getAttribute("data-state") == "play"){
        playAudio();
    }else{
        pauseAudio();
    }
}
