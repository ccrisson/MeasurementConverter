const cmInput = document.querySelector('.cm-input');
const inputBtn = document.querySelector('#input-btn');
const outputPar = document.querySelector('.output-inches');


inputBtn.addEventListener("click", function(event){
	event.preventDefault();
	cmConversion();
});

cmConversion = function(){
	let denominator = 16;
	let cm = cmInput.value;

	let inches = cm/2.54;
	let wholeInches = Math.floor(inches);
	console.log(`whole inches: ${wholeInches}`);
	let decimalInches = inches-wholeInches;
	console.log(`decmal inches: ${decimalInches}`);
	let numerator = Math.floor(decimalInches / (1/denominator));
	console.log(`sixteenths: ${numerator}`);
	
	if(decimalInches % (1/denominator) > 0){
		numerator++;
		if(numerator === denominator){
			numerator = 0;
			wholeInches++;
		}
	}
	while(numerator != 0 && numerator % 2 === 0){
		numerator /= 2;
		denominator /= 2;
	}
	let fraction = '';
	if(numerator != 0){
		fraction = `${numerator}/${denominator}`;
	}
	let feet = Math.floor(wholeInches / 12);
	console.log(wholeInches % 12);
	inches = wholeInches % 12;
	let outStr = '';
	if(feet > 0){
		outStr += feet;
		outStr += "' ";
	}
	if(inches > 0){
		outStr += inches;
	}
	if(numerator > 0){
		outStr += ` ${numerator}/${denominator}`
	}
	if(inches > 0 || numerator > 0){
		outStr += '"';
	}
	outputPar.textContent = outStr;
}


