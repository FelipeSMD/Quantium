var novaDiv;
var texto;
var acelerado = false;
var timeout_handle;
var tweets;
var avatar_position = 0;
var avatar_imagens = ["imagens/avatarF1.png", "imagens/avatarF2.png", "imagens/avatarM1.png", "imagens/avatarM2.png"];
var avatar_icons = ["imagens/icon_avatarF1.png", "imagens/icon_avatarF2.png", "imagens/icon_avatarM1.png", "imagens/icon_avatarM2.png"];

//Textos
var texto1Frase1 = 'Uma bactéria tomou conta da cidade Quantium. Sua causa é';
var texto1Frase2 = 'desconhecida, mas acredita-se que começou a se espalhar';
var texto1Frase3 = 'após contaminar a água.';
var texto2Frase1 = 'As pessoas estão sendo infectadas e perdendo a capacidade';
var texto2Frase2 = 'de se comunicar. Precisaremos da sua ajuda. Para isso, você';
var texto2Frase3 = 'precisa criar um perfil nas redes sociais.';
var texto3Frase1 = 'Abaixo, escreva seu nome e escolha seu avatar.';
var texto4Frase1 = 'Você é ';
var texto4Frase2 = ' nos laboratórios Quantium. Como todo bom';
var texto4Frase3 = 'estagiário, estava trabalhando até tarde naquele dia.';
var texto5Frase1 = 'Recebeu uma notificação no seu smartphone e ficou ';
var texto5Frase2 = 'ao conferir suas redes sociais.';
var texto6Frase1 = 'Para iniciar a busca pelos componentes';
var texto6Frase2 = 'necessários para a fabricação do antibiótico, você precisa';
var texto6Frase3 = 'se comunicar com os moradores da cidade.';
var texto7Frase1 = 'Além disso, a biblioteca foi invadida por infectados. Seja';
var texto7Frase2 = ' ao usar a linguagem escolhida. Observe o relógio';
var texto7Frase3 = 'que indica a presença de zumbis no local.';
var texto8Frase1 = 'Vamos começar pela biblioteca. Clique na Amanda Luz em seu';
var texto8Frase2 = 'celular.'
var texto9Frase1 = 'Agora você precisa iniciar a conversa. Atenção, o tipo da';
var texto9Frase2 = 'linguagem utilizada deve estar de acordo com o perfil  de';
var texto9Frase3 = 'cada pessoa com quem você fala.';
var texto10Frase1 = 'Agora que você já sabe que a Amanda utiliza o internetês,';
var texto10Frase2 = 'inicie uma conversa escolhendo entre as opções disponíveis,';
var texto10Frase3 = 'apertando o botão "enviar" logo em seguida.'
var texto11Frase1 = 'Vamos começar!';
var texto12Frase1 = 'Você já conseguiu a fórmula para a fabricação do antídoto.';
var texto12Frase2 = 'Agora, vá ao hospital em busca dos leucócitos.';
var texto13Frase1 = 'O enfermeiro Baltazar Boaventura não está em nenhuma rede';
var texto13Frase2 = 'social e utiliza frequentemente a linguagem formal em seus';
var texto13Frase3 = 'diálogos.';
var texto14Frase1 = 'Nesse ambiente, a conversa deverá ser realizada passando';
var texto14Frase2 = 'as frases em internetês para a linguagem formal.';
var barraPiscando = '<span class="animado">|</span>';

function inicioJogo() {
	$('#balao').hide();

	$('#inicioP').append('Clique para começar')
	
	$('#inicioDiv').click(function(){
		gameInit = true;
		carregarJogo();
		$('#inicioDiv').hide();
	});
}

function carregarJogo() {
	document.getElementById('balao').style.display = 'block';
	
	criarDiv('texto1', true);
	document.getElementById('balao').appendChild(novaDiv);

	//Quando os zumbis atacam o ambiente
	localStorage.setItem("bibliotecaAtacada", false);

	timeout_handle = setTimeout(fraseCompleta, 8000);
}

function fraseCompleta() {
	acelerado = true;
	if(novaDiv.id == 'texto3' || novaDiv.id == 'texto8') {
		acelerar();
	}
	if(novaDiv.id == "texto6") {
		document.getElementById('main').style.webkitFilter = "brightness(100%)";
		document.getElementById('main').style.filter = "brightness(100%)";
	}
}

function carregarTexto2() {
	var antigaDiv = novaDiv;
	criarDiv('texto2', true);
	document.getElementById('balao').replaceChild(novaDiv, antigaDiv);

	timeout_handle = setTimeout(fraseCompleta, 11000);
}

