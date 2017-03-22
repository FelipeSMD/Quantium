var estadoInv = false;
var imagemAberta = false;

document.getElementById("nomeJogadorInv").innerHTML = localStorage.getItem("nomeJogador");

function abreFechaInventario(){
    if(estadoInv == false){
        document.getElementById('telaInventario').style.display = "block";
        atualizaInv();
        estadoInv = true;
    }else{
        document.getElementById('telaInventario').style.display = "none";
        estadoInv = false;
    }
}
//localStorage.setItem("atualLiberado", 0);


document.getElementById('personagemEscolhido').src = avatar_imagens[localStorage.getItem('avatar_selecionado')];

generoJogador();
function generoJogador(){
	if(localStorage.getItem("generoJogador")=="m"){
		document.getElementById("generoJogadorInv").innerHTML = "estagiário nos \nlaboratórios Quantium";
	}else if (localStorage.getItem("generoJogador")=="f"){
		document.getElementById("generoJogadorInv").innerHTML = "estagiária nos \nlaboratórios Quantium";
	}
}


//mudaImagem("livroPequeno");
function mudaImagem(caminho){
    if(imagemAberta == false){
        document.getElementById('boxImagemCentral').style.display = "block";
        document.getElementById("imagemCentral").src = "imagens/"+caminho+".png";
        imagemAberta = true;
    }else{
        document.getElementById('boxImagemCentral').style.display = "none";
        imagemAberta = false;
    }
}

function atualizaInv(){
    if (localStorage.getItem("atualLiberado")==1) {
        document.getElementById("miniatura1").style.display = "block";
        console.log("duahsu");
    }else if (localStorage.getItem("atualLiberado")==2){
        console.log("duahsu");
        document.getElementById("miniatura1").style.display = "block";
        document.getElementById("miniatura2").style.display = "block";
    }
}