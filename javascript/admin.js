var editingUser;
var firstName = document.getElementById("firstname");
var lastName = document.getElementById("lastname");
var gender = document.getElementById("gender");
var email = document.getElementById("email")
var userType = document.getElementById("staffType");
var userName = document.getElementById("username");
var userPassword = document.getElementById("password");
     
var userlist = JSON.parse(localStorage.getItem("userlist"));
displayUserList();



function createUser()
{
    var ready = isEmpty()
    if (ready == true)
    {
        var UserInfo = {
            UserId:(userlist.length+1),
            FirstName:firstName.value,
            LastName:lastName.value,
            Gender:gender.value,
            Email:email.value,
            UserType:userType.value,
            UserName:userName.value,
            UserPassword:userPassword.value
        };
    
        userlist.push(UserInfo)
        console.log(userlist);
        addUserList(userlist[(userlist.length-1)]);
        localStorage.setItem("userlist",JSON.stringify(userlist))
        
        $("#confirmAddUser").attr('data-dismiss', "modal");
    
        clearData();
    }
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
        }

        var htmlContent =
        "<div class=\"col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2\">"+
            "<div class=\"card\">"+
                "<img class=\"card-img-top\" src=\""+profilephoto+"\" alt=\"Card image\" style=\"width:100%\">"+
                "<div class=\"card-body\">"+
                    "<h4 class=\"card-title\">"+firstName+" "+lastName+"</h4>"+
                    "<p class=\"card-text\">"+userType+"</p>"+
                    "<button type=\"button\""+"onclick=\"editUser("+userNumber+")\""+"class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#User\">"+
                        "Edit"+
                    "</button>"+
                "</div>"+
            "</div>"
        "</div>"
        if (userType == "customer")
        {
            $("#customerTitle").after(htmlContent);
        }else
        {
            console.log(htmlContent)
            $("#createButton").before(htmlContent);
        }
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
    }

    var htmlContent =
    "<div class=\"col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2\">"+
            "<div class=\"card\">"+
                "<img class=\"card-img-top\" src=\""+profilephoto+"\" alt=\"Card image\" style=\"width:100%\">"+
                "<div class=\"card-body\">"+
                    "<h4 class=\"card-title\">"+firstName+" "+lastName+"</h4>"+
                    "<p class=\"card-text\">"+userType+"</p>"+
                    "<button type=\"button\""+"onclick=\"editUser("+userNumber+")\""+"class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#User\">"+
                        "Edit"+
                    "</button>"+
                "</div>"+
            "</div>"
        "</div>"

    if (userType == "customer")
    {
        $("#customerTitle").after(htmlContent);
    }else
    {
        console.log(htmlContent)
        $("#createButton").before(htmlContent);
    }
}

function editUser(UserString)
{
    $("#confirmAddUser").removeAttr("onclick");
    $("#username").removeAttr("onfocusout");
    $("#username").attr("disabled","true");
    $("#confirmAddUser").attr("onclick","saveEditUser()");
    $("#confirmAddUser").removeAttr("data-dismiss")


    userlist.forEach(function(User){
        console.log(User.UserId)
        if(UserString == User.UserId)
        {
            editingUser = User.UserId;
            firstName.value = User.FirstName;
            lastName.value = User.LastName;
            gender.value = User.Gender;
            email.value = User.Email;
            userType.value = User.UserType;
            userName.value = User.UserName;
            userPassword.value = User.UserPassword;
            return;
        }
    })

    if(userType.value == "customer")
    {
        $("#staffType").attr("disabled","true")
    }else
    {
        $("#staffType").removeAttr("disabled")
    }
    console.log(UserString)
}

function saveEditUser()
{ 
    var arrayposition = editingUser - 1;
    var uploadIsReady = isEmpty()
    
    if (uploadIsReady == true)
    {
        userlist[arrayposition] = 
        {
            UserId:editingUser,
            FirstName:firstName.value,
            LastName:lastName.value,               
            Gender:gender.value,  
            Email:email.value,
            UserType:userType.value,
            UserName:userName.value,
            UserPassword:userPassword.value
        }
        console.log(userlist);
        localStorage.setItem("userlist",JSON.stringify(userlist));
        $("#confirmAddUser").attr('data-dismiss',"modal");
        window.location.reload();
    }
}

function isEmpty()
{
    var check = /^[a-zA-Z0-9]*$/;
    var emailcheck = /^([a-z0-9\-_])*@([a-z0-9\.\-])*\.[a-z*]*(\.[a-z]*)*$/;
    var resultfirstName = check.test(firstName.value);
    var resultlastName = check.test(lastName.value);
	var resultUserName = check.test(userName.value);
	var resultpass = check.test(userPassword.value);
    var resultemail = emailcheck.test(email.value);
    
    console.log(resultfirstName)
    if (firstName.value == "" && !resultfirstName)
    {
        return alert("Please input First name")
    }
    else if (!resultfirstName)
    {
        return alert("First name allow only alphanumeric characters!")
    }
    else if (lastName.value.length == 0)
    {
        return alert("Please input Last name")
    }
    else if (!resultlastName)
    {
        return alert("Last name allow only alphanumeric characters!")
    }
    else if (gender.value == "")
    {
        return alert("Please select gender")
    }else if (email.value.length == 0)
    {
        return alert("Please input Email")
    }
    else if (!resultemail)
    {
        alert("Please enter correct Email!")
    }
    else if (userType.value =="")
    {
        return alert("Please select User Type")
    }
    else if (userName.value.length == 0)
    {
        return alert("Please input User Name")
    }
    else if (!resultUserName)
    {
        return alert("User name allow only alphanumeric characters!")
    }
    else if (userPassword.value.length == 0)
    {
        return alert("Please input User Password")
    }
    else if (!resultpass)
    {
        return alert("Password name allow only alphanumeric characters!")
    }
    else
    {
        return true;
    }
}

function clearData()
{
    firstName.value = "";
    lastName.value = "";
    gender.value = "";
    email.value=""
    userType.value = "";
    userName.value = "";
    userPassword.value = "";
}

function setCreateAttr()
{
    $("#confirmAddUser").removeAttr("onclick");
    $("#confirmAddUser").attr("onclick","createUser()");
    $("#confirmAddUser").removeAttr("data-dismiss");
    $("#username").removeAttr("disabled");
    $("#username").attr("onfocusout","checkUsername()");
}

function checkUsername()
{
    $("#username").removeClass()
    $("#confirmAddUser").removeAttr("disabled")
    userlist.forEach(function(User){
        if(userName.value == User.UserName)
        {
            $("#username").addClass("border border-danger")
            userName.value = "";
            $("#confirmAddUser").attr("disabled","true")
            return alert("The User name has been used")
        }else
        {
            $("#username").addClass("border border-success") 
        }
    })
}