function carregarTexto3() {
	document.getElementById('avatar').style.display = 'block';
	document.getElementById('nome_jogador').value = "";

	document.getElementById('form_avatar').addEventListener('submit', function(e) {
    	carregarMenu();
    	e.preventDefault();
	}, false);

	var antigaDiv = novaDiv;
	criarDiv('texto3', true);
	document.getElementById('balao').replaceChild(novaDiv, antigaDiv);

	timeout_handle = setTimeout(fraseCompleta, 3000);
}

function criarDiv(id, animado) {
	novaDiv = document.createElement('div');
	novaDiv.id = id;
	switch(id) {
		case 'texto1':
			if(animado) {
				texto = '<p class="animado">' + texto1Frase1 + '</p><p class="animado">' + texto1Frase2 + '</p><p class="animado">' + texto1Frase3 + barraPiscando + '</p>'; 		
			} else {
				texto = '<p>' + texto1Frase1 + '</p><p>' + texto1Frase2 + '</p><p>' + texto1Frase3 + barraPiscando + '</p>';
			}
			novaDiv.innerHTML = texto;
			break;
		case 'texto2':
			if(animado) {
				texto = '<p class="animado">' + texto2Frase1 + '</p><p class="animado">' + texto2Frase2 + '</p><p class="animado">' + texto2Frase3 + barraPiscando + '</p>'; 		
			} else {
				texto = '<p>' + texto2Frase1 + '</p><p>' + texto2Frase2 + '</p><p>' + texto2Frase3 + barraPiscando + '</p>';
			}
			novaDiv.innerHTML = texto;
			break;
		case 'texto3':
			if(animado) {
				texto = '<p class="animado">' + texto3Frase1 + barraPiscando + '</p>'; 		
			} else {
				texto = '<p>' + texto3Frase1 + barraPiscando + '</p>';
			}
			novaDiv.innerHTML = texto;
			break;
		case 'texto4':
			var texto4Palavra1;
			if(localStorage.getItem("generoJogador") == 'f') {
				texto4Palavra1 = 'estagiária';
			} else {
				texto4Palavra1 = 'estagiário';
			}
			if(animado) {
				texto = '<p class="animado">' + texto4Frase1 + texto4Palavra1 + texto4Frase2 + '</p><p class="animado">' + texto4Frase3 + barraPiscando + '</p>'; 		
			} else {
				texto = '<p>' + texto4Frase1 + texto4Palavra1 + texto4Frase2 + '</p><p>' + texto4Frase3 + barraPiscando + '</p>'; 
			}
			novaDiv.innerHTML = texto;
			break;
		case 'texto5':
			var texto5Palavra1;
			if(localStorage.getItem("generoJogador") == 'f') {
				texto5Palavra1 = 'surpresa';
			} else {
				texto5Palavra1 = 'surpreso';
			}
			if(animado) {
				texto = '<p class="animado">' + texto5Frase1 + texto5Palavra1 + '</p><p class="animado">' + texto5Frase2 + barraPiscando + '</p>'; 		
			} else {
				texto = '<p>' + texto5Frase1 + texto5Palavra1 + '</p><p>' + texto5Frase2 + barraPiscando + '</p>'; 
			}
			novaDiv.innerHTML = texto;
			break;
		case 'texto6':
			var nomeDoJogador = localStorage.getItem("nomeJogador");
			if(animado) {
				texto = '<p class="animado">Olá, ' + nomeDoJogador + '! ' + texto6Frase1 + '</p><p class="animado">' + texto6Frase2 + '</p><p class="animado">' + texto6Frase3 + barraPiscando + '</p>'; 		
			} else {
				texto = '<p>Olá, ' + nomeDoJogador + '! ' + texto6Frase1 + '</p><p>' + texto6Frase2 + '</p><p>' + texto6Frase3 + barraPiscando + '</p>';
			}
			novaDiv.innerHTML = texto;
			break;
		case 'texto7':
			var texto7Palavra1;
			if(localStorage.getItem("generoJogador") == 'f') {
				texto7Palavra1 = 'rápida';
			} else {
				texto7Palavra1 = 'rápido';
			}
			if(animado) {
				texto = '<p class="animado">' + texto7Frase1 + '</p><p class="animado">' + texto7Palavra1 + texto7Frase2 + '</p><p class="animado">' + texto7Frase3 + barraPiscando + '</p>'; 		
			} else {
				texto = '<p>' + texto7Frase1 + '</p><p>' + texto7Palavra1 + texto7Frase2 + '</p><p>' + texto7Frase3 + barraPiscando + '</p>'; 
			}
			novaDiv.innerHTML = texto;
			break;
		case 'texto8':
			if(animado) {
				texto = '<p class="animado">' + texto8Frase1 + '</p><p class="animado">' + texto8Frase2 + barraPiscando + '</p>'; 		
			} else {
				texto = '<p>' + texto8Frase1 + '</p><p>' + texto8Frase2 + barraPiscando + '</p>'; 
			}
			novaDiv.innerHTML = texto;
			break;
		case 'texto9':
			if(animado) {
				texto = '<p class="animado">' + texto9Frase1 + '</p><p class="animado">' + texto9Frase2 + '</p><p class="animado">' + texto9Frase3 + barraPiscando + '</p>'; 		
			} else {
				texto = '<p>' + texto9Frase1 + '</p><p>' + texto9Frase2 + '</p><p>' + texto9Frase3 + barraPiscando + '</p>';
			}
			novaDiv.innerHTML = texto;
			break;
		case 'texto10':
			if(animado) {
				texto = '<p class="animado">' + texto10Frase1 + '</p><p class="animado">' + texto10Frase2 + '</p><p class="animado">' + texto10Frase3 + barraPiscando + '</p>'; 		
			} else {
				texto = '<p>' + texto10Frase1 + '</p><p>' + texto10Frase2 + '</p><p>' + texto10Frase3 + barraPiscando + '</p>';
			}
			novaDiv.innerHTML = texto;
			break;
		case 'texto11':
			if(animado) {
				texto = '<p class="animado">' + texto11Frase1 + barraPiscando + '</p>'; 		
			} else {
				texto = '<p>' + texto11Frase1 + barraPiscando + '</p>';
			}
			novaDiv.innerHTML = texto;
			break;
		case 'texto12':
			if(animado) {
				texto = '<p class="animado">' + texto12Frase1 + '</p><p class="animado">' + texto12Frase2 + barraPiscando + '</p>'; 		
			} else {
				texto = '<p>' + texto12Frase1 + '</p><p>' + texto12Frase2 + barraPiscando + '</p>'; 
			}
			novaDiv.innerHTML = texto;
			break;
		case 'texto13':
			if(animado) {
				texto = '<p class="animado">' + texto13Frase1 + '</p><p class="animado">' + texto13Frase2 + '</p><p class="animado">' + texto13Frase3 + barraPiscando + '</p>'; 		
			} else {
				texto = '<p>' + texto13Frase1 + '</p><p>' + texto13Frase2 + '</p><p>' + texto13Frase3 + barraPiscando + '</p>';
			}
			novaDiv.innerHTML = texto;
			break;
		case 'texto14':
			if(animado) {
				texto = '<p class="animado">' + texto14Frase1 + '</p><p class="animado">' + texto14Frase2 + barraPiscando + '</p>'; 		
			} else {
				texto = '<p>' + texto14Frase1 + '</p><p>' + texto14Frase2 + barraPiscando + '</p>'; 
			}
			novaDiv.innerHTML = texto;
			break;
	}
}

