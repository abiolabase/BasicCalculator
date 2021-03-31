function valueButton(e) {
    calcStructure.display.value += e.value
}
function clearNumber(){
    calcStructure.display.value = "";
}
function Calculate(){
    calcStructure.display.value = eval(calcStructure.display.value);
}