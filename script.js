const display = document.querySelector('.display span')
const numbers = document.querySelectorAll('.numbers')
const signs = document.querySelectorAll('.signs')
const percent = document.querySelector('.percent')
const equal = document.querySelector('.equals')
const clear = document.querySelector('.clear')
const remove = document.getElementById('del')
//transformando os elementos html em variaveis no js

//criando variaveis para obter os valores
let firstval = ''
let isfirstval = false
let secondval = ''
let sign = ''
let resultval = 0

//adicionando um ouvidor de evento para todos os botões com a classe numbers e obtendo o primeiro ou segundo valor
numbers.forEach(number => {
    number.addEventListener('click', (valor) => {
        let val = valor.target.getAttribute('value')
        if(isfirstval === false){
            getfirstval(val)
        } else {
            getsecondval(val)
        }
    })
}) 

//obtendo o primeiro valor da operação
function getfirstval(v){
    if (v === '.') {
            //verificando se tem algum . no primeiro valor
            if (!firstval.includes('.')) { 
                firstval += '.'
            }
    } else {
        firstval += v
    }
    display.innerHTML = firstval
}

//obtendo os sinais
function getSign(){
    signs.forEach(Sign => {
        Sign.addEventListener('click', (valor) => {
            sign = valor.target.getAttribute('value')
            isfirstval = true
        })
    })
}
//chamando a função para habilitar os eventlistener
getSign()

//obtendo o segundo valor da operação
function getsecondval(v){
    if(firstval !== '' && sign !== '') {
        display.innerHTML = ''
        if (v === '.') {
                //verificando se tem algum . dentro do segundo valor
                if (!secondval.includes('.')) { 
                    secondval += '.'
                }
        } else {
            secondval += v
        }
    }
    display.innerHTML = secondval
}

//criando o resultado da operação
equal.addEventListener('click', () => {
    firstval = +firstval
    secondval = +secondval
    if(sign === '+'){
        resultval = firstval + secondval
    } else if(sign === '-'){
        resultval = firstval - secondval
    } else if(sign === 'X') {
        resultval = firstval * secondval
    } else if(sign === '/' && secondval === 0){
        alert('Não é possivel dividir por 0')
    } else if(sign === '/') {
        resultval = firstval / secondval
    }

    checklength()
    display.innerHTML = resultval
    firstval = resultval
    secondval = ''
})

//chegando o tamanho da operação e limitando os numeros apos a virgula
function checklength() {
    if(resultval >= 3){
        display.innerHTML = resultval.toFixed(3)
    }
}

//fazendo o numero virar porcentagem
percent.addEventListener('click', () => {
    firstval = firstval / 100
    display.innerHTML = firstval
})

//apaga o ultimo caractere como se fosse o backspace
remove.addEventListener('click', () => {
    if(sign === ''){
        firstval = firstval.slice(0, -1)
        display.innerHTML = firstval
    } else if (sign != ''){
        secondval = secondval.slice(0, -1)
        display.innerHTML = secondval
    }
})

//limpando o visor
clear.addEventListener('click', () => {
        display.innerHTML = ''
        firstval = ''
        isfirstval = false
        secondval = ''
        sign = ''
        resultval = 0
})





