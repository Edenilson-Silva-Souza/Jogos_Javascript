var draws = new PositionsObjs(30,150, 840,150, 420,210);//Instância da classe PositionsObjs, temos aqui um instanciamento de um objeto.
var defSize = new SizeObjs(30,150,30,150,30,30);
let img = new Image(); img2 = new Image();
img.src="img/BarraSeparador.png";
img2.src="img/Boll.png";
function PositionsObjs(barraOneX, barraOneY, barraTwoX, barraTwoY, bollX,bollY){
	this.barraOneX = barraOneX;
	this.barraOneY = barraOneY;
	this.barraTwoX = barraTwoX;
	this.barraTwoY = barraTwoY;
	
	this.bollX = bollX;
	this.bollY = bollY;	
}
function SizeObjs(barraOneW, barraOneH, barraTwoW, barraTwoH, bollW,bollH){
	this.barraOneW = barraOneW;
	this.barraOneH = barraOneH;
	this.barraTwoW = barraTwoW;
	this.barraTwoH = barraTwoH;
	
	this.bollW = bollW;
	this.bollH = bollH;	
}
function drawObs()
{
	let screen = document.getElementById('drawGame');
	let contexto = screen.getContext('2d');
		contexto.clearRect(0,0,900,450);
		//Fiz uma adaptação :). depois eu arrumo :)
		contexto.drawImage(img,420,0);
		//###
		
		contexto.fillStyle="black";
		contexto.fillRect(draws.barraOneX,draws.barraOneY,defSize.barraOneW,defSize.barraOneH);
		contexto.fillRect(draws.barraTwoX,draws.barraTwoY,defSize.barraTwoW,defSize.barraTwoH);
	
		contexto.drawImage(img2,draws.bollX,draws.bollY);

		
}

var PAUSE = true;
function acionador(){
	if(PAUSE){
		PAUSE = false;
	}
	else{
		 PAUSE = true;
	}
	atualizar();
}
function atualizar()
{
	if(PAUSE){
		return false;
	}
	//Análise bola 'Colid' parede laterais.
	if(draws.bollY<=0){
		draws.bollY=0;
		directBollY='Down';
		play();
		
	}
	if(draws.bollY>=420){
		directBollY='Up';
		play();
	}
	// Análise bola quando passar da barra eixo x.
	if(draws.bollX<=-30){
		draws.bollY=210;
		draws.bollX=420;
		document.getElementById("Person2").value++;
		directBollX='Esq';
		ponto();
	}
	if(draws.bollX>=900){
		draws.bollY=210;
		draws.bollX=420;
		directBollX='Dir';
		document.getElementById("Person1").value++;
		ponto();
	}
	
	//Colide com o barraOneA.
	if(draws.barraOneX+30>=draws.bollX&&draws.barraOneX+30<=draws.bollX && draws.bollY+30>=draws.barraOneY&&draws.bollY<=draws.barraOneY+150){
		directBollX='Dir';
		play();
	}
	
	//Colide com o barraOneA.
	if(draws.bollX+30>=draws.barraOneX&&draws.bollX<=draws.barraOneX && draws.bollY+30>=draws.barraOneY&&draws.bollY<=draws.barraOneY+150){
		directBollY='Down';
		play();
	}
	//Colide com o barraOneA.  
	 if(draws.bollX+30>=draws.barraOneX&&draws.bollX<=draws.barraOneX && draws.bollY+30>=draws.barraOneY&&draws.bollY+30<=draws.barraOneY+150){
		directBollY='Up';
		play();
	}

	
	//Colide com o barraTwoB. 
	if(draws.barraTwoX>=draws.bollX+30&&draws.barraTwoX<=draws.bollX+30  && draws.bollY+30>=draws.barraTwoY&&draws.bollY<=draws.barraTwoY+150){
		directBollX='Esq';
		play();
	}
	
	 //Colide com o barraTwoB. 
	if(draws.bollX+30>draws.barraTwoX&&draws.bollX<=draws.barraTwoX && draws.bollY+30>=draws.barraTwoY&&draws.bollY<=draws.barraTwoY+150){
		directBollY='Down';
		play();
	}
	//Colide com o barraTwoB.
	if(draws.bollX+30>draws.barraTwoX&&draws.bollX<=draws.barraTwoX && draws.bollY+30>=draws.barraTwoY&&draws.bollY+30<=draws.barraTwoY+150){
		directBollY='Up';
		play();
	}
	//Directions da bola
	if(directBollX=='Esq'){
		draws.bollX -= 15;
	}
	if(directBollY=='Up'){
		draws.bollY -= 15;
	}
	if(directBollY=='Down'){
		draws.bollY += 15;
	}
	if(directBollX=='Dir'){ 
		draws.bollX += 15;
	}
	aumetSpeed()
	drawObs();
	var loops = setTimeout(function(){atualizar();},speed);
}
var speed=120;
var etapas=0;
function aumetSpeed(){
	if(speed>=10){
		speed -=0.2;
	}
	else{
		etapas+=0.2;
		if(etapas>120){
			speed=120;
			etapas=0;
		}
	}
}







