/**criando a variaveis  */
let currentInput = '0';
let operador=null;
let Inputer=null;

/**função para  mudar id do html */
function calcular(){
    const resultado=document.getElementById("resultado")
    resultado.textContent=currentInput

}

/**função para adicionar os numeros no id do html */
function addnumeros(number){
    if(currentInput=== "0"){
        currentInput=number.toString();
    }else{
        currentInput+=number.toString();
    }
    /**chamndo a função a qual eu quero seja alterada o id do html */
    calcular()
}


/**adicionando os operadores do para soma  */
function addoperador(operation) {
    if (operador !== null) {
        /**chamndo a função que realizar os calculos atraves de cada operador*/
        calculos();
    }
    /**atribuindo os valores a qual as variasveis irão receber  */
    operador = operation;
    Inputer = parseFloat(currentInput);
    currentInput = '0';
}

/**função que realzar as operações de cade operador */
function calculos() {
    const inputNumber = parseFloat(currentInput);
    switch (operador) {
        case '*':
            currentInput = Inputer * inputNumber;
            break;
        case '/':
            currentInput = Inputer / inputNumber;
            break;
        case '+':
            currentInput = Inputer + inputNumber;
            break;
        case '-':
            currentInput = Inputer - inputNumber;
            break;
    }
    operador = null;
    calcular();
}

/**função para recarregar a paginas ao apertar no C */
function apagar(){
    window.location.reload()
}
