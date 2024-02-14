document.getElementById('factButton').addEventListener('click', getCatFact);

function getCatFact() {
    fetch('https://cat-fact.herokuapp.com/facts/random')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayFact(data.text);
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });
}

function displayFact(fact) {
    const factContainer = document.getElementById('factContainer');
    factContainer.innerHTML = '';
    const factElement = document.createElement('div');
    factElement.classList.add('alert', 'alert-info');
    factElement.textContent = fact;
    factContainer.appendChild(factElement);
}
