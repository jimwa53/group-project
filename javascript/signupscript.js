var regusername = document.getElementById("username");
var regpassword = document.getElementById("password");
var regemail = document.getElementById("email");

function signup(){submitup(regusername.value,regpassword.value,regemail.value)};

function submitup(username,password,email) {
//Start of checking input words
	var check = /^[a-zA-Z0-9]*$/;
	var emailcheck = /^([a-z0-9\-_])*@([a-z0-9\.\-])*\.[a-z*]*(\.[a-z]*)*$/;
	var resultuser = check.test(regusername.value);
	var resultpass = check.test(regpassword.value);
	var resultemail = emailcheck.test(regemail.value);
	
	if (regusername.value == "" || regpassword.value == "" || regemail.value == "") {
		alert("Please enter all your information!");
	} else {
		//The start of checking the validation
		switch(true) {
			case !resultuser && !resultpass && !resultemail:
				alert("Not email");
				alert("The username and password allow only alphanumeric characters");
				return;
			case !resultuser && !resultpass:
				return alert("The username and password allow only alphanumeric characters");
			case !resultuser && resultpass && !resultemail:
				alert("Not email");
				alert("The username allow only alphanumeric characters");
				return;
			case !resultuser && resultpass:
				return alert("The username allow only alphanumeric characters");
			case !resultpass && resultuser && !resultemail:
				alert("Not email");
				alert("The password allow only alphanumeric characters");
				return;
			case !resultpass && resultuser:
				return alert("The password allow only alphanumeric characters");
			case (resultuser && resultpass && !resultemail):
				return alert("Non email");
		}
		//The end of checking the validation
		for (var i=0;i<localStorage.length;i++) {
			var cuserdata = JSON.parse(localStorage.getItem(i));
			var cusername = cuserdata[0];
			if (regusername.value == cusername) {
				alert("The username is already exists!");
				return
			}
		}
//End of checking input words
		localStorage.setItem(localStorage.length,JSON.stringify([username,password,"customer",email])); //if all input is correct, save the data to localStorage
		window.location.href="suss.html";
	}
}