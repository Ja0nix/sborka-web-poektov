
export function handleCalcSwitch() {
    const dateCalcEl = document.getElementById("datecalc");
    const timerEl = document.getElementById("timer");

    dateCalcEl.style.display = 'block';
    timerEl.style.display = 'none';
};

export function handleTimerSwitch() {
    const dateCalcEl = document.getElementById("datecalc");
    const timerEl = document.getElementById("timer");

    dateCalcEl.style.display = 'none';
    timerEl.style.display = 'block';
};