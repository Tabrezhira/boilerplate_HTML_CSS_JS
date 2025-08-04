document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const usersTableBody = document.getElementById('usersTableBody');

    // Load existing users
    displayUsers();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            const userData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                mobile: document.getElementById('mobile').value,
                password: document.getElementById('password').value
            };

            saveUser(userData);
            displayUsers();
            form.reset();
        }
    });

    function validateForm() {
        let isValid = true;
        
        // Name validation
        const name = document.getElementById('name').value;
        if (name.length < 3) {
            document.getElementById('nameError').textContent = 'Name must be at least 3 characters';
            isValid = false;
        } else {
            document.getElementById('nameError').textContent = '';
        }

        // Email validation
        const email = document.getElementById('email').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email';
            isValid = false;
        } else {
            document.getElementById('emailError').textContent = '';
        }

        // Mobile validation
        const mobile = document.getElementById('mobile').value;
        const mobileRegex = /^[0-9]{10}$/;
        if (!mobileRegex.test(mobile)) {
            document.getElementById('mobileError').textContent = 'Please enter a valid 10-digit mobile number';
            isValid = false;
        } else {
            document.getElementById('mobileError').textContent = '';
        }

        // Password validation
        const password = document.getElementById('password').value;
        if (password.length < 6) {
            document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
            isValid = false;
        } else {
            document.getElementById('passwordError').textContent = '';
        }

        return isValid;
    }

    function saveUser(userData) {
        let users = JSON.parse(localStorage.getItem('users') || '[]');
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
    }

    function displayUsers() {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        usersTableBody.innerHTML = '';
        
        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.mobile}</td>
            `;
            usersTableBody.appendChild(row);
        });
    }
});