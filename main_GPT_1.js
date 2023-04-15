// get the form and input elements
const form = document.querySelector('form');
const input = document.getElementById('amou');

// add event listener to the form
form.addEventListener('submit', (event) => {
  // prevent the default form submission behavior
  event.preventDefault();

  // get the current balance
  const balance = Number(document.getElementById('bal').textContent);

  // get the input value and convert it to a number
  const inputNumber = Number(input.value);

  // calculate the new balance based on the input
  const newBalance = balance + inputNumber;

  // update the balance in the HTML
  document.getElementById('bal').textContent = newBalance;

  // reset the input value to an empty string
  input.value = '';
});
