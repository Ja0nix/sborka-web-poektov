import './style.scss';

import { diffDates, diffToHtml } from "./datecalc.js"; // 1
import { formatError } from "./utils.js"; // 2

//Timer Switcher 
import { handleCalcSwitch, handleTimerSwitch } from "./switcher.js";

//Timer  
import { startCountdown } from "./timer.js";

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate); // 3
        dateCalcResult.innerHTML = diffToHtml(diff); // 4
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); // 5
}

//Timer Switcher 
const dateCalcSwitcher = document.getElementById("switcherCalc");
const timerSwitcher = document.getElementById("switcherTimer");

timerSwitcher.addEventListener("click", handleTimerSwitch);
dateCalcSwitcher.addEventListener("click", handleCalcSwitch);


//Timer
window.onload = function(){

	// create input text box and give it an id of "min"
	var inputMinutes = document.createElement("input");
	inputMinutes.setAttribute("id", "minutes");
	inputMinutes.setAttribute("type", "text");
	
	//create a start button
	var startButton = document.createElement("input");
	startButton.setAttribute("type","button");
	startButton.setAttribute("value","Start Countdown");
	startButton.onclick = function(){
		startCountdown();
	};

    //create a stop button
	var stopButton = document.createElement("input");
	stopButton.setAttribute("type","button");
	stopButton.setAttribute("value","Stop Countdown");
    stopButton.setAttribute("id","stopCountdown");
	

	//add to the DOM, to the div called "inputArea"
	document.getElementById("inputArea").appendChild(inputMinutes);
	document.getElementById("inputArea").appendChild(startButton);
    document.getElementById("inputArea").appendChild(stopButton);		

}

