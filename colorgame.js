//var colors=["aqua","blue","red","yellow","green","orange"];
var numberofsqaures = 6;
var colors = generateColor(numberofsqaures);
var squares = document.querySelectorAll(".square");
var pickedcolor=colorpick();
var colordisplay = document.getElementById("colordisplay");
var message=document.querySelector("#message");
var newcolors = document.querySelector("#newcolors");
var h1 = document.querySelector("h1");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
colordisplay.textContent=pickedcolor;
for(var i=0;i<squares.length;i++){
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
		var clicked = this.style.background;
		if(clicked === pickedcolor){
			message.textContent="Correct";
			newcolors.textContent="Play Again!";
			changecolor(clicked);
			h1.style.background=clicked;
		}
		else{
			this.style.background="#232323";
			message.textContent="Try Again";

		}
	})
}
function changecolor(clicked){
	for(var i=0;i<squares.length;i++){
					squares[i].style.background= clicked;
	
	}
	//return 0;
}
function colorpick(){
	return colors[Math.floor((Math.random()*colors.length))];
}
function generateColor(num){
	var arr=[];
	for(i=0;i<num;i++){
		arr.push(randomcolor());
	}
	return arr;
}
function randomcolor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
newcolors.addEventListener("click",function(){
	hard.classList.remove("selected");
	easy.classList.remove("selected");
	newcolors.textContent="New Colors";
	message.textContent="";
	h1.style.background="#232323";
	colors=generateColor(numberofsqaures);
	for(var i=0;i<colors.length;i++){
		squares[i].style.background=colors[i];
	}	
	pickedcolor=colorpick();
	colordisplay.textContent=pickedcolor;
})
easy.addEventListener("click",function(){
	numberofsqaures=3;
	easy.classList.add("selected");
	hard.classList.remove("selected");
	colors = generateColor(numberofsqaures);
	for(var i=0;i<6;i++){
		if(i<3){
			squares[i].style.background = colors[i];
		}	
		else{
			squares[i].style.background="none";
		}
	}
	pickedcolor = colorpick();
	colordisplay.textContent=pickedcolor;

})
hard.addEventListener("click",function(){
	numberofsqaures=6;
	hard.classList.add("selected");
	easy.classList.remove("selected");

	colors=generateColor(numberofsqaures);
	for(var i=0;i<colors.length;i++){
		squares[i].style.background=colors[i];
	}	
	pickedcolor=colorpick();
	colordisplay.textContent=pickedcolor;
})
