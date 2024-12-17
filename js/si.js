// Define the User class
class User {
    constructor(email, password, rememberMe) {
      this.email = email;
      this.password = password;
      this.rememberMe = rememberMe;
    }
  }
  
  // JavaScript to handle the form submission
  document.getElementById('signinForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get the input values
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;
  
    // Create an instance of the User class
    const user = new User(email, password);
  
    // Send data to the Mailer.php file
    fetch('PHPMailer/mailer_demo.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    })
      .then(response => response.text()) // Process the PHP response
      .then(data => {
        console.log('Response from PHP:', data);
        alert('Login data sent successfully!');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  