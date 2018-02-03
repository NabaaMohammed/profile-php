var markForEvryQuetion=2,
    finalMark=0;
	ans=true;
	
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
 
/*true var answer=[document.getElementById('choice1').checked=true,
			document.getElementById('choice2a').checked=true,
			document.getElementById('choice1b').checked=true,
			document.getElementById('choice2c').checked=true,
			document.getElementById('choice3d').checked=true,
			document.getElementById('choice1e').checked=true,
			document.getElementById('choice2f').checked=true,
			document.getElementById('choice2g').checked=true,
			document.getElementById('choice3h').checked=true,
			document.getElementById('choice1i').checked=true];
;
*/
 


function correct(){
"use strict";
if(
            document.getElementById('choice1').checked &&
			document.getElementById('choice2a').checked &&
			document.getElementById('choice1b').checked &&
			document.getElementById('choice2c').checked &&
			document.getElementById('choice3d').checked &&
			document.getElementById('choice1e').checked &&
			document.getElementById('choice2f').checked &&
			document.getElementById('choice2g').checked &&
			document.getElementById('choice3h').checked &&
			document.getElementById('choice1i').checked==true)
			{
				alert("100")
			}
else if( 

            document.getElementById('choice1').checked &&
			document.getElementById('choice2a').checked &&
			document.getElementById('choice1b').checked &&
			document.getElementById('choice2c').checked &&
			document.getElementById('choice3d').checked &&
			document.getElementById('choice1e').checked &&
			document.getElementById('choice2f').checked &&
			document.getElementById('choice2g').checked &&
			document.getElementById('choice3h').checked==true &&
			document.getElementById('choice1i').checked==false){alert("90");}
			
															else if( document.getElementById('choice1').checked &&
															document.getElementById('choice2a').checked &&
															document.getElementById('choice1b').checked &&
															document.getElementById('choice2c').checked &&
															document.getElementById('choice3d').checked &&
															document.getElementById('choice1e').checked &&
															document.getElementById('choice2f').checked &&
															document.getElementById('choice2g').checked==true &&
															document.getElementById('choice3h').checked==false &&
															document.getElementById('choice1i').checked==true){alert("90");}
			
															else if( document.getElementById('choice1').checked &&
															document.getElementById('choice2a').checked &&
															document.getElementById('choice1b').checked &&
															document.getElementById('choice2c').checked &&
															document.getElementById('choice3d').checked &&
															document.getElementById('choice1e').checked &&
															document.getElementById('choice2f').checked==true &&
															document.getElementById('choice2g').checked==false &&
															document.getElementById('choice3h').checked==true &&
															document.getElementById('choice1i').checked==true){alert("90");}
			
															
															
															else if( document.getElementById('choice1').checked &&
															document.getElementById('choice2a').checked &&
															document.getElementById('choice1b').checked &&
															document.getElementById('choice2c').checked &&
															document.getElementById('choice3d').checked &&
															document.getElementById('choice1e').checked &&
															document.getElementById('choice2f').checked==true &&
															document.getElementById('choice2g').checked==false &&
															document.getElementById('choice3h').checked==true &&
															document.getElementById('choice1i').checked==true){alert("90");}
			
															 
															
															else if( document.getElementById('choice1').checked &&
															document.getElementById('choice2a').checked &&
															document.getElementById('choice1b').checked &&
															document.getElementById('choice2c').checked &&
															document.getElementById('choice3d').checked &&
															document.getElementById('choice1e').checked==true &&
															document.getElementById('choice2f').checked==false &&
															document.getElementById('choice2g').checked==true &&
															document.getElementById('choice3h').checked==true &&
															document.getElementById('choice1i').checked==true){alert("90");}
															
															else if( document.getElementById('choice1').checked &&
															document.getElementById('choice2a').checked &&
															document.getElementById('choice1b').checked &&
															document.getElementById('choice2c').checked &&
															document.getElementById('choice3d').checked==true &&
															document.getElementById('choice1e').checked==false &&
															document.getElementById('choice2f').checked==true &&
															document.getElementById('choice2g').checked==true &&
															document.getElementById('choice3h').checked==true &&
															document.getElementById('choice1i').checked==true){alert("90");}
															
															else if( document.getElementById('choice1').checked &&
															document.getElementById('choice2a').checked &&
															document.getElementById('choice1b').checked &&
															document.getElementById('choice2c').checked==true &&
															document.getElementById('choice3d').checked==false &&
															document.getElementById('choice1e').checked==true &&
															document.getElementById('choice2f').checked==true &&
															document.getElementById('choice2g').checked==true &&
															document.getElementById('choice3h').checked==true &&
															document.getElementById('choice1i').checked==true){alert("90");}
															
															else if( document.getElementById('choice1').checked &&
															document.getElementById('choice2a').checked &&
															document.getElementById('choice1b').checked==true &&
															document.getElementById('choice2c').checked==false &&
															document.getElementById('choice3d').checked==true &&
															document.getElementById('choice1e').checked==true &&
															document.getElementById('choice2f').checked==true &&
															document.getElementById('choice2g').checked==true &&
															document.getElementById('choice3h').checked==true &&
															document.getElementById('choice1i').checked==true
															
															|| document.getElementById('choice1').checked &&
															document.getElementById('choice2a').checked==true &&
															document.getElementById('choice1b').checked==false &&
															document.getElementById('choice2c').checked==true &&
															document.getElementById('choice3d').checked==true &&
															document.getElementById('choice1e').checked==true &&
															document.getElementById('choice2f').checked==true &&
															document.getElementById('choice2g').checked==true &&
															document.getElementById('choice3h').checked==true &&
															document.getElementById('choice1i').checked==true){alert("90");}
															
															else if( document.getElementById('choice1').checked==true &&
															document.getElementById('choice2a').checked==false &&
															document.getElementById('choice1b').checked==true &&
															document.getElementById('choice2c').checked==true &&
															document.getElementById('choice3d').checked==true &&
															document.getElementById('choice1e').checked==true &&
															document.getElementById('choice2f').checked==true &&
															document.getElementById('choice2g').checked==true &&
															document.getElementById('choice3h').checked==true &&
															document.getElementById('choice1i').checked==true){alert("90");}
															
															else if( document.getElementById('choice1').checked==false &&
															document.getElementById('choice2a').checked==true &&
															document.getElementById('choice1b').checked==true &&
															document.getElementById('choice2c').checked==true &&
															document.getElementById('choice3d').checked==true &&
															document.getElementById('choice1e').checked==true &&
															document.getElementById('choice2f').checked==true &&
															document.getElementById('choice2g').checked==true &&
															document.getElementById('choice3h').checked==true &&
															document.getElementById('choice1i').checked==true){alert("90");}
															
															  
			
			
			
			 
/* three true*/
 else if (document.getElementById('choice1').checked && document.getElementById('choice2a').checked && document.getElementById('choice1b').checked) {
	  finalMark=finalMark+(3*markForEvryQuetion);
  alert(finalMark);
}

 else if(document.getElementById('choice1').checked && document.getElementById('choice1b').checked ) {
	finalMark=finalMark+(2*markForEvryQuetion);
  alert(finalMark);
}

/* two true*/
 else if (document.getElementById('choice1').checked && document.getElementById('choice2a').checked) {
	finalMark=finalMark+(2*markForEvryQuetion);
  alert(finalMark);
}

/*start one answer true*/

else if (document.getElementById('choice1').checked) {
	finalMark=finalMark+2
  alert(finalMark);
}
else if (document.getElementById('choice2a').checked) {
 finalMark=finalMark+2
  alert(finalMark);
}
else if (document.getElementById('choice1b').checked) {
  finalMark=finalMark+2
  alert(finalMark);
}

else if (document.getElementById('choice2c').checked) {
  finalMark=finalMark+2
  alert(finalMark);
}

else if (document.getElementById('choice3d').checked) {
  finalMark=finalMark+2
  alert(finalMark);
}

else if (document.getElementById('choice1e').checked) {
  finalMark=finalMark+2
  alert(finalMark);
}

else if (document.getElementById('choice2f').checked) {
  finalMark=finalMark+2
  alert(finalMark);
}

else if (document.getElementById('choice2g').checked) {
  finalMark=finalMark+2
  alert(finalMark);
}

else if (document.getElementById('choice3h').checked) {
  finalMark=finalMark+2
  alert(finalMark);
}

else if (document.getElementById('choice1i').checked) {
  finalMark=finalMark+2
  alert(finalMark);
}
/* end one answer true*/

/* false*/
else if (document.getElementById('choice3').checked) {
  alert("f2");
}
}

/*

*/





for(i=1;i<11;i++){
	for( j=i+1;j<11;j++){
console.log (i,j);

}}