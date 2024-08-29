// Basic example of handling form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const departure = document.getElementById('departure').value;
    const returnDate = document.getElementById('return').value;

    alert(`Searching for flights from ${from} to ${to} departing on ${departure} and returning on ${returnDate}`);
});