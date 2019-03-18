const printToDom = (divId, textToPrint) => {
    const selectedId = document.getElementById(divId);
    selectedId.innerHTML = textToPrint;
};


const domStringBuilder = (determineConverter, celOrFah) => {
    let domString = '';
        domString += `<div class="printedDomCard">`;
        domString += `<h2>${determineConverter}</h2>`;
        domString += `<h2>${celOrFah}</h2>`;
        domString += `</div>`;
    // call printToDom function
    printToDom('tempOutput', domString);
};

// Get a reference to the button element in the DOM
// const button = document.getElementById("convertBtn");


// This function should determine which conversion should
// happen based on which radio button is selected.


// This function prints value and checked info to console and calls domString function
const determineConverter = (e) => {
    var inputValue = document.getElementById('tempInput').value;
    console.log(inputValue);
    console.log('event', e);
        const celOrFah = () => {
            if (document.getElementById('c').checked === true) {
                console.log('Celcius');
                return 'Celcius';
            } else if (document.getElementById('f').checked === true) {
                console.log('Fahrenheit');
                return 'Fahrenheit';
            }
        };
        celOrFah();
        domStringBuilder(inputValue, celOrFah());
    };  

// Assign a function to be executed when the button is clicked
const buttonEvents = () => {
    document.getElementById('convertBtn', 'c' || 'f').addEventListener('click', determineConverter);
    // document.getElementById('c').addEventListener('click', determineConverter);
    // document.getElementById('f').addEventListener('click', determineConverter);
};

const init = () => {
    
};
init();



const toCelsius =  () => {
    const fahrenheit = 20;
    const tempC = (fahrenheit - 32) * 5/9;
    console.log(tempC);
};

const toFahrenheit =  () => {
    const celcius = 20;
    const tempF = (celcius * 9) / 5 + 32;
    console.log(tempF);
};