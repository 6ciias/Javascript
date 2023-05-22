// Get references to the buttons
const redButton = document.getElementById('redButton');
const greenButton = document.getElementById('greenButton');

// Add event listeners to the buttons
redButton.addEventListener('click', () => {
  document.body.style.backgroundColor = 'red';
});

greenButton.addEventListener('click', () => {
  document.body.style.backgroundColor = 'green';
});