
function CampoUm(){
    document.querySelector("#resultado").innerHTML = "<h1>Tempo diario</h1>"
    document.querySelector("#resultado").innerHTML += "Quando tratamos de freelances, há uma certa demanda do seu tempo em off. Ou seja: depois do trabalho, escola ou aquele tempinho vago no final do dia que você usa pra relaxar e descontrair. Esse tempo é algo muito valioso para qualquer pessoa, certo? Então claramente temos que levar esse fator em consideração.<br>"
    document.querySelector("#resultado").innerHTML += "<img src='img/relogio.png'>"
}

function CampoDois(){
    document.querySelector("#resultado").innerHTML = "<h1>Dias efetivos</h1>"
    document.querySelector("#resultado").innerHTML += "Outro fator é a quantidade de dias efetivos que você irá disponibilizar para trabalhar no projeto. Não há nenhuma garantia que você poderá trabalhar todos os dias e de fato lidar com o processo de confirmar tudo com o cliente. Logo, você terá que cotar uma quantidade de dias especificos para lidar com todo o processo, sendo ele a parte comercial e desenvolvimento.<br>"
    document.querySelector("#resultado").innerHTML += "<img src='img/calendario.png'>"
}

function CampoTres(){
    document.querySelector("#resultado").innerHTML = "<h1>Dias de ferias</h1>"
    document.querySelector("#resultado").innerHTML += 'Qualquer modalidade de trabalho, seja CLT ou PJ há seus encargos referentes a verba de férias e não seria diferente para lidar com um freela. Uma parte do valor da sua hora reflete diretamente na quantidade de dias que você deseja tirar "férias" com o valor total projeto.<br>'
    document.querySelector("#resultado").innerHTML += "<img src='img/guardasol.png'>"
}

function CampoQuatro(){
    document.querySelector("#resultado").innerHTML = "<h1>Valor do projeto</h1>"
    document.querySelector("#resultado").innerHTML += 'Não podemos esquecer do principal fator que é o total a ser recebido pelo freela. A partir desse valor, do quanto você desejaria ganhar em cima do trabalho, é feito o calculo maior.<br>'
    document.querySelector("#resultado").innerHTML += "<img src='img/dinheiro.png'>"
}

function resultadoTotal(){



    var horasDiarias = document.querySelector("#HorasDia").value
    var valorProjeto = document.querySelector("#TotalProjeto").value
    var diasEfetivos = document.querySelector("#DiasSemana").value
    var diasFerias = document.querySelector("#Ferias").value

    if (horasDiarias == "" || valorProjeto == "" || diasEfetivos == "" || diasFerias == ""){
        alert("Preencha todos os campos antes de continuar!")
    }else{
        valorHora = (valorProjeto / diasEfetivos * 4 * horasDiarias)  + ( diasFerias * diasEfetivos * horasDiarias ) 
        document.querySelector("#resultado").innerHTML = "<h1>Valor total</h1>"
        document.querySelector("#resultado").innerHTML += "<h2>" + "R$" + parseFloat(valorHora.toFixed(2)) + "</h2>"
        document.querySelector("#resultado").innerHTML += "<img src='img/ganhandoDinheiro.png'>"
    }


    
}
