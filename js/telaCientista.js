var textoDialogo = "Socorro, FULANO (A)! Pessoas estão sendo infectadas por um tipo de bactéria. Não posso sair de casa ou vou me infectar. Temos apenas um dia para terminar o antibiótico, ou a bactéria vai dominar a cidade!";
var primeiraVez = 0;
var finalTutorial = false;

insertFirstMessage();
 function insertFirstMessage(){
    $("#dialogBox").append('<div class="mensagem_recebida">Socorro,'+ localStorage.getItem("nomeJogador")+'. Pessoas estão sendo infectadas por um tipo de bactéria. Não posso sair de casa ou vou me infectar.</div>');
    $("#dialogBox").animate({scrollTop: $('#dialogBox').prop("scrollHeight")}, 500);

    $("#dialogBox").append('<div class="mensagem_recebida">Temos apenas um dia para terminar o antibiótico, ou a bactéria vai dominar a cidade!</div>');
    $("#dialogBox").animate({scrollTop: $('#dialogBox').prop("scrollHeight")}, 500);

    $("#dialogBox").append('<div class="mensagem_recebida">Como você domina o internetês e a norma culta, fale com algumas pessoas dos seus contatos para obter informações e terminar a fórmula.</div>');
    $("#dialogBox").animate({scrollTop: $('#dialogBox').prop("scrollHeight")}, 500);

    $("#dialogBox").append('<div class="mensagem_recebida">Seja esperto e saiba se comunicar conforme o contexto adequado para não perder tempo. Aceita a missão?</div>');
    $("#dialogBox").animate({scrollTop: $('#dialogBox').prop("scrollHeight")}, 500);
}

function enviar(){
	var resp = document.getElementById("borda").innerHTML;
	if(resp == "Sim"){
		$("#dialogBox").append('<div class="mensagem_enviada">Sim</div>');
    	$("#dialogBox").animate({scrollTop: $('#dialogBox').prop("scrollHeight")}, 500);
    }else if(resp == "Não"){
    	document.getElementById("termometro").src = "imagens/termometro8.png";
    	$("#dialogBox").append('<div class="mensagem_enviada">YOU DIEEEE!!</div>');
    	$("#dialogBox").animate({scrollTop: $('#dialogBox').prop("scrollHeight")}, 500);
    }
}

function resetar(){
    location.reload();
}

function resposta(id){
	document.getElementById("borda").innerHTML = document.getElementById(id).innerHTML;
}
/*document.getElementById("textoCompleto").innerHTML = textoDialogo;

function typeWritter(texto,idElemento,tempo){
    var char = texto.split('').reverse();
    var typer = setInterval(function () {
    if (!char.length) return clearInterval(typer);
        var next = char.pop();
        document.getElementById(idElemento).innerHTML += next;
    }, tempo); 
    window.setTimeout(function() {
        if(finalTutorial==false){
            document.getElementById(idElemento).innerHTML += '<span class="blink">|</span>';
            primeiraVez +=1;
        }else{
            document.getElementById(idElemento).innerHTML += '<span class="blink">|</span>';
            primeiraVez +=2;
        }
    },  tempo*(char.length+1));
}

typeWritter(textoDialogo,"textoAndamento1",100);


function acelerarTexto(){
    if((primeiraVez==0)&&(finalTutorial==false)){
        primeiraVez = 1;
       
        document.getElementById("textoAndamento1").style.display="none";
        document.getElementById("textoAndamento2").style.display="none";
        document.getElementById("textoCompleto").style.display="block";
    }else if(primeiraVez == 1){
        primeiraVez = 0;
        finalTutorial = true;
        textoDialogo = "Como você domina o internetês e a norma culta, fale com algumas pessoas dos seus contatos para obter informações e terminar a fórmula. Seja esperto e saiba se comunicar conforme o contexto adequado para não perder tempo. Aceita a missão?"
        typeWritter(textoDialogo,"textoAndamento2",100);
        document.getElementById("textoAndamento1").style.display="none";
        document.getElementById("textoAndamento2").style.display="block";
        document.getElementById("textoCompleto").style.display="none";
    }else if((primeiraVez==0)&&(finalTutorial==true)){
        primeiraVez = 2;
        document.getElementById("textoCompleto").innerHTML = textoDialogo+'<span class="blink">|</span>';
        document.getElementById("textoAndamento1").style.display="none";
        document.getElementById("textoAndamento2").style.display="none";
        document.getElementById("textoCompleto").style.display="block";
    }else{
        primeiraVez = 0;
        finalTutorial = false;
        document.getElementById("tutorialBox").style.display="none";
        document.getElementById("acelerar").style.display="none";
    }   
}*/