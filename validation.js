const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const phoneNumber = document.getElementById('tlp').value;

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Phone number validation
  const phoneNumberRegex = /^\d{12,}$/; // Adjust the minimum length as needed
  if (!phoneNumberRegex.test(phoneNumber)) {
    alert('Please enter a valid 12-digit phone number.');
    return;
  }

  // If validation passes, submit the form or perform other actions
  alert('Form submitted successfully!');
  // You can add code to send the form data to a server here
});