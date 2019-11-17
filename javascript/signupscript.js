var regusername = document.getElementById("username");
var regpassword = document.getElementById("password");

document.getElementById("signup").onclick = function(){submitup(regusername.value,regpassword.value)};

function submitup(username,password) {
	if (regusername.value=="" || regpassword.value=="") {
		alert("Please enter your username and password!");
	} else {
		localStorage.setItem(localStorage.length,JSON.stringify([username,password]));
		return window.location.href = "signin.html";
	}
}