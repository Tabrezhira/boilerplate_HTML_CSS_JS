document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code goes here

    // DOM Manipulation Examples

    // Selecting Elements
    const table = document.querySelector('.styled-table');
    const gridContainer = document.querySelector('.grid-container');
    const gridItems = document.querySelectorAll('.grid-item');

    // Creating New Elements
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>Bob Johnson</td>
        <td>35</td>
        <td>Paris</td>
    `;

    // Adding Elements
    const tbody = document.querySelector('tbody');
    tbody.appendChild(newRow);

    // Event Listeners
    gridItems.forEach(item => {
        // Click Event
        item.addEventListener('click', function() {
            this.style.backgroundColor = '#006747';
        });

        // Hover Events
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Form Example
    const form = document.createElement('form');
    form.innerHTML = `
        <input type="text" id="nameInput" placeholder="Enter name">
        <button type="submit">Submit</button>
    `;
    document.body.appendChild(form);

    // Form Submit Event
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('nameInput').value;
        alert(`Hello, ${name}!`);
    });

    // Custom Event Example
    const customEvent = new CustomEvent('customAction', {
        detail: { message: 'Custom event triggered!' }
    });

    document.addEventListener('customAction', function(e) {
        console.log(e.detail.message);
    });

    // Trigger custom event after 2 seconds
    setTimeout(() => {
        document.dispatchEvent(customEvent);
    }, 2000);
});