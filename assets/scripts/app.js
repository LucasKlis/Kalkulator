const defaultResiut = 0;
let currentResult = defaultResiut;

function getUserNumberInput() {
    return parseInt(usrInput.value)
}

function add() {
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${currentResult} + ${enteredNumber}`
 currentResult = currentResult + enteredNumber;
 outputResult(currentResult, calcDescription)
} 

addBtn.addEventListener('click', add);

