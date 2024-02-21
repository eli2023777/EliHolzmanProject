const addBtn = document.getElementById('addBtn');
const ulDiv = document.querySelector('.ulDiv');

const ul = document.createElement('ul');
ulDiv.appendChild(ul);

let liArr = [];


const addLi = (value) => {


    // Create li element
    const li = document.createElement('li');
    li.classList.add('li');
    ul.appendChild(li);

    // Add checkbox to each li
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.classList.add('checkbox');

    checkbox.addEventListener('change', () => {
        if (checkbox.checked === true) {
            textSpan.style.textDecoration = 'line-through';
        } else {
            textSpan.style.textDecoration = 'none';
        }
    });
    li.appendChild(checkbox);

    // // Add text to each li
    const textSpan = document.createElement('span');
    textSpan.textContent = value;
    textSpan.classList.add('textSpan');
    li.appendChild(textSpan);
    // LIinput.value = '';


    // Add span for buttons
    const btnsSpan = document.createElement('span');
    btnsSpan.classList.add('btnsSpan')
    li.appendChild(btnsSpan);


    // Add edit button to each li
    const editBtn = document.createElement('button');
    editBtn.classList.add('editBtn');
    editBtn.textContent = 'ערוך';
    btnsSpan.appendChild(editBtn);

    editBtn.addEventListener('click', () => {
        textSpan.innerHTML = prompt('Edit your item:');

    })


    // Add space between the buttons
    const space = document.createElement('span');
    space.textContent = ' ';
    btnsSpan.appendChild(space);


    // Add delete button to each li
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.textContent = 'מחק';
    btnsSpan.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', () => {
        ul.removeChild(li);

    });
    // console.log(value);

    // liArr.push(value);

}

const init = () => {
    liArr = JSON.parse(localStorage.getItem('liArr'));

};


// Add event listener add button
addBtn.addEventListener('click', () => {
    // Save to local storages
    let x = (localStorage.getItem('x'));
    console.log(x);
    saveToLocalStorage(x);
    x++;
    console.log(x);

    let LIinput = document.getElementById('LIinput').value;
    addLi(LIinput, liArr);
});


const saveToLocalStorage = (x) => {
    localStorage.setItem('x', String(x));
    // localStorage.setItem(`value${x}`, value);
};







// function resetEventListeners() {
//     ulDiv.querySelectorAll('.editBtn').forEach(editBtn => {
//         editBtn.addEventListener('click', () => {
//             const textSpan = editBtn.parentElement.previousElementSibling;
//             textSpan.innerHTML = prompt('Edit your item:', textSpan.textContent);
//             saveToLocalStorage();
//             removeEventListeners('click', editBtn);
//         });
//     });

//     ulDiv.querySelectorAll('.deleteBtn').forEach(deleteBtn => {
//         deleteBtn.addEventListener('click', () => {
//             ul.removeChild(deleteBtn.parentElement.parentElement);
//             saveToLocalStorage();
//         });
//     });

//     ulDiv.querySelectorAll('.checkbox').forEach(checkbox => {
//         checkbox.addEventListener('change', () => {
//             const textSpan = checkbox.nextElementSibling;
//             if (checkbox.checked) {
//                 textSpan.style.textDecoration = 'line-through';
//             } else {
//                 textSpan.style.textDecoration = 'none';
//             }
//             saveToLocalStorage();
//         });
//     });
// }