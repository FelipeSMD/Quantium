var texto = "i";
var erros = 0;
var respostaAtual = [];
var perguntaAtual = [];
var contResp = 0;
var contPerg = 0;
var textoDialogo = "O enfermeiro Baltazar Boaventura não está em nenhuma rede social e utiliza frequentemente a linguagem formal em seus diálogos.";
var primeiraVez = 0;
var finalTutorial = false;

    
    respostaAtual[0] = "Olá, como vai ? Preciso fazer um antibiótico porque uma bactéria tomou conta da cidade. Você pode me ajudar?";
    respostaAtual[1] = "Gostaria que você enviasse um exame com a taxa de leucócitos de uma pessoa de 14 anos infectada. Obrigado.";
    respostaAtual[2] = "Tudo bem. Obrigado! ";

    perguntaAtual[0] = "Nossa! Estamos sabendo do ocorrido! Diga-me como posso ajudá-lo?";
    perguntaAtual[1] = "Entendi. Posso fazer isso para você.";
    perguntaAtual[2] = "<img src=\'imagens/hemogramaicon.png\' onclick=\'susto()\'>";


function allowDrop(ev, id) {
    if ($(id).children().length <= 0) {
        ev.preventDefault();
    };
    
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
console.log("deu certo");

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    document.getElementById(data).style.margin = "0px 0px 0px 0px";
    document.getElementById(data).style.position = "relative";
    ev.target.appendChild(document.getElementById(data));
    
}

function somaResposta(){  
		texto = "";
        var d = document.getElementById('esp1').querySelectorAll('*');
        for(var i = 0; i<d.length;i++){  
           texto += d[i].innerHTML  + " ";  
        }
        var d = document.getElementById('esp2').querySelectorAll('*');
        for(var i = 0; i<d.length;i++){  
           texto += d[i].innerHTML + " ";  
        } 
        var d = document.getElementById('esp3').querySelectorAll('*');
        for(var i = 0; i<d.length;i++){  
           texto += d[i].innerHTML + " ";  
        } 
        var d = document.getElementById('esp4').querySelectorAll('*');
        for(var i = 0; i<d.length;i++){  
           texto += d[i].innerHTML + " ";  
        }   

        var d = document.getElementById('esp5').querySelectorAll('*');
        for(var i = 0; i<d.length;i++){  
           texto += d[i].innerHTML + " ";  
        } 
        var d = document.getElementById('esp6').querySelectorAll('*');
        for(var i = 0; i<d.length;i++){  
           texto += d[i].innerHTML;  
        } 
        console.log(texto);
        verificaResposta()
 } 

 function verificaResposta(){
 	if(texto == respostaAtual[contResp]){
 		//window.location.href = "telaObrigado.html"
        $("#dialogBox").append('<div class="mensagem_enviada">' + respostaAtual[contResp] + ' </div>');
        $("#dialogBox").animate({scrollTop: $('#dialogBox').prop("scrollHeight")}, 500);

        $("#dialogBox").append('<div class="mensagem_recebida">'+ perguntaAtual[contPerg] +'</div>');
        $("#dialogBox").animate({scrollTop: $('#dialogBox').prop("scrollHeight")}, 500);

        contPerg +=1;
        contResp +=1;
        atualizaBox();
        limpar();
 	}else if ((texto != respostaAtual[contResp]) && (erros <8)){
 		erros += 1; 
 		document.getElementById("termometro").src = "imagens/termometro" + erros + ".png";
        $("#dialogBox").append('<div class="mensagem_enviada">' + texto + ' </div>');
        $("#dialogBox").animate({scrollTop: $('#dialogBox').prop("scrollHeight")}, 500);

        $("#dialogBox").append('<div class="mensagem_recebida">Desculpe, não entendi.</div>');
        $("#dialogBox").animate({scrollTop: $('#dialogBox').prop("scrollHeight")}, 500);
 		
 	}else{
 		document.getElementById("termometro").src = "imagens/termometro8.png";
 		alert("Você não conseguiu a tempo a cidade foi tomada !")
 	}

 }

function susto(){
    abreFechaInventario();
    mudaImagem("hemograma_cel");
}

insertFirstMessage();
 function insertFirstMessage(){
    $("#dialogBox").append('<div class="mensagem_enviada">Oi, <img src=\'imagens/emoji_thumbsup.png\' />. Vc pde me ajudar? Preciso fzr 1 antibiótico pq 1 bactéria tomou conta da <img src=\'imagens/emoji_cidade.png\' />.</div>');
    $("#dialogBox").animate({scrollTop: $('#dialogBox').prop("scrollHeight")}, 500);

    $("#dialogBox").append('<div class="mensagem_recebida">Desculpe, não entendi.</div>');
    //$("#dialogBox").append('<div class="mensagem_recebida"><img src=\'imagens/hemogramaicon.png\' onclick=\'susto()\'></div>');
    $("#dialogBox").animate({scrollTop: $('#dialogBox').prop("scrollHeight")}, 500);
    
}

function atualizaBox(){
    if (contResp == 0) {
        document.getElementById("frasesBox1").style.display = "block";
        document.getElementById("frasesBox2").style.display = "none";
        document.getElementById("frasesBox3").style.display = "none";
    }else if (contResp == 1) {
        document.getElementById("frasesBox1").style.display = "none";
        document.getElementById("frasesBox2").style.display = "block";
        document.getElementById("frasesBox3").style.display = "none";
    }else if (contResp == 2) {
        document.getElementById("frasesBox1").style.display = "none";
        document.getElementById("frasesBox2").style.display = "none";
        document.getElementById("frasesBox3").style.display = "block";
    }
}

function limpar(){ 
   document.getElementById("esp1").innerHTML=""; 
   document.getElementById("esp2").innerHTML=""; 
   document.getElementById("esp3").innerHTML=""; 
   document.getElementById("esp4").innerHTML=""; 
   document.getElementById("esp5").innerHTML=""; 
   document.getElementById("esp6").innerHTML=""; 
   //document.getElementById("esp1").style.position = "relative";
} 

function resetar(){
    location.reload();
}

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
        textoDialogo = "Nesse ambiente, a conversa será realizada por meio do internetês para a linguagem formal e, em alguns momentos, de palavras usadas erroneamente no cotidiano para a linguagem formal."
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
}