function acelerar() {
	if(acelerado) {
		acelerado = false;
		switch(novaDiv.id) {
			case 'texto1':
				carregarTexto2();
				break;
			case 'texto2':
				carregarTexto3();
				break;
			case 'texto3':
				document.getElementById('botao_acelerar').style.display = 'none';
				break;
			case 'texto4':
				carregarImagemLaboratorio();
				break;
			case 'texto5':
				carregarTweets();
				break;
			case 'texto6':
				document.getElementById('main').style.webkitFilter = "brightness(100%)";
				document.getElementById('main').style.filter = "brightness(100%)";
				carregarTutorialContatos2();
				break;
			case 'texto7':
				carregarTutorialContatos3();
				break;
			case 'texto8':
				document.getElementById('botao_acelerar').style.display = 'none';
				break;
			case 'texto9':
				carregarTutorialBiblioteca2();
				break;
			case 'texto10':
				carregarTutorialBiblioteca3();
				break;
			case 'texto11':
				comecarJogo();
				break;
			case 'texto12':
				localStorage.setItem("primeiraVez", false);
				localStorage.setItem("bibliotecaAtacada", false);
				localStorage.setItem("hospitalDesbloqueado", true);
				window.location.href = 'contatos.html';
				break;
			case 'texto13':
				carregarTutorialHospital2();
				break;
			case 'texto14':
				document.getElementById('balao').style.display = 'none';
				break;
		}
	} else {
		acelerado = true;
		clearTimeout(timeout_handle);
		var antigaDiv = novaDiv;
		criarDiv(novaDiv.id, false);
		switch(novaDiv.id) {
			case 'texto4':
				document.getElementById('balao2').replaceChild(novaDiv, antigaDiv);
				break;
			case 'texto5':
				document.getElementById('balao3').replaceChild(novaDiv, antigaDiv);
				break;
			default:	
				document.getElementById('balao').replaceChild(novaDiv, antigaDiv);
		}
	}
}

