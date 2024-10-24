
document.getElementById('login-form').addEventListener('submit', async function(event) {
    
    event.preventDefault(); 
    const formData = new FormData(event.target);
    const json = JSON.stringify({
        username: formData.get('username'),
        password: formData.get('password')
    });

    const response = await fetch(`${domain}/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    });

    if (response.ok) {
        window.localStorage.accessToken = (await response.json()).token;
        window.open('../main/index.html', '_self');
    } else {
        console.error('Login failed', response.status);
    }
});
