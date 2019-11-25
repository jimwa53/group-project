var userlist = [];

function createUser()
{
    var firstName = document.getElementById("firstname");
    var lastName = document.getElementById("lastname");
    var gender = document.getElementById("gender");
    var userType = document.getElementById("staffType");
    var userName = document.getElementById("user");
    var userPassword = document.getElementById("password");
    
    var UserInfo = {
        FirstName:firstName.value,
        LastName:lastName.value,
        Gender:gender.value,
        UserType:userType.value,
        UserName:userName.value,
        UserPassword:userPassword.value
    };

    userlist.push(UserInfo)
    console.log(userlist)
    displayUserList();

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
                        "<h4 class=\"card-title\">"+firstName+lastName+"</h4>"+
                        "<p class=\"card-text\">"+userType+"</p>"+
                        "<button type=\"button\""+"id=\""+"user"+ +"\""+"\"class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">"+
                            "Edit"+
                        "</button>"+
                    "</div>"+
                "</div>"
            "</div>"

        console.log(htmlContent)
        $("#createButton").before(htmlContent);
    })
}