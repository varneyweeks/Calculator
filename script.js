const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = '';
}
function calculate(){
    try{
    let result = eval(display.value);
    display.value = result;
    }catch(errors){
        display.value = 'Error';
    }
}
function deleteLastChar(){
    display.value = display.value.slice(0, -1);
    
}