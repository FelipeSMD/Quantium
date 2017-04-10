var texto = "i";
var erros = 0;
var respostaAtual = [];
var perguntaAtual = [];
var contResp = 0;
var contPerg = 0;
var textoDialogo = "O enfermeiro Baltazar Boaventura não está em nenhuma rede social e utiliza, frequentemente, a norma culta.";
var primeiraVez = 0;
var finalTutorial = false;

    
    respostaAtual[0] = "Olá, como vai ? Preciso fazer um antibiótico porque uma bactéria tomou conta da cidade. Você pode me ajudar?";
    respostaAtual[1] = "Gostaria que você enviasse um exame com a taxa de leucócitos de uma pessoa de 14 anos infectada. Obrigado.";
    respostaAtual[2] = "Tudo bem. Obrigado! ";

    perguntaAtual[0] = "Nossa! Estamos sabendo do ocorrido! Diga-me como posso ajudá-lo?";
    perguntaAtual[1] = "Entendi. Posso fazer isso para você.";
    perguntaAtual[2] = "<img id=\"hemograma\" src=\"hemogramaicon.png\" data-zoom-image=\"Zumbi_Aparecendo.png\"/>";

/* Teste de interação */

var count = 0;
var countMensage = 1;
var acertosCount = 0;
var buttonArray = [];
var buttonOptionArray = [];
var countOptions = 0;
var contadorProvisorio = 0;
var testPlace = [];
var termometroCount = 0;

var internetW = [['Oi, <img src=\'imagens/emoji_thumbsup.png\'/> ',
                    'Preciso fzr ',
                    '1 antibiotico ',
                    'pq 1 bacteria ',
                    'tomou conta <img src=\'imagens/emoji_cidade.png\'> ',
                    'Vc pde me ajudar? '],
                    ['Gost q vc ',
                    'enviasse 1 ezame ',
                    'c a txa ',
                    'd leucocitos ',
                    'd 1a pssoa d 14anos ',
                    'infectda.'],
                    ['td bem ',
                    'vlw<']];

function buttonOptions(text, booleano, place){
    this.text = text;
    this.correto = booleano;
    this.place = place;   
} 

function addButtonOption (buttonOption, count){
    if(count < 3){
        page = 1;
    } else if ( count < 6){
        if( countMensage == 3)
            page = 1;
        else
            page = 2;
    } else if (count < 9){
        page = 3;
    } else {
        page = 4;
    }
    $("#divbuttons"+page).append('<button class="button-option" id="button-option'+countMensage+count+'">' + buttonOption.text + '</button>');
    $("#button-option"+countMensage+count).text(buttonOption.text);
}

function selectMessage (buttonMessageArray){
    for(i = 0; i < buttonMessageArray.length; i++){
        addButtonOption (buttonMessageArray[i], i);
    }   
}

