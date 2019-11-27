var userlist = JSON.parse(localStorage.getItem("userlist"));

var regusername = document.getElementById("username");
var regpassword = document.getElementById("password");
var regemail = document.getElementById("email");
var regesex = document.getElementById("sex");
var regfname = document.getElementById("fname");
var reglname = document.getElementById("lname")

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
			default:
				var UserInfo = {
					UserId:(userlist.length+1),
					FirstName:regfname.value,
					LastName:reglname.value,
					Gender:regesex.value,
					Email:regemail.value,
					UserType:"customer",
					UserName:regusername.value,
					UserPassword:regpassword.value
				};
				userlist.push(UserInfo);
				console.log(userlist);
				localStorage.setItem("userlist",JSON.stringify(userlist));
				$(location).attr('href', 'suss.html');
		}

//End of checking input words
		 //if all input is correct, save the data to localStorage
	}
}

function checkUsername()
{
    $("#username").removeClass()
    $("#signup").removeAttr("disabled")
    userlist.forEach(function(User){
        if(regusername.value == User.UserName)
        {
            $("#username").addClass("border border-danger")
            regusername.value = "";
            $("#signup").attr("disabled","true")
            return alert("The User name has been used")
        }else
        {
            $("#username").addClass("border border-success") 
        }
    })
}

function checkUsername()
{
    $("#username").removeClass()
    $("#signup").removeAttr("disabled")
    userlist.forEach(function(User){
        if(regusername.value == User.UserName)
        {
            $("#username").addClass("border border-danger")
            regusername.value = "";
            $("#signup").attr("disabled","true")
            return alert("The User name has been used")
        }else
        {
            $("#username").addClass("border border-success") 
        }
    })
}

