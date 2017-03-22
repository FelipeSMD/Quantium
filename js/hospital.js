var arrayDropAnswer = [];
var arrayDragChoose = [];
var dropCount = 0;
var dragCount = 0;
var contAnswer = 0;
var countErrors = 0;
var countMessage = 1;
var estadoInv = false;

function dragButtonOption(text){
	this.text = text;
}

function dropLocationOption(value, staticText, index){
	this.value = value;
	this.staticText = staticText;
	this.index = index;
}

$(document).ready(function(){
	/*
	var button1 = new dragButtonOption("como", true, 1);
	insertButton(button1);
	var button2 = new dragButtonOption("podemos", true, 1);
	insertButton(button2);
	*/
	insertFirstMessage();

	selectMessage();

	
  	$("#send").click(function(){
  		//alert("qweqwe");

  		

  		for(i = 0; i < contAnswer; i++){
			arrayDragChoose[i]= $("#loc"+i).html();
		}

		for(i = 0; i < contAnswer; i++){
			if(arrayDropAnswer[i] != arrayDragChoose[i]){
				if(countErrors<8) countErrors++;


				$("#termometro").empty();
				$("#termometro").append('<img id="termometroImg" src="imagens/termometro'+countErrors+'.png" />');
				
				
			}
		}
		if(countErrors == 8) alert("game over");

		if(countErrors!=0){
			$("#mensagens").append('<div class="mensagem_recebida">Não entendi</div>');
		}else{
			insertMessage();


		}
		$("#mensagens").animate({scrollTop: $('#mensagens').prop("scrollHeight")}, 500);
  	});

  	$("#delete").click(function(){
  		reset();
  	});
});

function insertButton(dragButton){
	$("#dragBox").append('<a href="#"><div class="dragButton">'+dragButton.text+'</div></a>');
}

function insertDropLocation(dropLocation){
	$("#textDrop").append('<div id ="loc'+contAnswer+'" class="dropLocation">'+dropLocation.value+'</div>'+dropLocation.staticText);

	
	arrayDropAnswer[contAnswer] = dropLocation.index;
	//console.log(arrayDropAnswer[contAnswer]);
	contAnswer++;
}

function reset(){
	//$("#dragBox").html('');
	//$("#textDrop").html('');

	/*arrayDropAnswer = [];
	arrayDragChoose = [];
	dropCount = 0;
	dragCount = 0;
	contAnswer = 0;
	countErrors = 0;

	$("#loc0").html("___________");
	$("#loc1").html("___________");
	$("#loc2").html("___________");
	$("#loc3").html("___________");
	$("#loc4").html("___________");
	$("#loc5").html("___________");
	$("#loc6").html("___________");
	$("#loc7").html("___________");
	$("#loc8").html("___________");

	for(i = 0; i < 9; i++){
		$("#loc"+i).css("background-color", "#8Fa8c9");
		$("#loc"+i).css("color", "#8Fa8c9");
	}

	*/
	location.reload();
}

function insertFirstMessage(){
	switch(countMessage){
		case 1:
			$("#mensagens").append('<div class="mensagem_enviada">Oi, <img src=\'imagens/emoji_thumbsup.png\' />. Vc pde me ajudar? Preciso fzr 1 antibiótico pq 1 bactéria tomou conta da <img src=\'imagens/emoji_cidade.png\' />.</div>');
			$("#mensagens").animate({scrollTop: $('#mensagens').prop("scrollHeight")}, 500);

			$("#mensagens").append('<div class="mensagem_recebida">Desculpe, não entendi.</div>');
			$("#mensagens").animate({scrollTop: $('#mensagens').prop("scrollHeight")}, 500);
		break;

		/*
		case 2:
			$("#mensagens").append('<div class="mensagem_enviada">Gostaria q vc enviasse 1 exame com a taxa de leucócitos de 1 pessoa de 14 anos infectada. Obg.</div>');
			$("#mensagens").animate({scrollTop: $('#mensagens').prop("scrollHeight")}, 500);
		break;
		*/
	}
}

function insertMessage(){
	switch(countMessage){
		case 1:			
			$("#mensagens").append('<div class="mensagem_enviada">Olá, como vai? Você pode me ajudar? Preciso fazer um atibiótico porque uma bactéria tomou conta da cidade.</div>');
			$("#mensagens").animate({scrollTop: $('#mensagens').prop("scrollHeight")}, 500);
			setTimeout(receiveMessage, 1000);
		break;

		case 2:			
			$("#mensagens").append('<div class="mensagem_enviada">Gostaria que você enviasse um exame com a taxa de leucócitos de uma pessoa de 14 anos infectada. Obrigado(a).</div>');
			$("#mensagens").animate({scrollTop: $('#mensagens').prop("scrollHeight")}, 500);
			setTimeout(receiveMessage, 1000);
		break;
	}	
}

