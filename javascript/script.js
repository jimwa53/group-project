// var signinusername = sessionStorage.getItem("logineduser");
// document.getElementById("customer").innerHTML = signinusername;
if (localStorage.getItem("userlist") == null)
{
    var userlist = 
    [
        {
            UserId:1,
            FirstName:"Tai Man",
            LastName:"Chan",
            Gender:"Male",
            UserType:"Hotel Manager",
            UserName:"admin",
            UserPassword:"admin"
        }
    ];
    var userlist = JSON.parse(localStorage.getItem("userlist"))
    displayUserList();
}else
{     
    var userlist = JSON.parse(localStorage.getItem("userlist"));
    displayUserList();
}