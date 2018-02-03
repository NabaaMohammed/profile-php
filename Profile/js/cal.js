//loading-overlay
$(window).load(function()
	{
		$(".loading-overlay").fadeOut(4000);
	});
//calculater
	function equal(){
		"use strict"
		var firstNumber=document.getElementById("txtnum1") ,
			secondNumber=document.getElementById("txtnum2") ,
			result=document.getElementById("txtresult") ,
		    selectElement = document.getElementById('select'),
		    index = selectElement.selectedIndex;
			if(isNaN(firstNumber.value)||isNaN(secondNumber.value)){alert("please you must enter number only")}
		 
		 if(index==0){result.value=Number.parseInt(firstNumber.value)+Number.parseInt(secondNumber.value);}
		else if(index==1){result.value=firstNumber.value-secondNumber.value;}
		else if(index==2){result.value=firstNumber.value*secondNumber.value;}
		else if(index==3){result.value=firstNumber.value/secondNumber.value;}
		else if(index==4){result.value=firstNumber.value%secondNumber.value;}
		else{alert("please select operator")}
	}
	 
	//simple play child
	function play(playing)
	{
		"use strict"
		var spell=document.getElementById("color_spell") ,
		     	
			selectElementPlay = document.getElementById('playchild'),
		    indexPlay = selectElementPlay.selectedIndex;
             
			spell.value = (spell.value.toLowerCase());
		 if( indexPlay==0)
		    {
					if(spell.value=="red")
					{
 					  alert("perfect you are clever child");
					  var myElement = document.querySelector(".playing");
				      myElement.style.backgroundColor = "red";
				    }
					else
					{
					  alert("opps please try again");
					}
			
	        }
		 if( indexPlay==1)
		    {
					if(spell.value=="green")
					{
 					  alert("perfect you are clever child");
					  var myElement = document.querySelector(".playing");
				      myElement.style.backgroundColor = "green";
				    }
					else
					{
					  alert("opps please try again");
					}
			
	        }
			if( indexPlay==2)
		    {
					if(spell.value=="blue")
					{
 					  alert("perfect you are clever child");
					  var myElement = document.querySelector(".playing");
				      myElement.style.backgroundColor = "blue";
				    }
					else
					{
					  alert("opps please try again");
					}
			
	        }
			if( indexPlay==3)
		    {
					if(spell.value=="orange")
					{
 					  alert("perfect you are clever child");
					  var myElement = document.querySelector(".playing");
				      myElement.style.backgroundColor = "orange";
				    }
					else
					{
					  alert("opps please try again");
					}
			
	        }
			if( indexPlay==4)
		    {
					if(spell.value=="yellow")
					{
 					  alert("perfect you are clever child");
					  var myElement = document.querySelector(".playing");
				      myElement.style.backgroundColor = "yellow";
				    }
					else
					{
					  alert("opps please try again");
					}
			
	        }
	}		
	//quize
	/*function exam(){
		"use strict"
		var selectElement4 = document.getElementById('select3'),
		    index4 = selectElement4.selectedIndex,
			
			selectElement1 = document.getElementById('select1'),
		    index1 = selectElement1.selectedIndex,
			
			selectElement2 = document.getElementById('select2'),
		    index2 = selectElement2.selectedIndex,
			
			selectElement3 = document.getElementById('select3'),
		    index3 = selectElement3.selectedIndex,
			mark=0;
			
			for(var i=0;i<5;i++){
				if (index4==0||index1==0||index2==2||index3==1){ 
			 
	mark++;}
			alert(mark)}
	 }*/