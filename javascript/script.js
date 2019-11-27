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
    localStorage.setItem("userlist",JSON.stringify(userlist))
}else
{     
    var userlist = JSON.parse(localStorage.getItem("userlist"));
}

if (sessionStorage.getItem("logineduser") !== null);
{
    var signinusername = sessionStorage.getItem("logineduser");
    console.log(signinusername);
    document.getElementById("customer").innerHTML = signinusername;
}