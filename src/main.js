import { diffDates, diffToHtml } from "./datecalc.js"; // 1
import { formatError } from "./utils.js"; // 2

//Timer Switcher 
import { handleCalcSwitch, handleTimerSwitch } from "./switcher.js";

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