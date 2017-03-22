
	var count = 0;
	var countMensage = 1;
	var internetesCount = 0;
	var buttonArray = [];
	var buttonOptionArray = [];
	var countOptions = 0;
	var contadorProvisorio = 0;
	var testPlace = [];
	var termometroCount = 0;
	
	function buttonOptions(text, internetes, place){
		this.text = text;
		this.internetes = internetes;
		this.place = place;
	   
	} 
		
		
	function addButtonOption (buttonOption, count){
		//var buttonOption = new buttonOptions(text, internetes);
		$("#divbuttons").append('<button class="button-option" id="button-option"'+countMensage+count+'>' + buttonOption.text + '</button>');
		$("#button-option"+countMensage+count).text(buttonOption.text);
	}
/*
	function removeChildMensages (){
		for (i = 1; i < $("#divbuttons").length; i++){
			$("#divbuttons").removeChild("#button-option"+i);
		}
	}
*/
	function selectMessage (buttonMessageArray){
		for(i = 0; i < buttonMessageArray.length; i++){
			addButtonOption (buttonMessageArray[i], i);
		}	
		//console.log("to aqui");
	}

	function switchMessage (count) {
		switch (count){
			case 1:
				$("#text").empty();
				$("#divbuttons").empty();
				buttonOptionArray = [];

				$("#text").append('Oi, <strong><span id="espaco11">____</span></strong>?');
				
				var buttonOption11 = new buttonOptions("tudo bem", false, 1);
				var buttonOption12 = new buttonOptions("tdb", true, 1);			

				buttonOptionArray = [	buttonOption11, 
										buttonOption12];
				
			break;
			case 2:
				$("#text").empty();
				$("#divbuttons").empty();
				buttonOptionArray = [];

				$("#text").append('<strong><span id="espaco21">____</span></strong>, preciso de ');
				$("#text").append('<strong><span id="espaco22">____</span></strong> livro ');	
				$("#text").append('<strong><span id="espaco23">____</span></strong> ');	
				$("#text").append('<strong><span id="espaco24">____</span></strong> na biblioteca ');	
				$("#text").append('<strong><span id="espaco25">____</span></strong> ');	
				$("#text").append('<strong><span id="espaco26">____</span></strong> um antibiótico ');
				$("#text").append('<strong><span id="espaco27">____</span></strong> a cura dos infectados.');	
				$("#text").append('<strong><span id="espaco28">____</span></strong> ');	
				$("#text").append('<strong><span id="espaco29">____</span></strong> me ajudar?');	
					

				var buttonOption21 = new buttonOptions("Por favor", false, 1);
				var buttonOption22 = new buttonOptions("Pfv", true, 1);       
				var buttonOption23 = new buttonOptions("um", false, 2);
				var buttonOption24 = new buttonOptions("1", true, 2);
				var buttonOption25 = new buttonOptions("que", false, 3);
				var buttonOption26 = new buttonOptions("q", true, 3);
				var buttonOption27 = new buttonOptions("está", false, 4);
				var buttonOption28 = new buttonOptions("tá", true, 4);
				var buttonOption29 = new buttonOptions("para", false, 5);       
				var buttonOption210 = new buttonOptions("p", true, 5);
				var buttonOption211 = new buttonOptions("fazer", false, 6);
				var buttonOption212 = new buttonOptions("fzr", true, 6);
				var buttonOption213 = new buttonOptions("Você", false, 7);
				var buttonOption214 = new buttonOptions("Vc", true, 7);
				var buttonOption215 = new buttonOptions("pode", false, 8);
				var buttonOption216 = new buttonOptions("pde", true, 8);

				buttonOptionArray = [	buttonOption21, 
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
										buttonOption212,
										buttonOption213,
										buttonOption214,
										buttonOption215,
										buttonOption216];
				
			break;

			case 3:
				$("#text").empty();
				$("#divbuttons").empty();
				buttonOptionArray = [];

				$("#text").append('O livro se chama "Fórmulas de Antibióticos" e <strong><span id="espaco31">____</span></strong> ');
				$("#text").append('na estante PR025 e eu preciso das <strong><span id="espaco32">____</span></strong> 6 e 7.');
				
				var buttonOption31 = new buttonOptions("está", false, 1);
				var buttonOption32 = new buttonOptions("tá", true, 1);	
				var buttonOption33 = new buttonOptions("páginas", false, 2);
				var buttonOption34 = new buttonOptions("pág", true, 2);		

				buttonOptionArray = [	buttonOption31, 
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
				$("#mensagens").append('<p class="mensagem_recebida">Tdb!</p');
			break;
			case 2:
				$("#mensagens").append('<p class="mensagem_recebida">Com ctz, posso s! Onde acho?</p');
			break;
			case 3:
				$("#mensagens").append('<p class="mensagem_recebida">Tô te chamando na videoconferência, atende aí</p');
			break;
		}		
	}


	function countInternetes(buttonOptionArray){
		

		for(i = 0; i < buttonOptionArray.length; i++){
			switch($("#espaco"+countMensage+count).text()){
				case buttonOptionArray[i].text:
					buttonArray[count] = buttonOptionArray[i].internetes;
					testPlace[count] = buttonOptionArray[i].place;
				break;
			}

		}		
		//console.log(buttonArray);	

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

			console.log("#espaco"+countMensage+count);
			if(count < countOptions) {
				count ++;
				
				$("#espaco"+countMensage+count).text($(this).text());               
				countInternetes(buttonOptionArray);
			}
			
			
			//console.log(buttonArray);
		});
	}
