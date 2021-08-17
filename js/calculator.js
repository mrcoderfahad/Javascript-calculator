// Value Input Variable
const inputField = document.getElementById('input');

// Insert Number On Input Field

const insertNum = num => inputField.textContent +=num;

// operation using eval

const equalTo = () => (inputField.textContent) ? inputField.textContent = eval(inputField.textContent) : false;

// Remove 1 val at time
const eraseNum = () => inputField.textContent = inputField.textContent.substring(0, inputField.textContent.length - 1);

// Clear all the input
const clearInput = () => inputField.textContent = '';

