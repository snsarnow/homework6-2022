var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	console.log("The current volume is " + video.volume)
	document.querySelector("#volume").innerHTML = video.volume *100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("The current speed is " + video.playbackRate)
	video.playbackRate = video.playbackRate *0.95
	console.log("The new speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("The current speed is " + video.playbackRate)
	video.playbackRate = video.playbackRate *1.05
	console.log("The new speed is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("The current time is " + video.currentTime)
	if (video.currentTime + 15 < video.duration){
		video.currentTime = video.currentTime + 15
	}
	else{
		video.currentTime = 0
	}
	console.log("The new time is " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("The value of mute is " + video.muted)
	if (video.muted == true){
		document.querySelector("#mute").innerHTML = "Mute"
		video.muted = false
	}	
	else{
		document.querySelector("#mute").innerHTML = "Unmute"
		video.muted = true
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value/100
	document.querySelector("#volume").innerHTML = this.value + "%"
	console.log("The new volume is " + video.volume)
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("The style is Old School")
	video.classList.add('oldSchool')
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("The style is Original")
	video.classList.remove("oldSchool")
});


