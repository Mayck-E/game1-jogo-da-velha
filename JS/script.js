//variaveis
let btn1 = 0;
let btn2 = 0;
let btn3 = 0;
let btn4 = 0;
let btn5 = 0;
let btn6 = 0;
let btn7 = 0;
let btn8 = 0;
let btn9 = 0;
let controle = 0;
let jogadas = 0;
let final_jogo = false;


// //botão 1
function clickBtn1() {
    let btn = document.getElementById('btn1')
    if (btn.value == " " && !final_jogo) {
        if (controle == 0) {
            controle = 1
            btn.value = "X"
            btn1 = "X"
        } else {
            controle = 0
            btn.value = "O"
            btn1 = "O"
        }
        jogada()
    }
}

//botão 2
function clickBtn2() {
    let btn = document.getElementById('btn2')
    if (btn.value == " " && !final_jogo) {
        if (controle == 0) {
            controle = 1
            btn.value = "X"
            btn2 = "X"
        } else {
            controle = 0
            btn.value = "O"
            btn2 = "O"
        }
        jogada()
    }
}

//botão 3
function clickBtn3() {
    let btn = document.getElementById('btn3')
    if (btn.value == " " && !final_jogo) {
        if (controle == 0) {
            controle = 1
            btn.value = "X"
            btn3 = "X"
        } else {
            controle = 0
            btn.value = "O"
            btn3 = "O"
        }
        jogada()
    }
}

//botão 4
function clickBtn4() {
    let btn = document.getElementById('btn4')
    if (btn.value == " " && !final_jogo) {
        if (controle == 0) {
            controle = 1
            btn.value = "X"
            btn4 = "X"
        } else {
            controle = 0
            btn.value = "O"
            btn4 = "O"
        }
        jogada()
    }
}

//botão 5
function clickBtn5() {
    let btn = document.getElementById('btn5')
    if (btn.value == " " && !final_jogo) {
        if (controle == 0) {
            controle = 1
            btn.value = "X"
            btn5 = "X"
        } else {
            controle = 0
            btn.value = "O"
            btn5 = "O"
        }
        jogada()
    }
}

//botão 6
function clickBtn6() {
    let btn = document.getElementById('btn6')
    if (btn.value == " " && !final_jogo) {
        if (controle == 0) {
            controle = 1
            btn.value = "X"
            btn6 = "X"
        } else {
            controle = 0
            btn.value = "O"
            btn6 = "O"
        }
        jogada()
        
    }
}

//botão 7
function clickBtn7() {
    let btn = document.getElementById('btn7')
    if (btn.value == " " && !final_jogo) {
        if (controle == 0) {
            controle = 1
            btn.value = "X"
            btn7 = "X"
        } else {
            controle = 0
            btn.value = "O"
            btn7 = "O"
        }
        jogada()
    }
}

//botão 8
function clickBtn8() {
    let btn = document.getElementById('btn8')
    if (btn.value == " " && !final_jogo) {
        if (controle == 0) {
            controle = 1
            btn.value = "X"
            btn8 = "X"
        } else {
            controle = 0
            btn.value = "O"
            btn8 = "O"
        }
        jogada()
    }
}

//botão 9
function clickBtn9() {
    let btn = document.getElementById('btn9')
    if (btn.value == " " && !final_jogo) {
        if (controle == 0) {
            controle = 1
            btn.value = "X"
            btn9 = "X"
        } else {
            controle = 0
            btn.value = "O"
            btn9 = "O"
        }
        jogada()
    }
}

function jogada() {
    jogadas += 1
    verificaJogador()
    lblJogadas.innerText = jogadas
    if (jogadas == 9) {
        final_jogo = true
        alert("fim das jogadas")
    }
}

function verificaJogador() {
    let lblJogador = document.getElementById("lblJogador")
    let lblJogadas = document.getElementById("lblJogadas")

    if ((btn1 == 'X' && btn2 == 'X' && btn3 == 'X') || (btn4=='X' && btn5=='X' && btn6=='X') || (btn7=='X' && btn8=='X' && btn9=='X')) {
        final_jogo = true
        lblJogador.innerText = 'O Jogador X ganhou'
    }
    if ((btn1 == 'X' && btn4 == 'X' && btn7 == 'X') || (btn2=='X' && btn5=='X' && btn8=='X') || (btn3=='X' && btn6=='X' && btn9=='X')) {
        final_jogo = true
        lblJogador.innerText = 'O Jogador X ganhou'
    }
    if ((btn1 == 'X' && btn5 == 'X' && btn9 == 'X') || (btn3=='X' && btn5=='X' && btn7=='X')) {
        final_jogo = true
        lblJogador.innerText = 'O Jogador X ganhou'
    }


    if ((btn1 == 'O' && btn2 == 'O' && btn3 == 'O') || (btn4=='O' && btn5=='O' && btn6=='O') || (btn7=='O' && btn8=='O' && btn9=='O')) {
        final_jogo = true
        lblJogador.innerText = 'O Jogador O ganhou'
    }
    if ((btn1 == 'O' && btn4 == 'O' && btn7 == 'O') || (btn2=='O' && btn5=='O' && btn8=='O') || (btn3=='O' && btn6=='O' && btn9=='O')) {
        final_jogo = true
        lblJogador.innerText = 'O Jogador O ganhou'
    }
    if ((btn1 == 'O' && btn5 == 'O' && btn9 == 'O') || (btn3=='O' && btn5=='O' && btn7=='O')) {
        final_jogo = true
        lblJogador.innerText = 'O Jogador O ganhou'
    }
}