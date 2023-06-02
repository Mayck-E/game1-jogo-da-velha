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
renan = '<img src="img/108248455-removebg-preview.png">'
cassio = '<img src="img/127757407-removebg-preview.png">'
velha = '<img src="img/claudemir.jpg">'
player1 = renan
player2 = cassio


function p1(){
    player1 = '<img src="img/108248455-removebg-preview.png">'
    player2 = '<img src="img/127757407-removebg-preview.png">'
}

function p2(){
    player1 = '<img src="img/p3.png">'
    player2 = '<img src="img/p4.png">'
}

// //botão 1
function clickBtn1() {
    if (btn1 == 0 && !final_jogo) {
        if (controle == 0) {
            controle = 1
            document.getElementById("btn1").innerHTML = player1
            btn1 = "X"
        } else {
            controle = 0
            btn1 = "O"
            document.getElementById("btn1").innerHTML = player2
        }
        jogada()
    }
}

//botão 2
function clickBtn2() {
    if (btn2 == 0 && !final_jogo) {
        if (controle == 0) {
            controle = 1
            btn2 = "X"
            document.getElementById("btn2").innerHTML = player1
        } else {
            controle = 0
            btn2 = "O"
            document.getElementById("btn2").innerHTML = player2
        }
        jogada()

    }
}

//botão 3
function clickBtn3() {
    if (btn3 == 0 && !final_jogo) {
        if (controle == 0) {
            controle = 1
            btn3 = "X"
            document.getElementById("btn3").innerHTML = player1
        } else {
            controle = 0
            btn3 = "O"
            document.getElementById("btn3").innerHTML = player2
        }
        jogada()
    }
}

//botão 4
function clickBtn4() {
    if (btn4 == 0 && !final_jogo) {
        if (controle == 0) {
            controle = 1
            btn4 = "X"
            document.getElementById("btn4").innerHTML = player1
        } else {
            controle = 0
            btn4 = "O"
            document.getElementById("btn4").innerHTML = player2
        }
        jogada()
    }
}

//botão 5
function clickBtn5() {
    if (btn5 == 0 && !final_jogo) {
        if (controle == 0) {
            controle = 1
            btn5 = "X"
            document.getElementById("btn5").innerHTML = player1
        } else {
            controle = 0
            btn5 = "O"
            document.getElementById("btn5").innerHTML = player2
        }
        jogada()
    }
}

//botão 6
function clickBtn6() {
    let btn = document.getElementById('btn6').innerHTML
    if (btn6 == 0 && !final_jogo) {
        if (controle == 0) {
            controle = 1
            btn6 = "X"
            document.getElementById("btn6").innerHTML = player1
        } else {
            controle = 0
            btn6 = "O"
            document.getElementById("btn6").innerHTML = player2
        }
        jogada()
    }
}


//botão 7
function clickBtn7() {
    let btn = document.getElementById('btn7').innerHTML
    if (btn7 == 0 && !final_jogo) {
        if (controle == 0) {
            controle = 1
            btn7 = "X"
            document.getElementById("btn7").innerHTML = player1
        } else {
            controle = 0
            btn7 = "O"
            document.getElementById("btn7").innerHTML = player2
        }
        jogada()
    }
}

//botão 8
function clickBtn8() {
    let btn = document.getElementById('btn8').innerHTML
    if (btn8 == 0 && !final_jogo) {
        if (controle == 0) {
            controle = 1
            btn8 = "X"
            document.getElementById("btn8").innerHTML = player1
        } else {
            controle = 0
            btn8 = "O"
            document.getElementById("btn8").innerHTML = player2
        }
        jogada()
    }
}

//botão 9
function clickBtn9() {
    let btn = document.getElementById('btn9').innerHTML
    if (btn9 == 0 && !final_jogo) {
        if (controle == 0) {
            controle = 1
            btn9 = "X"
            document.getElementById("btn9").innerHTML = player1
        } else {
            controle = 0
            btn9 = "O"
            document.getElementById("btn9").innerHTML = player2
        }
        jogada()
    }
}

function jogada() {
    jogadas += 1
    verificaJogador()
}

function verificaJogador() {
    let lblJogador = document.getElementById("lblJogador")
    let lblJogadas = document.getElementById("lblJogadas", "/9")

    if ((btn1 == 'X' && btn2 == 'X' && btn3 == 'X') || (btn4 == 'X' && btn5 == 'X' && btn6 == 'X') || (btn7 == 'X' && btn8 == 'X' && btn9 == 'X')) {
        final_jogo = true
        lblJogador.innerText = 'O Jogador 1 ganhou'
        y = 1

    }
    else if ((btn1 == 'X' && btn4 == 'X' && btn7 == 'X') || (btn2 == 'X' && btn5 == 'X' && btn8 == 'X') || (btn3 == 'X' && btn6 == 'X' && btn9 == 'X')) {
        final_jogo = true
        lblJogador.innerText = 'O Jogador 1 ganhou'
        y = 1

    }
    else if ((btn1 == 'X' && btn5 == 'X' && btn9 == 'X') || (btn3 == 'X' && btn5 == 'X' && btn7 == 'X')) {
        final_jogo = true
        lblJogador.innerText = 'O Jogador 1 ganhou'
        y = 1

    }


    else if ((btn1 == 'O' && btn2 == 'O' && btn3 == 'O') || (btn4 == 'O' && btn5 == 'O' && btn6 == 'O') || (btn7 == 'O' && btn8 == 'O' && btn9 == 'O')) {
        final_jogo = true
        lblJogador.innerText = 'O Jogador 2 ganhou'
        y = 2

    }
    else if ((btn1 == 'O' && btn4 == 'O' && btn7 == 'O') || (btn2 == 'O' && btn5 == 'O' && btn8 == 'O') || (btn3 == 'O' && btn6 == 'O' && btn9 == 'O')) {
        final_jogo = true
        lblJogador.innerText = 'O Jogador 2 ganhou'
        y = 2

    }
    else if ((btn1 == 'O' && btn5 == 'O' && btn9 == 'O') || (btn3 == 'O' && btn5 == 'O' && btn7 == 'O')) {
        final_jogo = true
        lblJogador.innerText = 'O Jogador 2 ganhou'
        y = 2

    }else if(jogadas == 9){
        final_jogo = true
        alert("Deu velha")
        lblJogador.innerText = "Velha"
        y = 3
    }

    if (controle == 0) {
        lblJogador.innerText = "Vez de 'O'"
    } else {
        lblJogador.innerText = "Vez de 'X'"
    }
    lblJogadas.innerText = '( jogada ' + (jogadas) + ' de 9' + ')'

    if(final_jogo){
        if(y == 1){
            document.getElementById("resultado").innerHTML = player1 + '<h3>Cássio ganhou</h3>'
        } 
        if(y == 2){
            document.getElementById("resultado").innerHTML = player2 + '<h3>Renan ganhou</h3>'
        }
        if(y == 3){
            document.getElementById("resultado").innerHTML = velha + '<h3>Não foi dessa vez</h3>'
        }
    }
}
