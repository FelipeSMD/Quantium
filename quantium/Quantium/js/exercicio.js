
	var count = 0;
	var countMensage = 1;
	var internetesCount = 0;
	var buttonArray = [];
	var buttonOptionArray = [];
	var countOptions = 0;
	
	function buttonOptions(text, internetes){
		this.text = text;
		this.internetes = internetes;
	   
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
				
				var buttonOption11 = new buttonOptions("tudo bem", false);
				var buttonOption12 = new buttonOptions("tdb", true);			

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
					

				var buttonOption21 = new buttonOptions("Por favor", false);
				var buttonOption22 = new buttonOptions("Pfv", true);       
				var buttonOption23 = new buttonOptions("um", false);
				var buttonOption24 = new buttonOptions("1", true);
				var buttonOption25 = new buttonOptions("que", false);
				var buttonOption26 = new buttonOptions("q", true);
				var buttonOption27 = new buttonOptions("está", false);
				var buttonOption28 = new buttonOptions("tá", true);
				var buttonOption29 = new buttonOptions("para", false);       
				var buttonOption210 = new buttonOptions("p", true);
				var buttonOption211 = new buttonOptions("fzr", true);
				var buttonOption212 = new buttonOptions("fazer", false);
				var buttonOption213 = new buttonOptions("Você", false);
				var buttonOption214 = new buttonOptions("Vc", true);
				var buttonOption215 = new buttonOptions("pode", false);
				var buttonOption216 = new buttonOptions("pde", true);

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
				
				var buttonOption31 = new buttonOptions("está", false);
				var buttonOption32 = new buttonOptions("tá", true);	
				var buttonOption33 = new buttonOptions("páginas", false);
				var buttonOption34 = new buttonOptions("pág", true);		

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
				$("#mensagens").append('<p class="mensagem_recebida">Tudo bem!</p');
			break;
			case 2:
				$("#mensagens").append('<p class="mensagem_recebida">Com certeza, posso sim! Onde posso achá-lo?</p');
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
			}
		   
			
		});
		
		
		$("#send").click(function(){


			var internetesCount = 0;
			
			if(buttonArray.length < countOptions + 1){
					console.log("complete todas as palavras");
					return;
				}
			
			for (i = 1; i < buttonArray.length; i ++){               
				
				if(buttonArray[i] == true){
					internetesCount ++;                    
				}
				
				
			}
			//removeChildMensages();

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
			
			
		});
	
	
	});

