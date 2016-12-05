function updateBalance(checkBoxState){
	if(checkBoxState){
		$("#type").text("Buying:");
	}
	else{
		$("#type").text("Selling:");
	}
}

updateBalance();