const speedUp = document.querySelector("#speedUp");
const speedDown = document.querySelector("#speedDown");
const volumeUp = document.querySelector("#volumeUp");
const volumeDown = document.querySelector("#volumeDown");
const videoBtn = document.querySelector("#videoBtn");
const videoInput = document.querySelector("#videoInput");
const videoPlayer = document.querySelector("main")

const speedUpHandler = () => {
    console.log("speed up was clicked");
}

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

speedUp.addEventListener("click",speedUpHandler);
videoBtn.addEventListener("click",handleInput);
videoInput.addEventListener("change",acceptInputHandler)
