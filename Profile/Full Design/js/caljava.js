var input_number=document.getElementById("result");
var b;
/*if (one1.clicked==true)
	{
			b=1;
	}
	else if (two2.clicked==true)
	{
		b=b+1;
	}*/
	
function one(){
	"use strict";
	var a=1;
	input_number.value=a;
	return input_number;
}
function two(){
	"use strict";
	var a=2;
	input_number.value=a;
	return input_number;
}
function three(){
	"use strict";
	var a=3;
	input_number.value=input_number.value+a;
	return input_number;
}
function four(){
	"use strict";
	var a=4;
	input_number.value=input_number.value+a;
	return input_number;
}
function five(){
	"use strict";
	var a=5;
	input_number.value=input_number.value+a;
	return input_number;
}
function six(){
	"use strict";
	var a=6;
	input_number.value=input_number.value+a;
	return input_number;
}
function seven(){
	"use strict";
	var a=7;
	input_number.value=input_number.value+a;
	return input_number;
}
function eight(){
	"use strict";
	var a=8;
	input_number.value=input_number.value+a;
	return input_number;
}
function nine(){
	"use strict";
	var a=9;
	input_number.value=input_number.value+a;
	return input_number;
}
function zero(){
	"use strict";
	var a=0;
	input_number.value=input_number.value+a;
	return input_number;
}

function plus(){
	"use strict";
	var a=0;
	a=a+input_number.value;
	return a;
}
function minus(){
	"use strict";
	var a="-";
	input_number.value=input_number.value+a;
	return input_number;
}
function multiply(){
	"use strict";
	var a="*";
	input_number.value=input_number.value+a;
	return input_number;
}
function devide(){
	"use strict";
	var a="/";
	input_number.value=input_number.value+a;
	return input_number;
}
function modee(){
	"use strict";
	var a="%";
	input_number.value=input_number.value+a;
	return input_number;
}
function exponantee(){
	"use strict";
	var a="e";
	input_number.value=input_number.value+a;
	return input_number;
}
function logee(){
	"use strict";
	var a="log";
	input_number.value=input_number.value+a;
	return input_number;
}
function lnee(){
	"use strict";
	var a="ln";
	input_number.value=input_number.value+a;
	return input_number;
}

function dot(){
	"use strict";
	var a=".";
	input_number.value=input_number.value+a;
	return input_number;
}
function c(){
	"use strict";
	var a="";
	input_number.value=a;
	return input_number;
}

function final_result(){
	"use strict";
	 
	if (plus.clicked==true)
	{
		var x=plus();
		input_number.value=x;
	}
	return x;
}