/*
	function testMessagePlace(count){
		switch(count){
			case 2:
				if(	testPlace[1] != 1 ||
					testPlace[2] != 2 ||
					testPlace[3] != 3 ||
					testPlace[4] != 4 ||
					testPlace[5] != 5 ||
					testPlace[6] != 6 ||
					testPlace[7] != 5 ||
					testPlace[8] != 7 ||
					testPlace[9] != 8){
						$("#mensagens").append('<p class="mensagem_recebida">N entendi.</p');

				};

			break;

			case 3:
				if(	testPlace[1] != 1 ||
					testPlace[2] != 2){
					$("#mensagens").append('<p class="mensagem_recebida">N entendi.</p');
				};

			break;
		}
	}*/


	$(document).ready(function(){


		
		switchMessage(countMensage);
		
		selectMessage(buttonOptionArray);

		countOptions = $("#text span").length;
		
		
		//console.log(countOptions);
		
		testClick();

		$("#delete").click(function(){
			
			if(count > 0){                          
				$("#espaco"+countMensage+count).text("____"); 
				count --;
				
				buttonArray.pop();
				testPlace.pop();
			}
		   
			
		});
		
		
		$("#send").click(function(){

			$("#mensagens").animate({scrollTop: $('#mensagens').prop("scrollHeight")}, 500);

			var internetesCount = 0;
			
			if(buttonArray.length < countOptions + 1){
					alert("complete todas as palavras");
					return;
				}
			
			for (i = 1; i < buttonArray.length; i ++){               
				
				if(buttonArray[i] == true){
					internetesCount ++;                    
				}				
			}
			//testMessagePlace(countMensage);
			//removeChildMensages();
			switch(countMensage){
				case 1:
				if(internetesCount < 1){
					//alert("Muito internetes");
					aumentarTermometro();
					$("#mensagens").append('<p class="mensagem_recebida">N temos mto tempo! Use o internetês!</p');
					return;
				}
				break;
				case 2:
					if(	testPlace[1] != 1 ||
						testPlace[2] != 2 ||
						testPlace[3] != 3 ||
						testPlace[4] != 4 ||
						testPlace[5] != 5 ||
						testPlace[6] != 6 ||
						testPlace[7] != 5 ||
						testPlace[8] != 7 ||
						testPlace[9] != 8){
							aumentarTermometro();
							$("#mensagens").append('<p class="mensagem_recebida">N entendi.</p');
							return;						
					} else if (internetesCount < 9){
						//alert("Muito internetes");
						aumentarTermometro();
						$("#mensagens").append('<p class="mensagem_recebida">Ops! Mlr usar o internetês, ein? Vc tem pouco tempo!</p');
						return;
					}
				break;
				case 3:				
					if(	testPlace[1] != 1 ||
						testPlace[2] != 2){
							aumentarTermometro();
							$("#mensagens").append('<p class="mensagem_recebida">N entendi.</p');
							return;
					} else if(internetesCount < 2){
						aumentarTermometro();
						$("#mensagens").append('<p class="mensagem_recebida">Ops! Mlr usar o internetês, ein? Vc tem pouco tempo!</p');
						return;
					}

				break;
			}

			console.log(buttonArray);
			console.log("palavras internetes = " + internetesCount);

			console.log("count = " + count);

			sendMessage();
			//clearContainer();

			count = 0;
			internetesCount = 0;
			buttonArray = [];
			buttonOptionArray = [];
			countOptions = 0;
					
			countMensage ++;

			
			//$("celular_mensagens").append("<p id='text'></p>");

			switchMessage(countMensage);
		
			selectMessage(buttonOptionArray);
		
			countOptions = $("#text span").length;



			testClick();
			contadorProvisorio++;
			if(contadorProvisorio>2){
				setTimeout(carregarTelaObrigado, 3000);
			}
			
		});
	
	
	});


	function aumentarTermometro(){
		var url = "url('imagens/termometro"
		if(termometroCount < 8){
			termometroCount += 1;
			document.getElementById("termometro").style.backgroundImage = url + termometroCount + ".png')";
		} else {
			alert("game over");
		}
	}

	function carregarTelaObrigado() {
		window.location.href = "videoConferencia.html";
	}

	function desconectar(){
		$("#mensagens").append('<p class="mensagem_recebida">Amanda Luz se desconectou.</p>');
	}