function switchMessage (count) {
    switch (count){
        case 1:
            $("#text").empty();
            $("#divbuttons1").empty();
            $("#divbuttons2").empty();
            $("#divbuttons3").empty();
            $("#divbuttons4").empty();
            $("#divbuttons1").css("display","inline-block");
            $("#divbuttons2").css("display","none");
            $("#divbuttons3").css("display","none");
            $("#divbuttons4").css("display","none");  
            msgCount=1;          
            buttonOptionArray = [];
            $("#text").append('<span class="replace" id="espaco11">|Oi, <img src=\'imagens/emoji_thumbsup.png\'/>  ');
            $("#text").append('<span class="replace" id="espaco12">|preciso fzr </span>');
            $("#text").append('<span class="replace" id="espaco13">|1 antibiotico </span>');
            $("#text").append('<span class="replace" id="espaco14">|pq 1 bacteria </span>');
            $("#text").append('<span class="replace" id="espaco15">|tomou conta <img src=\'imagens/emoji_cidade.png\'> </span>');
            $("#text").append('<span class="replace" id="espaco16">|Vc pde me ajudar? </span>');
        
            var buttonOption11 = new buttonOptions("Olá, como vai? ", true, 1);
            var buttonOption12 = new buttonOptions("eae blz? ", false, 1);
            var buttonOption13 = new buttonOptions("#preciso_p/_ontem de ", false, 2);
            var buttonOption14 = new buttonOptions("Preciso fazer ", true, 2);
            var buttonOption15 = new buttonOptions("1 remedio ", false, 3);
            var buttonOption16 = new buttonOptions("um antibiótico ", true, 3);
            var buttonOption17 = new buttonOptions("porque uma bactéria ", true, 4);
            var buttonOption18 = new buttonOptions("por q 1a bacteria ", false, 4);  
            var buttonOption19 = new buttonOptions("tmou cnta da cdd ", false, 5);   
            var buttonOption110 = new buttonOptions("tomou conta da cidade. ", true, 5);  
            var buttonOption111 = new buttonOptions("Você pode me ajudar?", true, 6);    
            var buttonOption112 = new buttonOptions("pode dar um helps? ", false, 6);                

            buttonOptionArray = [   buttonOption11, 
                                    buttonOption12,
                                    buttonOption13,
                                    buttonOption14,
                                    buttonOption15,
                                    buttonOption16,
                                    buttonOption17,
                                    buttonOption18,
                                    buttonOption19,
                                    buttonOption110,
                                    buttonOption111,
                                    buttonOption112,];
            
        break;
        case 2:
            $("#text").empty();
            $("#divbuttons1").empty();
            $("#divbuttons2").empty();
            $("#divbuttons3").empty();
            $("#divbuttons4").empty();
            $("#divbuttons1").css("display","inline-block");
            $("#divbuttons2").css("display","none");
            $("#divbuttons3").css("display","none");
            $("#divbuttons4").css("display","none");  
            msgCount=1;          
            buttonOptionArray = [];

            $("#text").append('<span class="replace" id="espaco21">|Gost q vc </span>');
            $("#text").append('<span class="replace" id="espaco22">|enviasse 1 ezame </span>');
            $("#text").append('<span class="replace" id="espaco23">|c a txa </span>');
            $("#text").append('<span class="replace" id="espaco24">|d leucocitos </span>');
            $("#text").append('<span class="replace" id="espaco25">|d 1a pssoa </span>');
            $("#text").append('<span class="replace" id="espaco26">|d 14anos infectda. </span>');  
                

            var buttonOption21 = new buttonOptions("Gostaria que você ", true, 1);
            var buttonOption22 = new buttonOptions("Qria q vc ", true, 1);       
            var buttonOption23 = new buttonOptions("mand 1 enzame ", false, 2);
            var buttonOption24 = new buttonOptions("enviasse um exame ", true, 2);
            var buttonOption25 = new buttonOptions("c/ o tanto ", false, 3);
            var buttonOption26 = new buttonOptions("com a taxa ", true, 3);
            var buttonOption27 = new buttonOptions("de leucócitos ", true, 4);
            var buttonOption28 = new buttonOptions("d lewcositus ", false, 4);
            var buttonOption29 = new buttonOptions("de uma pessoa ", true, 5);       
            var buttonOption210 = new buttonOptions("d una pesoa ", false, 5);
            var buttonOption211 = new buttonOptions(" c 14anos duente ", false, 6);
            var buttonOption212 = new buttonOptions(" de 14 anos infectada ", true, 6);

            buttonOptionArray = [   buttonOption21, 
                                    buttonOption22, 
                                    buttonOption23, 
                                    buttonOption24,
                                    buttonOption25,
                                    buttonOption26,
                                    buttonOption27,
                                    buttonOption28, 
                                    buttonOption29, 
                                    buttonOption210, 
                                    buttonOption211,
                                    buttonOption212];
            
        break;

        case 3:
            $("#text").empty();
            $("#divbuttons1").empty();
            $("#divbuttons2").empty();
            $("#divbuttons3").empty();
            $("#divbuttons4").empty();
            $("#divbuttons1").css("display","inline-block");
            $("#divbuttons2").css("display","none");
            $("#divbuttons3").css("display","none");
            $("#divbuttons4").css("display","none");
            msgCount=1;
            buttonOptionArray = [];

            $("#text").append('<span class="replace" id="espaco31">|td bem </span>');
            $("#text").append('<span class="replace" id="espaco32">|vlw </span>');
            
            var buttonOption31 = new buttonOptions("ok ", false, 1);
            var buttonOption32 = new buttonOptions("Tudo bem. ", true, 1);   
            var buttonOption33 = new buttonOptions("flw ", false, 2);
            var buttonOption34 = new buttonOptions("Agradeço! ", true, 2);       

            buttonOptionArray = [   buttonOption31, 
                                    buttonOption32,
                                    buttonOption33,
                                    buttonOption34];
            
        break;
    }
}

    function receiveMessage(){
        //console.log("receive count = " + countMensage);
        switch(countMensage){
            case 1:
                $("#mensagens").append('<p class="mensagem_recebida">Nossa! Estamos sabendo do ocorrido! Diga-me como posso ajudá-lo?</p');
            break;
            case 2:
                $("#mensagens").append('<p class="mensagem_recebida">Entendi. Posso fazer isso para você.</p');
            break;
            case 3:
                $("#mensagens").append('<div class="mensagem_recebida"><img id=\"hemogramaZoom\" src=\"imagens/hemogramaicon.png\" data-zoom-image=\"imagens/Zumbi_Aparecendo.png\" onclick=\"zoom()\" /></div>');
            break;
        }       
    }

    function preenchedor(buttonOptionArray){
        for(i = 0; i < buttonOptionArray.length; i++){
            switch($("#espaco"+countMensage+count).text()){
                case buttonOptionArray[i].text:
                    buttonArray[count] = buttonOptionArray[i].correto;
                    testPlace[count] = buttonOptionArray[i].place;
                break;
            }
        }      
    }
    

    function clearContainer(){
        $("#text").empty();
        $("#divbuttons").empty();
    }

    function sendMessage(){
        $("#mensagens").append("<p class='mensagem_enviada'>"+ $('#text').text()+"</p>");

        receiveMessage();
    }

    function testClick(){
        $(".button-option").click(function(){  
            //console.log(buttonOptionArray);
            if(count < countOptions) {
                count ++;
                
                $("#espaco"+countMensage+count).text($(this).text());
                $("#espaco"+countMensage+count).attr("class","replaced");           
                preenchedor(buttonOptionArray);
            }
            
            
            //console.log(buttonArray);
        });
    }

    /* Jquery com as verificações */
    $(document).ready(function(){
        
        switchMessage(countMensage);
        
        selectMessage(buttonOptionArray);

        countOptions = $("#text span").length;
        
        msgCount=1;
        //console.log(countOptions);
        
        testClick();

        $("#delete").click(function(){
            
            if(count > 0){                          
                $("#espaco"+countMensage+count).html(internetW[countMensage-1][count-1]); 
                $("#espaco"+countMensage+count).attr("class","replace");
                count --;
                
                buttonArray.pop();
                testPlace.pop();
            }
           
            
        });

        $("#leftPage").click(function(){
            if(countMensage != 3)
            if(msgCount>1){
                $("#divbuttons"+msgCount).css("display","none");
                $("#divbuttons"+(msgCount-1)).css("display","inline-block");
                msgCount--;
            }
        });

        $("#rightPage").click(function(){  
            if(countMensage != 3)
            if(msgCount<4){
                $("#divbuttons"+msgCount).css("display","none");
                $("#divbuttons"+(msgCount+1)).css("display","inline-block");
                msgCount++;
            }

        });
        
        $("#send").click(function(){

            $("#mensagens").animate({scrollTop: $('#mensagens').prop("scrollHeight")}, 500);

            var acertosCount = 0;
            
            if(buttonArray.length < countOptions + 1){
                    alert("complete todas as palavras");
                    return;
                }
            
            for (i = 1; i < buttonArray.length; i ++){               
                
                if(buttonArray[i] == true){
                    acertosCount ++;                    
                }               
            }
            //testMessagePlace(countMensage);
            //removeChildMensages();
            switch(countMensage){
                case 1:
                if( testPlace[1] != 1 ||
                        testPlace[2] != 2 ||
                        testPlace[3] != 3 ||
                        testPlace[4] != 4 ||
                        testPlace[5] != 5 ||
                        testPlace[6] != 6 ){
                            aumentarTermometro();
                            $("#mensagens").append('<p class="mensagem_recebida">Não entendi o que você quis dizer.</p');
                            return; 
                        }
                if(acertosCount < 6){
                    aumentarTermometro();
                    $("#mensagens").append('<p class="mensagem_recebida">Não sou muito bom nessa linguagem de jovem</p');
                    return;
                }
                break;
                case 2:
                    if( testPlace[1] != 1 ||
                        testPlace[2] != 2 ||
                        testPlace[3] != 3 ||
                        testPlace[4] != 4 ||
                        testPlace[5] != 5 ||
                        testPlace[6] != 6 ){
                            aumentarTermometro();
                            $("#mensagens").append('<p class="mensagem_recebida">O que você quis dizer mesmo?.</p');
                            return;                     
                    } else if (acertosCount < 6){
                        //alert("Muito acertos");
                        aumentarTermometro();
                        $("#mensagens").append('<p class="mensagem_recebida">Você está realmente dizendo algo ou são letras aleatórias?</p');
                        return;
                    }
                break;
                case 3:             
                    if(acertosCount < 2){
                        aumentarTermometro();
                        $("#mensagens").append('<p class="mensagem_recebida">Não consigo decifrar isso</p');
                        return;
                    }

                break;
            }

            sendMessage();
            //clearContainer();

            count = 0;
            acertosCount = 0;
            buttonArray = [];
            buttonOptionArray = [];
            countOptions = 0;
                    
            countMensage ++;

            
            //$("celular_mensagens").append("<p id='text'></p>");

            switchMessage(countMensage);
        
            selectMessage(buttonOptionArray);
        
            countOptions = $("#text span").length;



            testClick();
            /*
            contadorProvisorio++;
            if(contadorProvisorio>2){
                setTimeout(carregarTelaObrigado, 3000);
            }
            */
        });

    });
    
    

