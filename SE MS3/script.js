// Array to store user credentials
let users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
  ];
  
  function showAlert(message) {
    const modal = document.getElementById('alertModal');
    const alertMessage = document.getElementById('alertMessage');
    
    alertMessage.textContent = message;
    modal.style.display = 'block';
  }
  
  // Function to hide the alert modal
  function hideAlert() {
    const modal = document.getElementById('alertModal');
    
    modal.style.display = 'none';
  }
  
  document.getElementById('okButton').addEventListener('click', function() {
    hideAlert();
  });
  
  
  // Sign up form submission
  document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let username = document.getElementById('signupUsername').value;
    let password = document.getElementById('signupPassword').value;
    let error = document.getElementById('signupError');
  
    // Check if the username already exists
    const isExistingUser = users.some(function(user) {
      return user.username === username;
    });
  
    if (isExistingUser) {
      error.textContent = 'Username already exists';
      return;
    }
  
    // Add the new user to the users array
    users.push({ username, password });
  
    // Clear the form fields
    document.getElementById('signupUsername').value = '';
    document.getElementById('signupPassword').value = '';
  
    // Display success message
    showAlert('Sign up successful!');
  });
  
  
  // Login form submission
  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const error = document.getElementById('loginError');
    let isUserFound = false;
  
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username && users[i].password === password) {
        isUserFound = true;
        break;
      }
    }
  
    if (isUserFound) {
      // Successful login
      error.textContent = '';
      showAlert('Login successful!');
      // You can redirect the user to another page here
    } else {
      // Display error message
      error.textContent = 'Incorrect username or password';
      document.getElementById('loginUsername').value = '';
      document.getElementById('loginPassword').value = '';
    }
  });
  
  
  
  
  
  
  
  