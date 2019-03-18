const printToDom = (divId, textToPrint) => {
    const selectedId = document.getElementById(divId);
    selectedId.innerHTML = textToPrint;
};


const domStringBuilder = (determineConverter, celOrFah, toCelsius, toFahrenheit) => {
    let domString = '';
        domString += `<div class="printedDomCard">`;
        domString += `<h2>${determineConverter}</h2>`;
        domString += `<h2>${celOrFah}</h2>`;
        // could do an if statement here to say converted to then the opp. of what's right above this line
        domString += `<h2>Converted to</h2>`;
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
                toCelsius();
                return 'Celcius';
            } else if (document.getElementById('f').checked === true) {
                console.log('Fahrenheit');
                toFahrenheit();
                return 'Fahrenheit';
            }
        };
        celOrFah();
        domStringBuilder(inputValue, celOrFah());

    };  



    const toCelsius =  () => {
        const fTemp = document.getElementById('tempInput').value;
        console.log(Math.round((fTemp - 32) * 5/9));
        return (Math.round((fTemp - 32) * 5/9));
    };
    
    const toFahrenheit =  () => {
        const cTemp = document.getElementById('tempInput').value;
        console.log(Math.round(((cTemp * 9) / 5) + 32));
        return (Math.round(((cTemp * 9) / 5) + 32));
    };

// Assign a function to be executed when the button is clicked
const buttonEvents = () => {
    document.getElementById('convertBtn', 'c' || 'f').addEventListener('click', determineConverter);
};

const init = () => {
    
};
init();



