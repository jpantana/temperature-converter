const printToDom = (divId, textToPrint) => {
    const selectedId = document.getElementById(divId);
    selectedId.innerHTML = textToPrint;
};
let tempColorClass = '';
const tempLevel = (finalTemp, unit) => {
    // let tempColorClass = '';
    if (unit === 'Fahrenheit' && finalTemp < 49) {
        tempColorClass = "blue";
    } else if (unit === 'Fahrenheit' && finalTemp > 50 && finalTemp <= 75) {
        tempColorClass = "green";
    } else if (unit === 'Fahrenheit' && finalTemp > 76) {
        tempColorClass = "green";
    }
    domStringBuilder(finalTemp, unit);
};

const domStringBuilder = (finalTemp, unit) => {
    let domString = '';
        domString += `<div class="printedDomCard">`;
        if (unit === 'Fahrenheit') {
            domString += `<h2 class="${tempColorClass}">${finalTemp}° ${unit}</h2>`;
        } else if (unit === 'Celcius') {
            domString += `<h2 class="${tempColorClass}">${finalTemp}° ${unit}</h2>`;
        } else {
            domString += `<h2 class="${tempColorClass}">${finalTemp}° ${unit}</h2>`;
        }
       domString += `</div>`;
    printToDom('tempOutput', domString);
};

const determineConverter = (e) => {
    console.log('event', e);
    if (document.getElementById('c').checked === true) {
        console.log('Converted to Celcius');
        toCelsius();
    } else if (document.getElementById('f').checked === true) {
        console.log('Converted to Fahrenheit');
        toFahrenheit();
    }
};  

const toCelsius =  () => {
    let temp = document.getElementById('tempInput').value;
    console.log(Math.round((temp - 32) * 5/9));
    let finalTemp = (Math.round((temp - 32) * 5/9));
    tempLevel(finalTemp, 'Celcius');
};

const toFahrenheit =  () => {
    let temp = document.getElementById('tempInput').value;
    console.log(Math.round(((temp * 9) / 5) + 32));
    let finalTemp = (Math.round(((temp * 9) / 5) + 32));
    tempLevel(finalTemp, 'Fahrenheit');
};

const clearIt = (e) => {
    // document.getElementById('tempInput').value = '';
    document.location.reload();
};

const buttonEvents = () => {
    document.getElementById('convertBtn').addEventListener('click', determineConverter);
    document.getElementById('clearBtn').addEventListener('click', clearIt);
};

window.addEventListener("keyup", function(event) {
if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("convertBtn").click();
}
});

// const changeColor = () => {
//     if (document.addEventListener('click', determineConverter) === true) {
        
//     }
// };


const init = () => {
  buttonEvents();
};
init();



