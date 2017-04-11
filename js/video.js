var alpha = 1;
var alpha2 = 0;

function iniciarConf(){
	$('#telaAceitar').hide();
	$('#videoConf1').show();

	setTimeout(carregarConf2, 3000);
}

function avatarVideo(){
	document.getElementById('gambiarra').src = avatar_icons[localStorage.getItem('gambiarra')];
}

function carregarConf2(){
	$('#videoConf1').hide();

	$('#videoConf2').show();
	$("#livro_biblioteca").elevateZoom({
  		zoomType: "inner",
  		cursor: "crosshair"
	});

	$('#printButton').click(function(){
		$('#printEffect').show();
		apagarEfeito();
	});
}

/*$( function() {
    $("#videoConf2").draggable({
    drag: function(event, ui) {
    	var topimg = ui.helper.parent().height() - 317;
        if (ui.position.top > topimg) {
            ui.position.top = topimg;
        }
        var maxtop = ui.helper.parent().height() - ui.helper.height();
        if ( ui.position.top < maxtop) {
            ui.position.top = maxtop;
        }
        if ( ui.position.left > 0) {
            ui.position.left = 0;
        }
        var maxleft = ui.helper.parent().width() - ui.helper.width();
        if ( ui.position.left < maxleft) {
            ui.position.left = maxleft;
        }
    }
});

  } );*/

function apagarEfeito(){	
	//console.log("12312312321313");
	$('#printEffect').css("opacity", alpha);
	alpha -= 0.05;
	if(alpha > 0){
		setTimeout(apagarEfeito, 20);	
	}
	else{		
		alpha = 1;
		$('#printEffect').hide();
		setTimeout(fadeoutFunction, 1000);	
	}
}

function fadeoutFunction(){
	$('#printEffect2').show();
	$('#printEffect2').css("opacity", alpha2);
	alpha2 += 0.008;
	if(alpha2 < 1){
		setTimeout(fadeoutFunction, 20);	
	}
	else
	{
		setTimeout(imagemZumbi, 2000);
	}
}

function imagemZumbi(){	
	$('#livro_biblioteca').hide();
	$('#print_biblioteca').hide();
	$('#printButton').hide();

	$('#videoConf3').show();

	$('#printEffect2').css("opacity", alpha2);
	alpha2 -= 0.05;
	if(alpha2 > 0){
		setTimeout(imagemZumbi, 20);	
	}
	else
	{	
		//console.log("12312321");
		alpha2 = 0;
		$('#videoConf4').show();
		setTimeout(susto, 2000);
	}
}

function susto(){
	$('#videoConf4').css("opacity", alpha2);
	alpha2 += 0.05;
	if(alpha2 < 1){
		setTimeout(susto, 20);	
	}
	else
	{
		setTimeout(chiado, 1000);	
	}
}

function chiado(){
	$('#videoConf5').show();

	$('#videoConf4').hide();
	$('#videoConf3').hide();

	setTimeout(fraseFinal, 2000);
}

function fraseFinal(){
	localStorage.setItem("bibliotecaAtacada", true);
	localStorage.setItem("primeiraVez", false);
	localStorage.setItem("atualLiberado", 1);
	window.location.href = 'laboratorio.html';
}