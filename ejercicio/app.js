const counter = document.getElementById("counter");
const img = document.getElementById("icono");
const menos = document.getElementById("-");
const mas = document.getElementById("+");
const btnReset = document.getElementById("reset");

mas.addEventListener('click', increment);
menos.addEventListener('click', decrement);
btnReset.addEventListener('click', reset);

function increment (){
    counter.textContent =  parseInt(counter.textContent) + 1;
    applyFilter();
}

function decrement (){
    counter.textContent =  parseInt(counter.textContent) - 1;
    if (counter.textContent == "0" || parseInt(counter.textContent) < 0) {
        counter.textContent =  0;
        unApplyFilter();
    }
}

function reset(){
    counter.textContent =  0;
    unApplyFilter();
}

function applyFilter(){
    img.style.filter="sepia()";
}

function unApplyFilter(){
    img.style.filter="none";
}