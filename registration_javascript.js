document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var passwordError = document.getElementById('passwordError');
    var hasCapitalLetter = /[A-Z]/.test(password);
    var hasSpecialCharacter = /[!@#$%^&*]/.test(password);
    var hasValidLength = password.length >= 8;

    if (!hasCapitalLetter || !hasSpecialCharacter || !hasValidLength || password !== confirmPassword) {
        event.preventDefault(); // Prevent form submission

        var errorMessage = '';
        if (password !== confirmPassword) {
            errorMessage += 'Password not matched. ';
        } else {
            errorMessage = 'Please include:';
            if (!hasCapitalLetter) {
                errorMessage += ' a capital letter,';
            }
            if (!hasSpecialCharacter) {
                errorMessage += ' any special character {!@#$%^&*},';
            }
            if (!hasValidLength) {
                errorMessage += ' a minimum of 8 characters,';
            }

            errorMessage = errorMessage.replace(/,\s*$/, ''); // Remove trailing comma
        }

        passwordError.textContent = errorMessage;
        passwordError.style.display = 'block';
    } else {
        passwordError.textContent = '';
        passwordError.style.display = 'none';
    }
});
