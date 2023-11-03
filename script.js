const validateForm = () => {
    let nameInput = document.getElementById("name").value;
    let emailInput = document.getElementById("email").value;

    let trimmedName = nameInput.trim();
    if (trimmedName === '') {
        alert("Name field cannot be empty");
        return false;
    }

    if (trimmedName.length < 3) {
        alert("Name must be at least 3 characters long");
        return false;
    }

    let trimmedEmail = emailInput.trim();
    if (trimmedEmail === '') {
        alert("Email field cannot be empty");
        return false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailInput)) {
        alert("Email must include @ and contain a . after the @");
        return false;
    }

    const isConfirmed = confirm(`Are you sure you want to submit the form, ${trimmedName}?`);
    if (!isConfirmed) {
        return;
    }

    const responseMessage = `Hello, ${trimmedName}! Your form has been submitted successfully.`;
    alert(responseMessage);

    return true;
}
  