/* fim do código do teste de interação */

function zoom(){
    $("#mensagens").empty();
    $("#text").empty();
    $("#options").empty();
    $("#mensagens").append('<div class="mensagem_recebida"><img id=\"hemogramaZoom\" src=\"imagens/hemogramaicon.png\" data-zoom-image=\"imagens/Zumbi_Aparecendo.png\" onclick=\"zoom()\" /></div>');
    $("#hemogramaZoom").elevateZoom({
        zoomType: "inner",
        cursor: "crosshair",
        easing : true
    });
    $("body").mousemove(function( event ) {
        if(event.pageX > 400 && event.pageX < 425)
            if(event.pageY > 300 && event.pageY < 325){
                $( "body" ).off( "mousemove");
                $("#hemogramaZoom").data("zoom-image","imagens/conf5.png").elevateZoom({
                    zoomType: "inner",
                    cursor: "crosshair",
                    easing : true
                });
                   window.setTimeout(susto, 1000);
            }
    });
    mudaImagem("hemograma_cel");
}

function susto(){
    $("#mensagens").empty();
    $("#mensagens").append('<p class="mensagem_recebida">Baltazar Boaventura se desconectou.</p>');
    $("#mensagens").animate({scrollTop: $('#mensagens').prop("scrollHeight")}, 500);
    window.setTimeout(carregarContatos,2000);
}

    function carregarContatos() {
        window.location.href = "contatos.html";
    }

