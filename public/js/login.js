
// const email = document.getElementById('login-email')
// const password = document.getElementById('login-password')
// const signInBtn = document.getElementById('sign-in-button')


const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};



document
  .getElementById('login-form')
  .addEventListener('submit', loginFormHandler);




//  If login is selected display login card
// else hide registration card

// If Registration is selected display register card
// Else hide login card
