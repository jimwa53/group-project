var loginusername = document.getElementById("loginusername");
var loginpassword = document.getElementById("loginpassword");


document.getElementById("submit").onclick = function(){submitin(loginusername.value,loginpassword.value)};

function submitin(nameInput,passInput) {
	var iscorrect;
	if (loginusername.value == "" || loginpassword.value == "") {
		alert("Please enter your username and password!");
	} else {
		for (var i=0;i<localStorage.length;i++) {
			var userdata = JSON.parse(localStorage.getItem(i));
			var getusername = userdata[0];
			var getpassword = userdata[1];
			var type = userdata[2];
			if (getusername == nameInput && getpassword == passInput && type == "customer") {
				sessionStorage.setItem("logineduser",nameInput);
				return window.location.href="customer.html";
			} else if (getusername == nameInput && getpassword == passInput) {
				sessionStorage.setItem("logineduser",nameInput);
				return window.location.href="index.html";
			} else {
				iscorrect = false;
				
			}
		}
		if (!iscorrect){
			alert("wrong");
		}
	}
}