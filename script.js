function login() {
    var username = document.getElementById('username_t').value;
    var password = document.getElementById('password_t').value;
  
    if (username === 'user' && password === 'user') {
      // Redirect to another page
      window.location.href = 'index.html';
    } else {
      // Display error message
      alert('Invalid username or password');
    }
  };