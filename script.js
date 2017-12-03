	 drawTree(5);
function drawTree(i) {
	for( var k=0; k<= i; k++) {
		var star = '';
		var sp = ' ';
		for( var s=0; s<=i-1-k; s++){
			 sp += ' ';	
		}	
		for( var j=1; j<=k*2-1; j++) { 
			star += '*';
		}	
			console.log(sp + star);
		}
}