function updateBalance(checkBoxState){
	if(checkBoxState){
		$("#balance").text("Amount you want to buy:");
	}
	else{
		$("#balance").text("Amount you want to sell:");
	}
}

updateBalance();