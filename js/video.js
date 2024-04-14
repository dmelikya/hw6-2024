var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.addEventListener("click", function() {
// 	console.log("button clicked");
// });



document.addEventListener("DOMContentLoaded", function() {
	const video = document.querySelector("video");
	const playButton = document.querySelector("#play");
	const pauseButton = document.querySelector("#pause");
	const slowerButton = document.querySelector("#slower");
	const fasterButton = document.querySelector("#faster");
	const skipButton = document.querySelector("#skip");
	const muteButton = document.querySelector("#mute");
	const volumeElement = document.querySelector("#volume");
	const volumeSlider = document.querySelector("#slider");
	const oldSchool = document.querySelector("#vintage");
	const original = document.querySelector("#orig");

	video.autoplay = false;
	video.loop = false;

	playButton.addEventListener("click", function() {
		video.play();
		console.log(`Current video speed: ${video.playbackRate}`);
		volumeElement.textContent = video.volume * 100;
	});

	pauseButton.addEventListener('click', function() {
		video.pause();
	});

	slowerButton.addEventListener('click', function() {
		video.playbackRate *= 0.9;
		console.log(`Current video speed: ${video.playbackRate}`);
	});

	fasterButton.addEventListener('click', function() {
		video.playbackRate /= 0.9;
		console.log(`Current video speed: ${video.playbackRate}`);
	});

	skipButton.addEventListener('click', function() {
		video.currentTime += 10;
		if (video.currentTime >= video.duration) {
			video.currentTime = 0;
			video.play();
		}
		console.log(`Current video time: ${video.currentTime}`);
	});

	muteButton.addEventListener('click', function() {
		video.muted = !video.muted;
		muteButton.textContent = video.muted ? 'Unmute' : 'Mute';
	});

	volumeSlider.addEventListener('input', function() {
		video.volume = volumeSlider.value / 100;
		volumeElement.textContent = volumeSlider.value;
	});

	oldSchool.addEventListener('click', function() {
		video.classList.add("oldSchool");
	});

	original.addEventListener('click', function() {
		video.classList.remove("oldSchool");
	});


});
