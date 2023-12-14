const myScript = async () => {

    const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random');

    const data = await response.json();

    document.querySelector('#random-fact').innerHTML = data.text;
}

// find the button element in the document
const button = document.querySelector('#run-js');

// when the button is clicked, run the myScript function
button.addEventListener('click', async () => {

    console.log('BEFORE FUNCTION CALL');

    myScript();

    console.log('AFTER FUNCTION CALL');

});