function receiveMessage(){
	switch(countMessage){
		case 1:			
			$("#mensagens").append('<div class="mensagem_recebida">Entendi. De que você precisa?</div>');
			$("#mensagens").animate({scrollTop: $('#mensagens').prop("scrollHeight")}, 500);			
		break;		

		case 2:			
			$("#mensagens").append('<div class="mensagem_recebida">Entendi. Posso fazer isso para você.</div>');
			$("#mensagens").animate({scrollTop: $('#mensagens').prop("scrollHeight")}, 500);
						
		break;	
	}
	arrayDropAnswer = [];
	arrayDragChoose = [];
	dropCount = 0;
	dragCount = 0;
	contAnswer = 0;
	countErrors = 0;

	countMessage ++;

	setTimeout(insertFirstMessage, 1000);

	$("#dragBox").empty();
	$("#textDrop").empty();

	selectMessage();
}

function selectMessage(){
	
	switch(countMessage){
		case 1:
			insertButton(new dragButtonOption("Preciso fzr "));
			insertButton(new dragButtonOption("Você pode me ajudar? "));
			insertButton(new dragButtonOption('Oi, "emoji - thumbs up"? '));			
			insertButton(new dragButtonOption("um antibiótico "));
			insertButton(new dragButtonOption("tomou conta da cidade. "));
			insertButton(new dragButtonOption("Vc pde me ajudar? "));
			insertButton(new dragButtonOption("Olá, como vai? "));
			insertButton(new dragButtonOption("pq 1 bactéria "));
			insertButton(new dragButtonOption("porque uma bactéria "));			
			insertButton(new dragButtonOption("Preciso fazer "));			


			
			insertDropLocation(new dropLocationOption("","","Olá, como vai? "));
			insertDropLocation(new dropLocationOption("","","Você pode me ajudar? "));
			insertDropLocation(new dropLocationOption("","","Preciso fazer "));
			insertDropLocation(new dropLocationOption("","","um antibiótico "));
			insertDropLocation(new dropLocationOption("","","porque uma bactéria "));
			insertDropLocation(new dropLocationOption("","","tomou conta da cidade. "));
		break;
		case 2:
				
			insertButton(new dragButtonOption("Obg. "));
			insertButton(new dragButtonOption("de 1 pessoa"));
			insertButton(new dragButtonOption("com a taxa de leucócitos "));
			insertButton(new dragButtonOption("Gostaria que você enviasse "));
			insertButton(new dragButtonOption("Obrigado(a). "));
			insertButton(new dragButtonOption("Gostaria q vc enviasse "));	
			insertButton(new dragButtonOption("de 14 anos infectada. "));
			insertButton(new dragButtonOption("de uma pessoa"));
			insertButton(new dragButtonOption("um exame "));
			insertButton(new dragButtonOption("1 exame "));	

			insertDropLocation(new dropLocationOption("","","Gostaria que você enviasse "));
			insertDropLocation(new dropLocationOption("","","um exame "));
			insertDropLocation(new dropLocationOption("","","com a taxa de leucócitos "));
			insertDropLocation(new dropLocationOption("","","de uma pessoa"));
			insertDropLocation(new dropLocationOption("","","de 14 anos infectada. "));
			insertDropLocation(new dropLocationOption("","","Obrigado(a). "));
		break;
	}
	
	$("#textDrop").droppable({
		drop: function(){

		}
	});

	$(".dragButton").draggable({
  		addClasses: false,
  		//revert: "invalid",
  		scroll: false, 		
  		snap: ".dropLocation",
  		snapMode: "inner"
  	});
	

  	$(".dragButton").mousedown(function(){
  		dragButtonAtual = $(this).html();
  		//arrayDragButtons[0] = $(this);
  		//dragCount++;
  		//alert(dragButtonToDelete.lenght);
  	});


  	$(".dropLocation").droppable({
  		drop: function(){
  			//alert("deu certo");
  			//arrayDropButtons[0] = $(this);
  			//$(arrayDropButtons[0]).hide();
  			
  			$(this).html(dragButtonAtual);
  			/*
  			$(this).css("border", "2px solid black");
  			$(this).css("width", "67px");
  			$(this).css("height", "24px");
  			
  			$(this).css("color", "white");
  			//$(this).css("font-size", "11px");
  			*/
  		},
  		activate: function(){
  			$(this).droppable("disable");
  		}
  	});

  	$(".dragBox").droppable({
  		drop: function (){

  		}
  	});	
}

