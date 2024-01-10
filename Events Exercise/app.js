//1
let changingColor = 0;
const colors = ['lightblue', 'pink'];

function changeColor() {
    const square = document.getElementById('square');
    const button = document.querySelector('button')
    button.addEventListener('click', () => {
        if (changingColor == 0) {
            changingColor = 1;
        } else {
            changingColor = 0;
        };


        const newColor = colors[changingColor];
        square.style.backgroundColor = newColor;
        square.innerText = newColor.charAt(0).toUpperCase() + newColor.slice(1);
    }
    )
}
changeColor()

//2
const textInput = document.getElementById('textInput');
const textSquare = document.getElementById('textSquare');

function newText() {
    const inputValue = textInput.value;
    textInput.addEventListener('input', newText);
    textSquare.textContent = inputValue;
}

function deleteText() {
    textInput.value = '';
    newText();

}

//3

function calculateBMI(e) {
    e.preventDeFault()
    let height = document.getElementById('heightCm').value;
    let weight = document.getElementById('weightKg').value;
    let resultBmi = document.getElementById('resultBmi')

        if (weight && height) {
            const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
            resultBmi.innerText += bmi;

        } else {
            alert ('Please enter both weight and height.');
        }

    }
    document.getElementById('buttonResult').addEventListener('submit', calculateBMI);

    //4
   
    