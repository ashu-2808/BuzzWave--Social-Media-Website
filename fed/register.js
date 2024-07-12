async function submitForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        window.alert(data.message);

        if (response.ok) {
            window.location.href = 'login.html';
        }
    } catch (error) {
        console.error('Error during registration', error);
    }
}
