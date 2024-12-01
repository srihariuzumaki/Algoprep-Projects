const speedUp = document.querySelector("#speedUp");
const speedDown = document.querySelector("#speedDown");
const volumeUp = document.querySelector("#volumeUp");
const volumeDown = document.querySelector("#volumeDown");
const videoBtn = document.querySelector("#videoBtn");
const videoInput = document.querySelector("#videoInput");
const videoPlayer = document.querySelector("main")



const handleInput = () => {
    console.log("input is clicked");
    videoInput.click();
}
const acceptInputHandler = (obj) => {
    const selectedVideo = obj.target.files[0];
    const link = URL.createObjectURL(selectedVideo);
    const videoElement = document.createElement("video");
    videoElement.src = link;
    videoElement.setAttribute("class","video");
    videoPlayer.appendChild(videoElement);
    videoElement.play();
    videoElement.controls="true";
    

}

const speedUpHandler = () => {
    const videoElement = document.querySelector("video")
    if(videoElement==null){
        return;
    }
    if(videoElement.playbackRate>3)
{
    return;
}    console.log("current speed:",videoElement.playbackRate);
    const increaseSpeed = videoElement.playbackRate+0.5;
    videoElement.playbackRate = increaseSpeed;
    console.log("increase speed", videoElement.playbackRate);
}

const speedDownHandler = () =>  {
    const videoElement = document.querySelector("video");
    console.log("current speed :",videoElement.playbackRate);
    if(videoElement.playbackRate>0){
        const decreaseSpeed = videoElement.playbackRate - 0.5;
        videoElement.playbackRate = decreaseSpeed;
        console.log("decreased speed", videoElement.playbackRate);
    }
}
speedUp.addEventListener("click",speedUpHandler);
videoBtn.addEventListener("click",handleInput);
videoInput.addEventListener("change",acceptInputHandler);
speedDown.addEventListener("click",speedDownHandler);
