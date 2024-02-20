// Manage the users in a table
const signUpBtn = document.getElementById('signUpBtn') as HTMLButtonElement;
const signInBtn = document.getElementById('signInBtn') as HTMLButtonElement;

const tableBody = document.getElementById('tableBody');

const userArr: object[] = [];

// Save data to local storage
const saveToLocalstorage = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
};

// Get data from local storage
const getFromLocalStorage = (key: string): any | null => {
    const storedData = localStorage.getItem(key);
    if (storedData)
        return JSON.parse(storedData);
};

// Load the table from local storage
const loadTableFromLocalStorage = () => {
    const storedUserArr = getFromLocalStorage('userArr');
    if (storedUserArr) {
        userArr.push(...storedUserArr);
        for (const user of storedUserArr) {
            const status = 'Connected'; // Assuming initial status is always connected
            addRowToTable(user as User, status);
        }
    }
};




// Function to add a row to the table
const addRowToTable = (user: User, status: string) => {
    const tr = document.createElement('tr');
    tableBody?.appendChild(tr);
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
    } else {
        alert(`Couldn't find the Delete button`);
    }


    // Disconect buttons
    const disconnectBtn: HTMLButtonElement | null = tr.querySelector('.disconnectBtn');

    if (disconnectBtn != null) {
        disconnectBtn.addEventListener('click', () => {
            status = 'Disconnected';

            const statusCell = tr.querySelector('.statusCell');
            if (statusCell != null) {
                statusCell.innerHTML = status;
            } else {
                alert(`Couldn't find the status cell`);
            }

            // Remove the disconnect button after clicking it
            disconnectBtn.disabled = true;

        });
    } else {
        alert(`Couldn't find the Disconnect button`);
    }

    // Edit buttons
    const editBtn = tr.querySelector('.editBtn');
    if (editBtn) {
        editBtn.addEventListener('click', () => {

            const fNameCell = tr.querySelector('.fNameCell');
            if (user.fName !== null) {
                if (fNameCell != null) {
                    const newFirstName = prompt('Enter the new first name', user.fName);
                    user.fName = newFirstName ?? '';
                    if (newFirstName !== null) {
                        fNameCell.innerHTML = newFirstName;
                    }
                }
            } else {
                alert(`Couldn't find the first name`);
            }

            const lNameCell = tr.querySelector('.lNameCell');
            if (user.lName) {
                if (lNameCell) {
                    const newLastName = prompt('Enter the new last name', user.lName);
                    user.lName = newLastName ?? '';
                    if (newLastName) {
                        lNameCell.innerHTML = newLastName;
                    }
                }
            } else {
                alert(`Couldn't find the last name`);
            };

            const emailCell = tr.querySelector('.emailCell');
            if (user.email) {
                if (emailCell) {
                    const newEmail = prompt('Enter the new email', user.email);
                    user.email = newEmail ?? '';
                    if (newEmail) {
                        emailCell.innerHTML = newEmail;
                    }
                }
            } else {
                alert(`Couldn't find the email`);
            }

            const passwordCell = tr.querySelector('.passwordCell');
            if (user.password) {
                if (passwordCell) {
                    const newPassword = prompt('Enter the new password', user.password);
                    user.password = newPassword ?? '';
                    if (newPassword) {
                        passwordCell.innerHTML = newPassword;
                    }
                }
            } else {
                alert(`Couldn't find the password`);
            }

        })

    }

    saveUserInArr(user);
};

// Load table on page load
loadTableFromLocalStorage();


// User interface 
type User = {
    fName: string;
    lName: string;
    email: string;
    password: string;
};


const saveTableToLocalStorage = () => {
    saveToLocalstorage('userArr', userArr);
};




