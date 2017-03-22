var inicio = true;
var tweets;

function carregarJogo() {
	var div = document.createElement('div');
	div.id = 'novoElemento';
	div.innerHTML = '<p>Uma bactéria tomou conta da cidade Quantium. Sua causa</p><p>é desconhecida, mas acredita-se que começou a se espalhar</p><p>após contaminar a água<span>|</span></p>';
	document.getElementById('balao').appendChild(div);

	setTimeout(carregarTexto2, 15000);
}

function carregarTexto2() {
	var child = document.getElementById('novoElemento');
	var div2 = document.createElement('div2');
	div2.id = 'novoElemento2';
	div2.innerHTML = '<p>As pessoas estão sendo infectadas e perdendo a capacidade</p><p>de se comunicar. Precisaremos da sua ajuda. Para isso, você</p><p>precisa criar um perfil nas redes sociais<span>|</span></p>';
	document.getElementById('balao').replaceChild(div2, child);

	setTimeout(carregarTexto3, 16000);
}

function carregarTexto3() {
	document.getElementById('avatar').style.display = 'block';
	var child = document.getElementById('novoElemento2'); 
	var div3 = document.createElement('div3');
	div3.innerHTML = '<p>Escreva seu nome e faça seu perfil abaixo. Escolha também</p><p>um avatar para lhe representar<span>|</span></p>';
	document.getElementById('balao').replaceChild(div3, child);

	//setTimeout(carregarAvatar, 7000);
}

function carregarAvatar() {
	if(inicio) {
		document.getElementById('avatar').style.display = 'block';
		inicio = false;
	}
}


function showAvatar(avatarAtual, avatarAntigo, nomeJogador) {
	document.getElementById(nomeJogador).value = "";
	document.getElementById(avatarAntigo).style.display = 'none';
	document.getElementById(avatarAtual).style.display = 'block';
}

function carregarIntro2() 
{
	document.getElementById('balao').style.display = 'none';
	document.getElementById('avatar').style.display = 'none';
	document.getElementById('avatar_selecionado').style.display = 'block';
	document.getElementById('balao2').style.display = 'block';
	if(document.getElementById('masculino').checked == true) {
		document.getElementById('avatar2_menor').style.display = 'none';
		document.getElementById('avatar1_menor').style.display = 'block';
	} else {
		document.getElementById('avatar1_menor').style.display = 'none';
		document.getElementById('avatar2_menor').style.display = 'block';
	}
	var div = document.createElement('div');
	div.id = 'novoElementoBalao2';
	div.innerHTML = '<p>Você é estagiário nos laboratórios Quantium. Como todo</p><p>bom estagiário, estava trabalhando até tarde naquele dia<span>|</span></p>';
	document.getElementById('balao2').appendChild(div);
	
	setTimeout(carregarImagemLaboratorio, 11000);
    //window.location.href = "http://www.google.com";
}

function carregarImagemLaboratorio() {
	document.getElementById('balao2').style.display = 'none';
	document.getElementById('imagem_laboratorio').style.display = 'block';
	var div = document.createElement('div');
	div.id = 'novoElementoBalao3';
	div.innerHTML = '<p>Recebeu uma notificação no seu smartphone e ficou surpreso</p><p>ao conferir suas redes sociais<span>|</span></p>';
	document.getElementById('balao3').appendChild(div);

	setTimeout(carregarTweets, 10000);
}

function carregarTweets () {
	document.getElementById('imagem_laboratorio').style.display = 'none';
	document.getElementById('balao3').style.display = 'none';
	tweets = ['tweet1', 'tweet2', 'tweet3', 'tweet4', 'tweet5', 'tweet6', 'tweet7', 'tweet8', 'tweet9'];
	for(i = 0; i < tweets.length; i++) {
		//window.alert(tweets[i]);
		doSetTimeOut(i);	
	}
	setTimeout(carregarMenu, 11000);
}

function doSetTimeOut(i) {
	var j = i+1;
	setTimeout(function() {document.getElementById(tweets[i]).style.display = 'block';}, j * 1000);
}

function carregarMenu() {
	document.getElementById('tweets').style.display = 'none';
	document.getElementById('avatar_selecionado').style.display = 'none';
	document.getElementById('menu').style.display = 'block';
}