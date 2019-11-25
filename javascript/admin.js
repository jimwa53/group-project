var editingUser;

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
    displayUserList();
}else
{     
    var userlist = JSON.parse(localStorage.getItem("userlist"));
    displayUserList();
}


function createUser()
{
    var firstName = document.getElementById("firstname");
    var lastName = document.getElementById("lastname");
    var gender = document.getElementById("gender");
    var userType = document.getElementById("staffType");
    var userName = document.getElementById("user");
    var userPassword = document.getElementById("password");
    
    var UserInfo = {
        UserId:(userlist.length+1),
        FirstName:firstName.value,
        LastName:lastName.value,
        Gender:gender.value,
        UserType:userType.value,
        UserName:userName.value,
        UserPassword:userPassword.value
    };

    userlist.push(UserInfo)
    console.log(userlist);
    addUserList(userlist[(userlist.length-1)]);
    localStorage.setItem("userlist",JSON.stringify(userlist))

    firstName.value = "";
    lastName.value = "";
    gender.value = "";
    userType.value = "";
    userName.value = "";
    userPassword.value = "";
}

function displayUserList()
{
    userlist.forEach(function(User){
        var firstName = User.FirstName;
        var lastName = User.LastName;
        var gender = User.Gender;
        var userType = User.UserType;
        var userName =User.UserName;
        var profilephoto;
        var userNumber = userlist.indexOf(User)+1;
        

        if (gender == "Male")
        {
            profilephoto = "images/profilephotomale.png"
        }else
        {
            profilephoto = "images/profilephotofemale.png"
        };

        var htmlContent =
        "<div class=\"col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2\">"+
            "<div class=\"card\">"+
                "<img class=\"card-img-top\" src=\""+profilephoto+"\" alt=\"Card image\" style=\"width:100%\">"+
                "<div class=\"card-body\">"+
                    "<h4 class=\"card-title\">"+firstName+" "+lastName+"</h4>"+
                    "<p class=\"card-text\">"+userType+"</p>"+
                    "<button type=\"button\""+"onclick=\"editUser("+userNumber+")\""+"class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#editModal\">"+
                        "Edit"+
                    "</button>"+
                "</div>"+
            "</div>"
        "</div>"

        console.log(htmlContent)
        $("#createButton").before(htmlContent);
    })
}

function addUserList(User)
{
    var firstName = User.FirstName;
    var lastName = User.LastName;
    var gender = User.Gender;
    var userType = User.UserType;
    var userName =User.UserName;
    var profilephoto;
    var userNumber = userlist.indexOf(User)+1;

    if (gender == "Male")
    {
        profilephoto = "images/profilephotomale.png"
    }else
    {
        profilephoto = "images/profilephotofemale.png"
    };

    var htmlContent =
    "<div class=\"col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2\">"+
            "<div class=\"card\">"+
                "<img class=\"card-img-top\" src=\""+profilephoto+"\" alt=\"Card image\" style=\"width:100%\">"+
                "<div class=\"card-body\">"+
                    "<h4 class=\"card-title\">"+firstName+" "+lastName+"</h4>"+
                    "<p class=\"card-text\">"+userType+"</p>"+
                    "<button type=\"button\""+"onclick=\"editUser("+userNumber+")\""+"class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#editModal\">"+
                        "Edit"+
                    "</button>"+
                "</div>"+
            "</div>"
        "</div>"

    console.log(htmlContent)
    $("#createButton").before(htmlContent);
}

function editUser(UserString)
{
    var firstName = document.getElementById("efirstname");
    var lastName = document.getElementById("elastname");
    var gender = document.getElementById("egender");
    var userType = document.getElementById("estaffType");
    var userName = document.getElementById("euser");
    var userPassword = document.getElementById("epassword"); 

    userlist.forEach(function(User){
        console.log(User.UserId)
        if(UserString == User.UserId)
        {
            editingUser = User.UserId;
            firstName.value = User.FirstName;
            lastName.value = User.LastName;
            gender.value = User.Gender;
            userType.value = User.UserType;
            userName.value = User.UserName;
            userPassword.value = User.UserPassword;
        }
    })
    console.log(UserString)
}

function saveEditUser()
{
    var firstName = document.getElementById("efirstname");
    var lastName = document.getElementById("elastname");
    var gender = document.getElementById("egender");
    var userType = document.getElementById("estaffType");
    var userName = document.getElementById("euser");
    var userPassword = document.getElementById("epassword"); 
    var arrayposition = editingUser - 1;
    
    userlist[arrayposition] = 
    {
        UserId:editingUser,
        FirstName:firstName.value,
        LastName:lastName.value,               
        Gender:gender.value,              
        UserType:userType.value,
        UserName:userName.value,
        UserPassword:userPassword.value
    };
    console.log(userlist);
    localStorage.setItem("userlist",JSON.stringify(userlist));
    window.location.reload();
}
