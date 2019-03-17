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
    // const buttonId = e.target.id;
    const selectedTemps = [];
    const inputValue = document.getElementById('tempInput').value;
    console.log(inputValue);
    
    
    // console.log("event", e);
};

const clickCatcher = () => {
    if (document.getElementById('c').checked === true) {
       console.log('Celcius');
       selectedTemps.push(inputValue.value);
       return 'Celcius'
    } else if (document.getElementById('f').checked === true) {
        console.log('Fahrenheit');
        selectedTemps.push(clickCatcher);
        return 'Fahrenheit'
    }
};



// Assign a function to be executed when the button is clicked
const buttonEvents = () => {
    document.getElementById('tempOutput').addEventListener("click", determineConverter);
};

const init = () => {
    // domStringBuilder();
};
init();