function login() {
    var username = document.getElementById('username_t').value;
    var password = document.getElementById('password_t').value;
  
    if ((username === 'user' && password === 'user')) {
      // Redirect to another page
      window.location.href = 'index.html';
    }
     else {
      if( (username === 'banker' && password === 'banker')){
        window.location.href = 'banker.html';
      }
      else{
      alert('Invalid username or password');
      }
    }
  };