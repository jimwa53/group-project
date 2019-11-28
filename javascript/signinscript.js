var loginusername = document.getElementById("loginusername");
var loginpassword = document.getElementById("loginpassword");

//var patt = /booking.html/i
//var test = sessionStorage.getItem("url").match(patt);
document.getElementById("submit").onclick = function(){submitin(loginusername.value,loginpassword.value)};
function submitin(nameInput,passInput) {
	var iscorrect;
	if (loginusername.value == "" || loginpassword.value == "") {
		alert("Please enter your username and password!");
	} else {
		for (var i=0;i<userlist.length;i++) 
		{
			if (userlist[i].UserName == nameInput && userlist[i].UserPassword == passInput) 
			{
				sessionStorage.setItem("logineduser",userlist[i].UserName);
				if (userlist[i].UserType == "customer") {
					//return window.location.href="customer.html";
					
					var patt = new RegExp("booking.html");
					if (patt.test(sessionStorage.getItem("url"))) {
						sessionStorage.setItem("alertsuss","true");
						return window.history.go(-2);
					} else {
						return window.location.href="customer.html";
					}
				}

				else if (userlist[i].UserType == "Kitchen Staff")
					return window.location.href="staff.html";

				else if (userlist[i].UserType == "Housekeeping Staff")
					return window.location.href="staff.html";

				else (userlist[i].UserType == "Hotel Manager")
					return window.location.href="admin.html";
			}
			
			else 
			{
				iscorrect = false;
			}
		}
		if (!iscorrect){
			alert("wrong");
		}
	}
}