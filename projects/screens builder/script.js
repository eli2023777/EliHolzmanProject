
let myDiv;

// Retrieve data from localStorage
const savedData = localStorage.getItem('myDiv');

// Check if there is any saved data
if (savedData) {
    myDiv = document.createElement('div');
    myDiv.innerHTML = savedData;
    document.getElementById('screen').appendChild(myDiv);
} else {
    myDiv = document.createElement('div');
    myDiv.className = "myDiv";
    myDiv.style.width = "850px";
    myDiv.style.height = "460px";
    myDiv.style.backgroundColor = "#fff";
    myDiv.style.border = "20px solid #c1bdbd";
    document.getElementById('screen').appendChild(myDiv);
}


function element() {

    // const colorIn = document.getElementById("colorIn");
    // myDiv.style.color = colorIn.value;

    // const colorPicker = document.getElementById("colorPicker");
    // myDiv.style.color = colorPicker.value;
    // // Dividing between the color-picker and the color-input
    // if (colorIn.value === '') colorPicker.value;



    const backgroundColorIn = document.getElementById("backgroundColorIn");
    myDiv.style.backgroundColor = colorIn.value;

    const backgroundColorPicker = document.getElementById("backgroundColorPicker");
    // Dividing between the color-picker and the color-input
    if (backgroundColorIn.value === '') {
        myDiv.style.backgroundColor = backgroundColorPicker.value;
    }

    const widthIn = document.getElementById("widthIn");
    myDiv.style.width = widthIn.value;

    const heightIn = document.getElementById("heightIn");
    myDiv.style.height = heightIn.value;

    const contentIn = document.getElementById("contentIn");
    myDiv.textContent = contentIn.value;

    const fontColorIn = document.getElementById("fontColorIn");
    myDiv.style.color = fontColorIn.value;

    const fontColorPicker = document.getElementById("fontColorPicker");
    // Dividing between the color-picker and the color-input
    if (fontColorIn.value === '') {
        myDiv.style.color = fontColorPicker.value;
    }

    const fontSizeIn = document.getElementById("fontSizeIn");
    myDiv.style.fontSize = fontSizeIn.value;

    const fontTypeIn = document.getElementById("fontTypeIn");
    myDiv.style.fontFamily = fontTypeIn.value;


    // margin-padding
    const marginIn = document.getElementById("marginIn");
    myDiv.style.margin = marginIn.value;

    const paddingIn = document.getElementById("paddingIn");
    myDiv.style.padding = paddingIn.value;

    border();

    defaultValues();

    saveInLocalStorage(myDiv);
}

// Border
function border() {
    const borderWidthIn = document.getElementById("borderWidthIn");
    myDiv.style.borderWidth = borderWidthIn.value;

    const borderStyleIn = document.getElementById("borderStyleIn");
    myDiv.style.borderStyle = borderStyleIn.value;

    const borderColorIn = document.getElementById("borderColorIn");
    myDiv.style.borderColor = borderColorIn.value;

    const borderColorPicker = document.getElementById("borderColorPicker");
    if (borderColorIn.value === '') {
        myDiv.style.borderColor = borderColorPicker.value;
    }
}

function defaultValues() {
    // Prevent the screen from having no width or height
    if (widthIn.value === '') {
        myDiv.style.width = "700px";
    }

    if (heightIn.value === '') {
        myDiv.style.height = "400px";
    }

    // Prevent the border-screen from having no values
    if (borderStyleIn.value === '') {
        myDiv.style.borderStyle = 'solid';
    }

    if (borderWidthIn.value === '' && !(borderColorIn.value === '')
    ) {
        myDiv.style.borderWidth = '1px';
    }

}

const saveInLocalStorage = (myDiv) => {
    console.log(myDiv.innerHTML);
    localStorage.setItem('myDiv', myDiv.innerHTML);
};


document.querySelector('.formContainer').addEventListener('input', element);












