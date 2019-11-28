var menulist = JSON.parse(localStorage.getItem("menulist"));
displayMenulist();
var roomlist = JSON.parse(localStorage.getItem("roomlist"));
if (localStorage.getItem("customerlist")== null)
{
    var customerlist = [];
}else
{
    var customerlist = JSON.parse(localStorage.getItem("customerlist"));
}
displayOrderlist();

function displayMenulist()
{
    menulist.forEach(function(Menu){
        var mealId = Menu.MealId;
        var mealName = Menu.MealName;
        var price = Menu.Price;
        var onMenu = Menu.OnMenu;
        var mealPhoto;
        mealPhoto = "images/menu/"+Menu.MealImg;

        var htmlContent =
        "<div class=\"col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2\">"+
            "<div class=\"card\">"+
                "<img class=\"card-img-top\" src=\""+mealPhoto+"\" alt=\"Card image\" style=\"height:150px\">"+
                "<div class=\"card-body\">"+
                    "<h4 class=\"card-title\">"+mealName+"</h4>"+
                    "<p class=\"card-text\">price: $"+price+"</p>"+
                    "<button type=\"button\""+"onclick=\"editMenu("+mealId+")\""+"class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#Menu\">"+
                        "Change menu"+
                    "</button>"+
                "</div>"+
            "</div>"
        "</div>"

            $("#mealcard").before(htmlContent);
        
    })
}

 function displayOrderlist()
{
     customerlist.forEach(function(customer){
        var mealId = customer.MealId;
        var mealName = customer.MealName;
        var price = customer.Price;
        var onMenu = customer.OnMenu;
        var mealPhoto;
        mealPhoto = "images/menu/"+customer.MealImg;
        var login;
       for(i=0;i<userlist.length;i++)
       {
           if(sessionStorage.getItem("logineduser")==null)
           {
            window.location.href="signin.html"
           }else
           {
            if(sessionStorage.getItem("logineduser")==userlist[i].UserName)
            {
                var userItem = userlist[i].UserType
                if(userItem == "customer")
                {
                        var htmlContent =
                        "<div class=\"col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2\">"+
                        "<div class=\"card\">"+
                            "<img class=\"card-img-top\" src=\""+mealPhoto+"\" alt=\"Card image\" style=\"height:150px\">"+
                            "<div class=\"card-body\">"+
                                "<h4 class=\"card-title\">"+mealName+"</h4>"+
                                "<p class=\"card-text\">price: $"+price+"</p>"+
                                "<button type=\"button\""+"onclick=\"orderMenu("+mealId+")\""+"class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#Menu\">"+
                                    "Order menu"+
                                "</button>"+
                            "</div>"+
                        "</div>"
                    "</div>"
                }else
                {
                        var htmlContent =
                        "<div class=\"col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2\">"+
                        "<div class=\"card\">"+
                            "<img class=\"card-img-top\" src=\""+mealPhoto+"\" alt=\"Card image\" style=\"height:150px\">"+
                            "<div class=\"card-body\">"+
                                "<h4 class=\"card-title\">"+mealName+"</h4>"+
                                "<p class=\"card-text\">price: $"+price+"</p>"+
                                "<button type=\"button\""+"onclick=\"delMenu("+mealId+")\""+"class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#Menu\">"+
                                    "Change menu"+
                                "</button>"+"</br>"+
                                "<button type=\"button\""+"onclick=\"orderMenu("+mealId+")\""+"class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#Menu\">"+
                                    "Order menu"+
                                "</button>"+
                            "</div>"+
                        "</div>"
                    "</div>"
                }
            }
        }
       }
         
            $("#menucard").after(htmlContent);
        })
 }


function editMenu(inputId)
{
        for(i=0;i<menulist.length;i++)
        {
            if (menulist[i].MealId == inputId)
            {
                 var a = menulist.indexOf(menulist[i])
                 customerlist.push(menulist[i]) 
                 menulist.splice(a,1)
                 console.log(menulist);
                 localStorage.setItem("customerlist",JSON.stringify(customerlist));
                 localStorage.setItem("menulist",JSON.stringify(menulist));
                 window.location.reload();
             }   
        }
       
     
}

function delMenu(inputId)
{
    for(i=0;i<customerlist.length;i++)
    {
        if (customerlist[i].MealId == inputId)
        {
             var a = customerlist.indexOf(customerlist[i])
             menulist.push(customerlist[i]) 
             customerlist.splice(a,1)
             console.log(menulist);
             localStorage.setItem("customerlist",JSON.stringify(customerlist));
             localStorage.setItem("menulist",JSON.stringify(menulist));
             window.location.reload();
         }   
    }
}

function orderMenu(inputId)
{
    for(i=0;i<customerlist.length;i++)
    {
        if (customerlist[i].MealId == inputId)
        {
            for(x=0;x<roomlist.length;x++)
            {
            
                    if(sessionStorage.getItem("logineduser")==roomlist[x].UserId)
                    {
                        console.log(sessionStorage.getItem("logineduser"))
                        console.log(sessionStorage.getItem(roomlist[x].UserName))
                        
                        var a = customerlist.indexOf(customerlist[i])
                        roomlist[x].mealorder=customerlist[a].MealId
                        roomlist[x].Price += customerlist[i].Price
                        localStorage.setItem("roomlist",JSON.stringify(roomlist));
                        return;
                    }
                }   
            
            }
        }
    }