// Sign Up function
const signUp = (user: User) => {

    // Saving user in array
    saveUserInArr(user);

    // prevent null values
    preventNullValues(user);

    // declare status as connected
    let status = 'Connected';
    // Create a table row
    const tr = document.createElement('tr');
    tableBody?.appendChild(tr);
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
    } else {
        alert(`Couldn't find the Delete button`);
    }


    // Disconect buttons
    const disconnectBtn: HTMLButtonElement | null = tr.querySelector('.disconnectBtn');

    if (disconnectBtn != null) {
        disconnectBtn.addEventListener('click', () => {
            status = 'Disconnected';

            const statusCell = tr.querySelector('.statusCell');
            if (statusCell != null) {
                statusCell.innerHTML = status;
            } else {
                alert(`Couldn't find the status cell`);
            }

            // Remove the disconnect button after clicking it
            disconnectBtn.disabled = true;

        });
    } else {
        alert(`Couldn't find the Disconnect button`);
    }

    // Edit buttons
    const editBtn = tr.querySelector('.editBtn');
    if (editBtn) {
        editBtn.addEventListener('click', () => {

            const fNameCell = tr.querySelector('.fNameCell');
            if (user.fName !== null) {
                if (fNameCell != null) {
                    const newFirstName = prompt('Enter the new first name', user.fName);
                    user.fName = newFirstName ?? '';
                    if (newFirstName !== null) {
                        fNameCell.innerHTML = newFirstName;
                    }
                }
            } else {
                alert(`Couldn't find the first name`);
            }

            const lNameCell = tr.querySelector('.lNameCell');
            if (user.lName) {
                if (lNameCell) {
                    const newLastName = prompt('Enter the new last name', user.lName);
                    user.lName = newLastName ?? '';
                    if (newLastName) {
                        lNameCell.innerHTML = newLastName;
                    }
                }
            } else {
                alert(`Couldn't find the last name`);
            };

            const emailCell = tr.querySelector('.emailCell');
            if (user.email) {
                if (emailCell) {
                    const newEmail = prompt('Enter the new email', user.email);
                    user.email = newEmail ?? '';
                    if (newEmail) {
                        emailCell.innerHTML = newEmail;
                    }
                }
            } else {
                alert(`Couldn't find the email`);
            }

            const passwordCell = tr.querySelector('.passwordCell');
            if (user.password) {
                if (passwordCell) {
                    const newPassword = prompt('Enter the new password', user.password);
                    user.password = newPassword ?? '';
                    if (newPassword) {
                        passwordCell.innerHTML = newPassword;
                    }
                }
            } else {
                alert(`Couldn't find the password`);
            }

        })

    }
}


if (signUpBtn) {
    signUpBtn.addEventListener('click', () => {
        const user: User = {
            fName: (<HTMLInputElement>document.getElementById('fName')).value,
            lName: (<HTMLInputElement>document.getElementById('lName')).value,
            email: (<HTMLInputElement>document.getElementById('email')).value,
            password: (<HTMLInputElement>document.getElementById('password')).value,
        };
        signUp(user);
        console.log(userArr);
        saveTableToLocalStorage();
    });
} else {
    alert(`Couldn't find the button`);
}

// Prevent null values in inputs
const preventNullValues = (user: User) => {
    if (user.fName === '' || user.lName === '' || user.email === '' || user.password === '') {
        alert('Please fill in all the fields');
        throw new Error('Please fill in all the fields');
    }
}

// Save user in array function
const saveUserInArr = (user: User) => {
    userArr.push(user);
    console.log(userArr);
    localStorage.setItem('userArr', JSON.stringify(userArr));
    return userArr;
}


// Sign In function/
const signIn = () => {
    // Get the inputs
    const emailSI = (<HTMLInputElement>document.getElementById('emailSI'));
    const passwordSI = (<HTMLInputElement>document.getElementById('passwordSI'));

    // Prevent null values
    if (emailSI.value === '' || passwordSI.value === '') {
        alert('Please fill in all the fields');
        throw new Error('Please fill in all the fields');
    }

    // Check if the email and password are correct
    for (let i = 1; i <= userArr.length; i++) {

        const user = userArr[i - 1] as User; // Type assertion
        if (user.email === emailSI.value && user.password === passwordSI.value) {
            let disconnectBtn = document.querySelectorAll('.disconnectBtn')[i - 1] as HTMLButtonElement;
            disconnectBtn.disabled = false;

            const statusCell = document.querySelectorAll('.statusCell')[i - 1];
            if (statusCell != null) {
                statusCell.innerHTML = 'Connected';
            } else {
                alert(`Couldn't find the status cell`);
            }

        } else if (i === userArr.length) {
            alert(`Email or password is incorrect, please try again!`);
        }
        saveUserInArr(user);

    }

}


if (signInBtn != null) {
    signInBtn.addEventListener('click', () => {
        signIn();
    });
} else {
    alert(`Couldn't find the button`);
}





