//selections
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const times = document.querySelector('#multi');
const div = document.querySelector('#divide')
const screen = document.querySelector('.screen');
//variable
var numbre = 0;
let onscreen = '';
var result = 0
    //fonctions
function C() {
    screen.textContent = ''
    onscreen = ''
};

function P() {
    onscreen += ' + '
    screen.textContent = onscreen
};

function M() {
    onscreen += ' - ';
    screen.textContent = one
};

function X() {
    onscreen += ' * '
    screen.textContent = onscreen
};

function D() {
    onscreen += ' / '
    screen.textContent = onscreen
};

function put(x) {
    onscreen += x
};

function equals() {
    result = eval(onscreen)
    screen.textContent = result
    onscreen = ''

}
//numbres
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const tree = document.querySelector('#tree');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
//events
one.addEventListener('click', e => {
    numbre = 1
    put(numbre)
    screen.textContent = onscreen
});
two.addEventListener('click', e => {
    numbre = 2
    put(numbre)
    screen.textContent = onscreen
});
tree.addEventListener('click', e => {
    numbre = 3
    put(numbre)
    screen.textContent = onscreen
});
four.addEventListener('click', e => {
    numbre = 4
    put(numbre)
    screen.textContent = onscreen
});
five.addEventListener('click', e => {
    numbre = 5
    put(numbre)
    screen.textContent = onscreen
});
six.addEventListener('click', e => {
    numbre = 6
    put(numbre)
    screen.textContent = onscreen
});
seven.addEventListener('click', e => {
    numbre = 7
    put(numbre)
    screen.textContent = onscreen
});
eight.addEventListener('click', e => {
    numbre = 8
    put(numbre)
    screen.textContent = onscreen
});
nine.addEventListener('click', e => {
    numbre = 9
    put(numbre)
    screen.textContent = onscreen
});
zero.addEventListener('click', e => {
    numbre = 0
    put(numbre)
    screen.textContent = onscreen
});
//operations
plus.addEventListener('click', P)
minus.addEventListener('click', M)
times.addEventListener('click', X)
div.addEventListener('click', D)
equal.addEventListener('click', equals)
clear.addEventListener('click', C)