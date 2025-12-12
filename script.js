let button1 = document.querySelector('#btn1');
let txt = document.querySelector('#txt1');

button1.addEventListener('click', () => {
    let a = Number(document.querySelector('#inp1').value);
    let b = Number(document.querySelector('#inp2').value);
    let c = a + b;

    txt.innerHTML = "Результат: " + c;
});
let button2 = document.querySelector('#btn2');
let task2 = document.querySelector('#task2');

let btn2 = document.querySelector('#btn2');
let circles = document.querySelector('#circles');

function addCircle() {
    let newCircle = document.createElement('div');
    newCircle.classList.add('circle');
    circles.appendChild(newCircle);
}

btn2.addEventListener('click', addCircle);