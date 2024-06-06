const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

//1 555-555-5555
const numberRegex = /^(1{1} ?)?([0-9]{3}|\([0-9]{3}\))[ -]?[0-9]{3}[ -]?[0-9]{4}$/;

const isValid = (values) => numberRegex.test(values);

const checkInput = (msg) => {
    if (msg.value === '')
    {
        alert('Please provide a phone number');
        return;
    }    
    const values = msg.value;
    const test = isValid(values);
    console.log(test);
    resultsDiv.innerHTML += test
        ? `<p>Valid US number: ${values}</p>` 
        : `<p>Invalid US number: ${values}</p>`;
    msg.value = '';
    
};
const clearInput = () => {
    //resultsDiv.innerHTML = `<h2>Clear me</h2>`
    resultsDiv.innerHTML = `<h2></h2>`;
};
clearBtn.addEventListener('click', clearInput);
checkBtn.addEventListener('click', () => checkInput(userInput));
