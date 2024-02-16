"use strict";
// Manage the users in a table
const signUpBtn = document.getElementById('signUpBtn');
const signInBtn = document.getElementById('signInBtn');
// Array of users
const userArr = [];
// Sign Up function
const signUp = () => {
    var _a;
    const user = {
        fName: document.getElementById('fName').value,
        lName: document.getElementById('lName').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    };
    // Saving user in array
    saveUserInArr(user);
    // prevent null values
    preventNullValues(user);
    // declare status as connected
    let status = 'Connected';
    // Create a table row
    const tr = document.createElement('tr');
    (_a = document.getElementById('tableBody')) === null || _a === void 0 ? void 0 : _a.appendChild(tr);
    tr.innerHTML += `
    <td class="fNameCell"> ${user.fName} <br/></td>
    <td class="lNameCell"> ${user.lName} <br/></td>
    <td class="emailCell">${user.email} <br/></td>
    <td class="passwordCell">${user.password} <br/></td>
    <td class="statusCell">${status}</td>
    <td><button class="disconnectBtn">Disconnect</button></td>
    <td><button class="deleteBtn">Delete</button></td>
    <td><button class="editBtn">Edit</button></td>
    `;
    // Delete buttons
    const deleteBtn = tr.querySelector('.deleteBtn');
    if (deleteBtn != null) {
        deleteBtn.addEventListener('click', () => {
            tr.remove();
        });
    }
    else {
        alert(`Couldn't find the Delete button`);
    }
    // Disconect buttons
    const disconnectBtn = tr.querySelector('.disconnectBtn');
    if (disconnectBtn != null) {
        disconnectBtn.addEventListener('click', () => {
            status = 'Disconnected';
            const statusCell = tr.querySelector('.statusCell');
            if (statusCell != null) {
                statusCell.innerHTML = status;
            }
            else {
                alert(`Couldn't find the status cell`);
            }
            // Remove the disconnect button after clicking it
            disconnectBtn.disabled = true;
        });
    }
    else {
        alert(`Couldn't find the Disconnect button`);
    }
    // Edit buttons
    const editBtn = tr.querySelector('.editBtn');
    if (editBtn != null) {
        editBtn.addEventListener('click', () => {
            const fNameCell = tr.querySelector('.fNameCell');
            if (user.fName !== null) {
                if (fNameCell != null) {
                    const newFirstName = prompt('Enter the new first name', user.fName);
                    user.fName = newFirstName !== null && newFirstName !== void 0 ? newFirstName : '';
                    if (newFirstName !== null) {
                        fNameCell.innerHTML = newFirstName;
                    }
                }
            }
            else {
                alert(`Couldn't find the first name`);
            }
            const lNameCell = tr.querySelector('.lNameCell');
            if (user.lName !== null) {
                if (lNameCell != null) {
                    const newLastName = prompt('Enter the new last name', user.lName);
                    user.lName = newLastName !== null && newLastName !== void 0 ? newLastName : '';
                    if (newLastName !== null) {
                        lNameCell.innerHTML = newLastName;
                    }
                }
            }
            else {
                alert(`Couldn't find the last name`);
            }
            const emailCell = tr.querySelector('.emailCell');
            if (user.email !== null) {
                if (emailCell != null) {
                    const newEmail = prompt('Enter the new email', user.email);
                    user.email = newEmail !== null && newEmail !== void 0 ? newEmail : '';
                    if (newEmail !== null) {
                        emailCell.innerHTML = newEmail;
                    }
                }
            }
            else {
                alert(`Couldn't find the email`);
            }
            const passwordCell = tr.querySelector('.passwordCell');
            if (user.password !== null) {
                if (passwordCell != null) {
                    const newPassword = prompt('Enter the new password', user.password);
                    user.password = newPassword !== null && newPassword !== void 0 ? newPassword : '';
                    if (newPassword !== null) {
                        passwordCell.innerHTML = newPassword;
                    }
                }
            }
            else {
                alert(`Couldn't find the password`);
            }
        });
    }
    // Clear inputs
    document.getElementById('fName').value = '';
    document.getElementById('lName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
};
if (signUpBtn != null) {
    signUpBtn.addEventListener('click', () => {
        signUp();
        console.log(userArr);
    });
}
else {
    alert(`Couldn't find the button`);
}
// Prevent null values in inputs
const preventNullValues = (user) => {
    if (user.fName === '' || user.lName === '' || user.email === '' || user.password === '') {
        alert('Please fill in all the fields');
        throw new Error('Please fill in all the fields');
    }
};
// Save user in array function
const saveUserInArr = (user) => {
    userArr.push(user);
    return userArr;
};
// Sign In function
const signIn = () => {
    // Get the inputs
    const emailSI = document.getElementById('emailSI');
    const passwordSI = document.getElementById('passwordSI');
    // Prevent null values
    if (emailSI.value === '' || passwordSI.value === '') {
        alert('Please fill in all the fields');
        throw new Error('Please fill in all the fields');
    }
    // Check if the email and password are correct
    for (let i = 1; i <= userArr.length; i++) {
        const user = userArr[i - 1]; // Type assertion
        if (user.email === emailSI.value && user.password === passwordSI.value) {
            let disconnectBtn = document.querySelectorAll('.disconnectBtn')[i - 1];
            disconnectBtn.disabled = false;
            const statusCell = document.querySelectorAll('.statusCell')[i - 1];
            if (statusCell != null) {
                statusCell.innerHTML = 'Connected';
            }
            else {
                alert(`Couldn't find the status cell`);
            }
        }
        else if (i === userArr.length) {
            alert(`Email or password is incorrect, please try again!`);
        }
    }
};
if (signInBtn != null) {
    signInBtn.addEventListener('click', () => {
        signIn();
    });
}
else {
    alert(`Couldn't find the button`);
}