function carregarMenu() {
	if(document.getElementById('nome_jogador').value == '') {
		document.getElementById('feedback_nomejogador').style.display = 'block';
	} else {
		var nome = document.getElementById('nome_jogador').value;
		localStorage.setItem("nomeJogador", nome);
		localStorage.setItem("avatar_selecionado", avatar_position);
		if(avatar_position == 0 || avatar_position == 1) {
			localStorage.setItem("generoJogador", "f");
		} else {
			localStorage.setItem("generoJogador", "m");
		}
		document.getElementById('feedback_nomejogador').style.display = 'none';
		document.getElementById('balao').style.display = 'none';
		document.getElementById('avatar').style.display = 'none';
		document.getElementById('menu').style.display = 'block';
	}
}

function carregarBalaoBotao(balao_id) {
	document.getElementById(balao_id).style.display = 'block';
}

function esconderBalaoBotao(balao_id) {
	document.getElementById(balao_id).style.display = 'none';
}

function carregarIntro2() 
{
	acelerado = false;
	document.getElementById('menu').style.display = 'none';
	document.getElementById('avatar_jogador_mapa').style.display = 'block';
	document.getElementById('avatar_jogador').src = avatar_imagens[avatar_position];
	document.getElementById('balao2').style.display = 'block';
	criarDiv('texto4', true);
	document.getElementById('balao2').appendChild(novaDiv);
	
	timeout_handle = setTimeout(fraseCompleta, 6000);
}

function carregarImagemLaboratorio() {
	document.getElementById('balao2').style.display = 'none';
	document.getElementById('imagem_laboratorio').style.display = 'block';
	criarDiv('texto5', true);
	document.getElementById('balao3').appendChild(novaDiv);

	timeout_handle = setTimeout(fraseCompleta, 6000);
}

function carregarTweets () {
	document.getElementById('imagem_laboratorio').style.display = 'none';
	document.getElementById('balao3').style.display = 'none';

	//Variáveis referentes à tela de contatos
	localStorage.setItem("primeiraVez", true);
	localStorage.setItem("hospitalDesbloqueado", false);

	//Carregando os tweets
	tweets = ['tweet1', 'tweet2', 'tweet3', 'tweet4', 'tweet5', 'tweet6', 'tweet7', 'tweet8', 'tweet9'];
	for(i = 0; i < tweets.length; i++) {
	doSetTimeOut(i);	
	}
	setTimeout(carregarContatos, 8500);
}

function doSetTimeOut(i) {
	var j = i+1;
	setTimeout(function() {document.getElementById(tweets[i]).style.display = 'block';}, j * 700);
}

function carregarContatos() {
	document.getElementById('tweets').style.display = 'none';
	document.getElementById('avatar_jogador_mapa').style.display = 'none';
	window.location.href = 'contatos.html';
}

function carregarTutorialContatos1() {
	document.getElementById('avatar_selecionado').style.backgroundImage = 'url("' + avatar_icons[localStorage.getItem('avatar_selecionado')] + '")';
	var i = localStorage.getItem("primeiraVez");
	if(i == 'true') {
		document.getElementById('balao').style.display = 'block';
		document.getElementById('main').style.webkitFilter = "brightness(30%)";
		document.getElementById('main').style.filter = "brightness(30%)";
		$("#contato1").addClass("contatoDestacado");
		document.getElementById('contato1').onclick = null;
		criarDiv('texto6', true);
		document.getElementById('balao').appendChild(novaDiv);

		timeout_handle = setTimeout(fraseCompleta, 11000);
	}
	var j = localStorage.getItem("hospitalDesbloqueado");
	if(j == 'true') {
		$("#contato2").addClass("contatoDestacado");
		document.getElementById("contato2").addEventListener("click", carregarExercicioHospital);
	}
}

function carregarTutorialContatos2() {
	var antigaDiv = novaDiv;
	criarDiv('texto7', true);
	document.getElementById('balao').replaceChild(novaDiv, antigaDiv);
	document.getElementById('termometro').style.display = 'none';
	document.getElementById('termometro_highlight').style.display = 'block';

	timeout_handle = setTimeout(fraseCompleta, 4000);
}

