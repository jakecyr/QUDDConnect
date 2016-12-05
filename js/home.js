//Called when the register button is clicked
function register(){
	//Get the entered name
	var name = $("#full-name").val();
	var email = $("#email").val();
	var password = $("#register-password").val();
	var confirm = $("#register-confirm").val();
	
	var nameRegEx = /\w+\s\w+[\s\w+]?/;
	var emailRegEx = /.+@.+/;

	//Check if a name was entered
	if(name != ""){
		//Add the username to the URL
		addParam("username", name);

		//Load the settings page
		loadPage('settings.html');

		//Update the username in the navigation bar
		updateUsername(name);
	}
}

//Create a new Date object
var dateObj = new Date();

//Set the year to the current year
$(".year").text(dateObj.getFullYear());