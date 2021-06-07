import { playSound } from "./sound.js";

let secondsRemaining;
let intervalHandle;

export function resetPage(){

	document.getElementById("inputArea").style.display = "block";

}

export function tick(){
	// grab the h1
	let timeDisplay = document.getElementById("time");

	// turn the seconds into mm:ss
	let min = Math.floor(secondsRemaining / 60);
	let sec = secondsRemaining - (min * 60);

	//add a leading zero (as a string value) if seconds less than 10
	if (sec < 10) {
		sec = "0" + sec;
	}

	// concatenate with colon
	let message = min.toString() + ":" + sec;

	// now change the display
	timeDisplay.innerHTML = message;

	// stop is down to zero
	if (secondsRemaining === 0){
        playSound();
		// alert("Done!");
		clearInterval(intervalHandle);
		resetPage();
	}

	//subtract from seconds remaining
	secondsRemaining--;

}

export function startCountdown(){

	function resetPage(){
		document.getElementById("inputArea").style.display = "block";
	}

	// get countents of the "minutes" text box
	let minutes = document.getElementById("minutes").value;
	
	// check if not a number
	if (isNaN(minutes)){
		alert("Please enter a number");
		return; // stops function if true
	}

	// how many seconds
	secondsRemaining = minutes * 60;
	
	//every second, call the "tick" function
	// have to make it into a variable so that you can stop the interval later!!!
	intervalHandle = setInterval(tick, 1000);

    let stopButton = document.getElementById("stopCountdown");
	stopButton.onclick = function(){
		clearInterval(intervalHandle);
	};


}