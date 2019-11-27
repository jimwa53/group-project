var userlist = JSON.parse(localStorage.getItem("userlist"));

var regusername = document.getElementById("username");
var regpassword = document.getElementById("password");
var regemail = document.getElementById("email");
var regesex = document.getElementById("sex");
var regfname = document.getElementById("fname");
var reglname = document.getElementById("lname")

//function signup(){submitup(regusername,regpassword,regesex,regemail,regfname,reglname)};

function submitup() {
//Start of checking input words
	var check = /^[a-zA-Z0-9]*$/;
	var emailcheck = /^([a-z0-9\-_])*@([a-z0-9\.\-])*\.[a-z*]*(\.[a-z]*)*$/;
	var resultuser = check.test(regusername.value);
	var resultpass = check.test(regpassword.value);
	var resultemail = emailcheck.test(regemail.value);
	
	if (regusername.value == "" || regpassword.value == "" || regemail.value == "" || regfname.value == "" || reglname.value == "") {
		alert("Please enter all your information!");
	} else {
		//The start of checking the validation
		switch(true) {
			case !resultuser && !resultpass && !resultemail:
				alert("Please enter correct Email!");
				alert("The username and password allow only alphanumeric characters!");
				return;
			case !resultuser && !resultpass:
				return alert("The username and password allow only alphanumeric characters!");
			case !resultuser && resultpass && !resultemail:
				alert("Please enter correct Email!");
				alert("The username allow only alphanumeric characters!");
				return;
			case !resultuser && resultpass:
				return alert("The username allow only alphanumeric characters!");
			case !resultpass && resultuser && !resultemail:
				alert("Please enter correct Email!");
				alert("The password allow only alphanumeric characters!");
				return;
			case !resultpass && resultuser:
				return alert("The password allow only alphanumeric characters!");
			case (resultuser && resultpass && !resultemail):
				return alert("Please enter correct Email!");
		}
		//The end of checking the validation
		// for (var i=0;i<localStorage.length;i++) {
		// 	var cuserdata = JSON.parse(localStorage.getItem("userlist"));
		// 	if (regusername.value == cusername || regemail.value == cemail) {
		// 		alert("The username or email is already exists!");
		// 		return
		// 	}
		// }
//End of checking input words
		var UserInfo = {
			UserId:(userlist.length+1),
			FirstName:regfname.value,
			LastName:reglname.value,
			Gender:regesex.value,
			UserType:"customer",
			UserName:regusername.value,
			UserPassword:regpassword.value
		};
		userlist.push(UserInfo);
		console.log(userlist);
		localStorage.setItem("userlist",JSON.stringify(userlist)); //if all input is correct, save the data to localStorage
		window.location.href="suss.html";
	}
}