var directBollX = 'Esq';
var directBollY = 'Up';
//Este objeto, faz com que a bola desvie em direção a barra do jogador
var ObjBoll = 
{
	metodDirectionBoll:function()
	{
		//Barra 1. Coloquei de forma explicita os 30 e 150 da largura e altura, pois é mais fácil visualizar :). Você pode trocar 30 e 150 usando uma chamada ao objeto 'SizeObjs.barraOneW' ou 'SizeObjs.barraOneH'
		if(draws.barraOneX+30>=draws.bollX&&draws.barraOneX+30<=draws.bollX && draws.bollY+30>=draws.barraOneY&&draws.bollY<=draws.barraOneY+150)
		{
		directBollX='Dir';
		directBollY='Up';
		}
		if(draws.barraOneX+30>=draws.bollX&&draws.barraOneX+30<=draws.bollX && draws.bollY+30>=draws.barraOneY&&draws.bollY<=draws.barraOneY+150)
		{
		directBollX='Dir';
		directBollY='Down';
		}
		
		//Barra 2
		if(draws.barraTwoX>=draws.bollX+30&&draws.barraTwoX<=draws.bollX+30  && draws.bollY+30>=draws.barraTwoY&&draws.bollY<=draws.barraTwoY+150)
		{
		directBollX='Esq';
		directBollY='Up';
		}
		if(draws.barraTwoX>=draws.bollX+30&&draws.barraTwoX<=draws.bollX+30  && draws.bollY+30>=draws.barraTwoY&&draws.bollY<=draws.barraTwoY+150)
		{
		directBollX='Esq';
		directBollY='Down';
		}
	}
}






function teclas(){
	t=event.key;
	t = t.toLowerCase();
	
	switch(true){
		case t=='w' && draws.barraOneY>0:
			barraOneA();
			ObjBoll.metodDirectionBoll();
		break;
		case t=='s' && draws.barraOneY+150<450:
			barraOneB();
			ObjBoll.metodDirectionBoll();
		break;
		case t=='i' && draws.barraTwoY>0:
			barraTwoA();
			ObjBoll.metodDirectionBoll();
		break;
		case t=='k' && draws.barraTwoY+150<450:
			barraTwoB();
			ObjBoll.metodDirectionBoll();
		break;
		case t == 'p':
			acionador();
	}
}

function barraOneA(){
	draws.barraOneY -= 30;
	drawObs();
}
function barraOneB(){
	draws.barraOneY += 30;
	drawObs();
}

function barraTwoA(){
	draws.barraTwoY -= 30;
	drawObs();
}
function barraTwoB(){
	draws.barraTwoY += 30;
	drawObs();
}


var hist =[
	[],
	[]
];

function restart(){
	draws.barraOneX = 30;
	draws.barraOneY = draws.barraTwoY = 150;
	draws.barraTwoX = 840;
	
	draws.bollX = 420;
	draws.bollY = 210;	
	
	hist[0].push(document.getElementById("Person1").value);
	hist[1].push(document.getElementById("Person2").value);
	
	document.getElementById("Person1").value="0";
	document.getElementById("Person2").value="0";
	PAUSE = true;
	drawObs();
}

function historic(){
	scores ="";
	for(y=0;hist[0][y];y++){
			scores +=y+1+"ª Rodada\n"+"Meu placar "+hist[0][y];
			scores +=" : Placar adversário "+hist[1][y]+"\n";
			scores +="\n";
		}
		
		if(scores==""){
			return alert("Sem placar");
		}
		alert(scores);		
}

function play(){
	document.getElementById("pongSound").currentTime=0;
	document.getElementById("pongSound").play();
}

function ponto(){
	document.getElementById("pontoSound").currentTime=0;
	document.getElementById("pontoSound").play();
	whoWin();
}

function whoWin(){

	if(parseInt(document.getElementById("Person1").value)>=10 || parseInt(document.getElementById("Person2").value)>=10){
		
	hist[0].push(document.getElementById("Person1").value);
	hist[1].push(document.getElementById("Person2").value);
	
	document.getElementById("Person1").value="0";
	document.getElementById("Person2").value="0";
	}
}