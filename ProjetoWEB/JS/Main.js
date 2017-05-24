function mostrarLista1(){
	$("#lista1").css("visibility", "visible");
}
function mostrarLista2(){
	$("#lista2").css("visibility", "visible");
}
function mostrarLista3(){
	$("#lista3").css("visibility", "visible");
}
function mostrarLista4(){
	$("#lista4").css("visibility", "visible");
}

$("#botao1").click(function(){
			if($("#botao1").text() == "Ver Mais"){
				$("#plano1").animate({height: "450px"}, 1000);
				$("#botao1").text("Ver Menos");
				$("#corpo .col-md-2 #divBotao1").css("right", "25%");
				setTimeout(mostrarLista1, 500);
			}else{
				$("#plano1").animate({height: "300px"}, 1000);
				$("#botao1").text("Ver Mais");
				$("#corpo .col-md-2 #divBotao1").css("right", "29%");
				$("#lista1").css("visibility", "hidden");
			}
});
$("#botao2").click(function(){
			if($("#botao2").text() == "Ver Mais"){
				$("#plano2").animate({height: "450px"}, 1000);
				$("#botao2").text("Ver Menos");
				$("#corpo .col-md-2 #divBotao2").css("right", "25%");
				setTimeout(mostrarLista2, 500);		
			}else{
				$("#plano2").animate({height: "300px"}, 1000);
				$("#botao2").text("Ver Mais");
				$("#corpo .col-md-2 #divBotao2").css("right", "29%");
				$("#lista2").css("visibility", "hidden");
			}
});
$("#botao3").click(function(){
			if($("#botao3").text() == "Ver Mais"){
				$("#plano3").animate({height: "450px"}, 1000);
				$("#botao3").text("Ver Menos");
				$("#corpo .col-md-2 #divBotao3").css("right", "25%");
				setTimeout(mostrarLista3, 600);		
			}else{
				$("#plano3").animate({height: "300px"}, 1000);
				$("#botao3").text("Ver Mais");
				$("#corpo .col-md-2 #divBotao3").css("right", "29%");
				$("#lista3").css("visibility", "hidden");
			}
});
$("#botao4").click(function(){
			if($("#botao4").text() == "Ver Mais"){
				$("#plano4").animate({height: "450px"}, 1000);
				$("#botao4").text("Ver Menos");
				$("#corpo .col-md-2 #divBotao4").css("right", "25%");
				setTimeout(mostrarLista4, 650);			
			}else{
				$("#plano4").animate({height: "300px"}, 1000);
				$("#botao4").text("Ver Mais");
				$("#corpo .col-md-2 #divBotao4").css("right", "29%");
				$("#lista4").css("visibility", "hidden");
			}
});