const printToDom = (divId, textToPrint) => {
    const selectedId = document.getElementById(divId);
    selectedId.innerHTML = textToPrint;
};


const domStringBuilder = () => {
    let domString = '';
    // divId.forEach(() => {
    //     domString += `<div class="">`;
    //     domString += `<h2></h2>`;
    //     domString += `<h2></h2>`;
    // });
    printToDom('tempOutput', domString);
};


const toCelsius =  () => {
    const fahrenheit = 20;
    const tempC = (fahrenheit - 32) * 5/9;
    console.log(tempC);
}

const toFahrenheit =  () => {
    const celcius = 20;
    const tempF = (celcius * 9) / 5 + 32;
    console.log(tempF);
}

// Get a reference to the button element in the DOM
const button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = (e) => {
    const inputValue = document.getElementById('tempInput').value;
    console.log(inputValue);
};

const clickCatcher = () => {
    if (document.getElementById('c').checked === true) {
       console.log('Celcius');
    } else if (document.getElementById('f').checked === true) {
        console.log('Fahrenheit');
    }
};




// Assign a function to be executed when the button is clicked
const buttonEvents = () => {
    document.getElementById('tempOutput').addEventListener("click", determineConverter);
    document.getElementById('c').addEventListener("click", clickCatcher);
    document.getElementById('f').addEventListener("click", clickCatcher);
};

const init = () => {
    buttonEvents();
};
init();