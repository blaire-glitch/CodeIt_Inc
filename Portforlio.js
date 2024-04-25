// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Do something with the form data (e.g., send it to a server, display it)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Clear the form fields after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    // Optionally, display a confirmation message
    alert("Your message has been submitted!");
}

// Event listener to call the handleSubmit function when the form is submitted
document.getElementById('contactForm').addEventListener('submit', handleSubmit);
