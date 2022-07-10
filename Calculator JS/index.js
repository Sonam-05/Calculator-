function valueBtn(e) {
    calculatorForm.screen.value += e.value ;
}

function clearBtn(){
    calculatorForm.screen.value = null ;
}

function equalBtn(){
    calculatorForm.screen.value = eval(calculatorForm.screen.value);
}