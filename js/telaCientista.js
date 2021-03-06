var textoDialogo = "Socorro, FULANO (A)! Pessoas estão sendo infectadas por um tipo de bactéria. Não posso sair de casa ou vou me infectar. Temos apenas um dia para terminar o antibiótico, ou a bactéria vai dominar a cidade!";
var primeiraVez = 0;
var finalTutorial = false;

var mensagemCientista1 = '<div class="mensagem_recebida">Socorro, '+ localStorage.getItem("nomeJogador")+'! Não posso sair de casa ou vou me infectar.</div>';
var mensagemCientista2 = '<div class="mensagem_recebida">Temos apenas um dia para terminar o antibiótico, ou a bactéria vai dominar a cidade!</div>';
var mensagemCientista3 = '<div class="mensagem_recebida">Como você domina o internetês e a norma culta, fale com algumas pessoas dos seus contatos para obter informações e terminar a fórmula.</div>'
var mensagemCientista4 = '<div class="mensagem_recebida">Seja esperto e saiba se comunicar conforme o contexto adequado para não perder tempo. Aceita a missão?</div>';

$( document ).ready(function() {
    executa_som("loop_gameplay");
    insertFirstMessage();
});


function insertFirstMessage(){
    funcMensagensEnviadas(mensagemCientista1, 2000,true, false);
    funcMensagensEnviadas(mensagemCientista2, 4000,false, false);
    funcMensagensEnviadas(mensagemCientista3, 8000,false, false);
    funcMensagensEnviadas(mensagemCientista4, 12000,false, true);
}

function enviar(){
	var resp = document.getElementById("borda").innerHTML;
	if(resp == "Sim"){
		$("#mensagens").append('<div class="mensagem_enviada">Sim</div>');
    	$("#mensagens").animate({scrollTop: $('#mensagens').prop("scrollHeight")}, 500);
        setInterval(function () {
            localStorage.setItem("primeiraVez", true);
            window.location.href = 'contatos.html';
        }, 900);
    }else if(resp == "Não"){
    	document.getElementById("termometro").src = "imagens/Radar_8.png";
        $("#mensagens").append('<div class="mensagem_enviada">Não</div>');
        $("#mensagens").animate({scrollTop: $('#mensagens').prop("scrollHeight")}, 500);
    	gameover();
    }
}

function resetar(){                          
   document.getElementById("borda").innerHTML = "";
}

function resposta(id){
	document.getElementById("borda").innerHTML = document.getElementById(id).innerHTML;
}

function someImagemOver(id){
    document.getElementById(id).style.display= "none";
}

mudarAvatar();

function mudarAvatar(){
    document.getElementById('inventario_bt').src=  avatar_icons[localStorage.getItem('inventario_bt')];
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