insertFirstMessage();

function insertFirstMessage(){
    $("#mensagens").append('<div class="mensagem_enviada">Oi, <img src=\'imagens/emoji_thumbsup.png\' />. Preciso fzr 1 antibiótico pq 1 bactéria tomou conta da <img src=\'imagens/emoji_cidade.png\' />. Vc pde me ajudar?</div>');
    $("#mensagens").animate({scrollTop: $('#mensagens').prop("scrollHeight")}, 500);
    $("#mensagens").append('<div class="mensagem_recebida">Desculpe, não entendi.</div>');
    $("#mensagens").animate({scrollTop: $('#mensagens').prop("scrollHeight")}, 500);
    
}

/* Funções externas ao exercício */

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
        textoDialogo = "Nesse ambiente, você precisa traduzir as mensagens do internetês para a norma culta. Clique nas frases e expressões para traduzir as mensagens."
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

    function aumentarTermometro(){
        var url = "url('imagens/Radar_"
        if(termometroCount < 8){
            termometroCount += 1;
            document.getElementById("termometro").style.backgroundImage = url + termometroCount + ".png')";
        } else {
            gameover();
        }
    }

    function gameover(){
        $("#telaExercicio").hide();
        $("#celular").animate({
            opacity: 0.4,
            height: "-=50%",
            marginTop: "+=40%"
        }, 2000,function(){
            $(this).hide();
            $("#inventario_bt").hide();
            $("#termometro").hide();
            $("#ajuda").hide();
        });
        $('#bg').addClass('gameover');
}
