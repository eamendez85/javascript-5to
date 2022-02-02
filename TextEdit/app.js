const textArea = document.getElementById("textArea");
const btnMa = document.getElementById("btnMa");
const btnMi = document.getElementById("btnMi");
const btnCapitalize = document.getElementById("btnCapitalize");
const btnClean = document.getElementById("btnClean");

btnMa.addEventListener('click', () => {
    const string = textArea.value
    textArea.value = string.toUpperCase();
});

btnMi.addEventListener('click', () => {
    const string = textArea.value
    textArea.value = string.toLowerCase();
});

btnCapitalize.addEventListener('click', () => {
    const separator = " ";
    const words = textArea.value.split(separator);
    const capitalize = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    let string="";
    capitalize.map(word => {
        string+=word + " ";
    });
    textArea.value = string.slice(0, -1);
});

btnClean.addEventListener('click', () => {
    textArea.value = "";
});