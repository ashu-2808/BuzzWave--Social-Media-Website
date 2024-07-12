async function submitForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        window.alert(data.message);

        if (response.ok) {
            window.location.href = "index.html";
        }
    } catch (error) {
        console.error("Error during authentication", error);
    }
}