function carregarTutorialContatos3() {
	document.getElementById('instrucao1').style.display = 'block';
	var antigaDiv = novaDiv;
	criarDiv('texto8', true);
	document.getElementById('balao').replaceChild(novaDiv, antigaDiv);
	document.getElementById('contato1').onclick = carregarExercicio;
	document.getElementById('termometro_highlight').style.display = 'none';
	document.getElementById('termometro').style.display = 'block';

	timeout_handle = setTimeout(fraseCompleta, 4000);
}

function carregarExercicio() {
	window.location.href = 'laboratorio.html';
}

function voltarTelaContatos() {
	localStorage.setItem("primeiraVez", false);
	//localStorage.setItem("primeiraVez", false);
	window.location.href = 'contatos.html';
}

function setaEsquerdaClicked() {
	if(avatar_position != 0) {
		--avatar_position;
		var url = 'url("' + avatar_imagens[avatar_position] + '")';
		document.getElementById('avatar_imagem').style.backgroundImage = url;
	}
}

function setaDireitaClicked() {
	if(avatar_position < 3) {
		++avatar_position;
		var url = 'url("' + avatar_imagens[avatar_position] + '")';
		document.getElementById('avatar_imagem').style.backgroundImage = url;
	}
}

function carregarTutorialBiblioteca1() {
	document.getElementById('avatar_selecionado').style.backgroundImage = 'url("' + avatar_icons[localStorage.getItem('avatar_selecionado')] + '")';
	var i = localStorage.getItem("primeiraVez");
	var j = localStorage.getItem("bibliotecaAtacada");
	if(i == 'true') {
		document.getElementById('balao').style.display = 'block';
		document.getElementById('instrucao2').style.display = 'block';
		document.getElementById('btn_voltar').onclick = null;
		criarDiv('texto9', true);
		document.getElementById('balao').appendChild(novaDiv);

		timeout_handle = setTimeout(fraseCompleta, 11000);
	} else {
		if(j == 'true') {
			document.getElementById('celular_mensagens').style.display = 'none';
			document.getElementById('divbuttons').style.display = 'none';
			desconectar();
			carregarFraseFinalBiblioteca();
		} else {
			document.getElementById('transparente').remove()
		}
	}
}

function carregarTutorialBiblioteca2() {
	var i = localStorage.getItem("primeiraVez");
	if(i == 'true') {
		document.getElementById('instrucao2').style.display = 'none';
		document.getElementById('instrucao3').style.display = 'block';
		var antigaDiv = novaDiv;
		criarDiv('texto10', true);
		document.getElementById('balao').replaceChild(novaDiv, antigaDiv);

		timeout_handle = setTimeout(fraseCompleta, 12000);
	}
}

function carregarTutorialBiblioteca3() {
	document.getElementById('instrucao3').style.display = 'none';
	document.getElementById('instrucao4').style.display = 'block';
	var antigaDiv = novaDiv;
	criarDiv('texto11', true);
	document.getElementById('balao').replaceChild(novaDiv, antigaDiv);

	timeout_handle = setTimeout(fraseCompleta, 2000);
}

function comecarJogo() {
	document.getElementById('instrucao4').style.display = 'none';
	document.getElementById('balao').style.display = 'none';
	document.getElementById('btn_voltar').onclick = voltarTelaContatos;
	if(localStorage.getItem('primeiraVez') == 'true') {
		document.getElementById('transparente').remove();
	}
}

function carregarAvatarSelecionado() {
	document.getElementById('avatar_selecionado').style.backgroundImage = 'url("' + avatar_icons[localStorage.getItem('avatar_selecionado')] + '")';
}

function carregarExercicioHospital() {
	window.location.href = 'hospital.html';
}

function carregarFraseFinalBiblioteca(){
	document.getElementById('balao').style.display = 'block';
	criarDiv('texto12', true);
	document.getElementById('balao').appendChild(novaDiv);

	timeout_handle = setTimeout(fraseCompleta, 2000);
}

function iniciarExercicioHospital() {
	carregarAvatarSelecionado();
	carregarTutorialHospital();
}

function carregarTutorialHospital() {
	document.getElementById('balao').style.display = 'block';
	criarDiv('texto13', true);
	document.getElementById('balao').appendChild(novaDiv);

	timeout_handle = setTimeout(fraseCompleta, 2000);
}

function carregarTutorialHospital2() {
	var antigaDiv = novaDiv;
	criarDiv('texto14', true);
	document.getElementById('balao').replaceChild(novaDiv, antigaDiv);

	timeout_handle = setTimeout(fraseCompleta, 2000);
}