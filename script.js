document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    // Display submitted data
    const displayDiv = document.getElementById('display-data');
    displayDiv.innerHTML = `<center>
      <h2>Registration Details:</h2>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
    </center>`;
  });
  