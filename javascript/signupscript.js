var regusername = document.getElementById("username");
var regpassword = document.getElementById("password");

function signup(){submitup(regusername.value,regpassword.value)};

function submitup(username,password) {
//Start of checking input words
	var check = /^[a-zA-Z0-9]*$/;
	var resultuser = check.test(regusername.value);
	var resultpass = check.test(regpassword.value);
	if (!resultuser) {
		alert("The username allow only alphanumeric characters");
		return
	} else if (!resultpass) {
		alert("The password allow only alphanumeric characters");
		return
	}
	if (regusername.value == "" || regpassword.value == "") {
		alert("Please enter your username and password!");
	} else {
		for (var i=0;i<localStorage.length;i++) {
			var cuserdata = JSON.parse(localStorage.getItem(i));
			var cusername = cuserdata[0];
			if (regusername.value == cusername) {
				alert("The username is already exists!");
				return
			}
		}
//End of checking input words
		localStorage.setItem(localStorage.length,JSON.stringify([username,password])); //if all input is correct, save the data to localStorage
	}
}
