const input = document.querySelector('input');

const h1 = document.querySelector('h1');

const button = document.querySelector('button');

input.onchange = function () {
    h1.innerHTML = input.value;
};

button.onclick = function () {
    h1.style.color = getRandomColor();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

