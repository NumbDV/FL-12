let email = prompt('Enter your email address: '),
    password,
    checkLogin = false,
    checkPassword,
    answer,
    newPassword,
    checkNewPassword;
if (email === '' || email === null) {
    alert('Canceled.');
} else {
    if (email.length < 5) {
        alert('I don\'t know any emails having name length less than 5 symbols');
    } else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
        password = prompt('Enter password');
        if (password === '' || password === null) {
            alert('Canceled.');
        } else if (email === 'user@gmail.com' && password === 'UserPass') {
            answer = confirm('Do you want to change your password?');
            if (answer === false) {
                alert('You have failed the change.');
            } else {
                checkPassword = prompt('Enter old password: ');
                if (checkPassword === '' || checkPassword === null) {
                    alert('Canceled.');
                } else if (checkPassword === password) {
                    newPassword = prompt('Enter new password');
                    if (newPassword === '' || newPassword === null) {
                        alert('Canceled');
                    } else if (newPassword.length < 6) {
                        alert('It’s too short password. Sorry.');
                    } else {
                        checkNewPassword = prompt('Enter new password again');
                        if (checkNewPassword === newPassword) {
                            alert('You have successfully changed your password.');
                        } else {
                            alert('You wrote the wrong password.');
                        }
                    }
                } else {
                    alert('Wrong password');
                }
            }
        } else if (email === 'admin@gmail.com' && password === 'AdminPass') {
            answer = confirm('Do you want to change your password?');
            if (answer === false) {
                alert('You have failed the change.');
            } else {
                checkPassword = prompt('Enter old password: ');
                if (checkPassword === '' || checkPassword === null) {
                    alert('Canceled.');
                } else if (checkPassword === password) {
                    newPassword = prompt('Enter new password');
                    if (newPassword === '' || newPassword === null) {
                        alert('Canceled');
                    } else if (newPassword.length < 6) {
                        alert('It’s too short password. Sorry.');
                    } else {
                        checkNewPassword = prompt('Enter new password again');
                        if (checkNewPassword === newPassword) {
                            alert('You have successfully changed your password.');
                        } else {
                            alert('You wrote the wrong password.');
                        }
                    }
                } else {
                    alert('Wrong password');
                }
            }
        } else {
            alert('Wrong password');
        }
    } else {
        alert('I don’t know you');
    }
}