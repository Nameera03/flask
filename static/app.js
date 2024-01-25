document.addEventListener('DOMContentLoaded', function () {
    // Make a POST request to the server
    fetch('/get_data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    })
    .then(response => response.json())
    .then(data => {
        // Handle the data received from the server
        displayData(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

    // Display data on the page
    function displayData(data) {
        var displayDiv = document.getElementById('server-data');
        displayDiv.innerHTML = '<p>Subject1: ' + data.subject_name1 + '</p>';
        displayDiv.innerHTML += '<p>Number1: ' + data.number1 + '</p>';
        displayDiv.innerHTML += '<p>Subject2: ' + data.subject_name2 + '</p>';
        displayDiv.innerHTML += '<p>Number2: ' + data.number2 + '</p>';
        displayDiv.innerHTML += '<p>Subject3: ' + data.subject_name3 + '</p>';
        displayDiv.innerHTML += '<p>Number3: ' + data.number3 + '</p>';
    }
});
